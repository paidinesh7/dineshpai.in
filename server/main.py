import json
import uuid
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Dict, Iterable, Tuple

from .alerts import AlertManager
from .config import get_settings
from .logging_config import configure_logging
from .metrics import Metrics
from .schemas import ParseError, SubmissionRequest

REQUIRED_METRICS: Iterable[str] = ("latency_ms", "payload_size")


class SubmissionService:
    def __init__(self, log_dir: Path) -> None:
        self.request_logger, self.alert_logger = configure_logging(log_dir)
        self.metrics = Metrics()
        self.alert_manager = AlertManager(self.alert_logger, self.metrics)

    def handle_submission(self, data: Dict, headers: Dict[str, str]) -> Tuple[int, Dict]:
        submission_id_header = headers.get("X-Submission-ID") or headers.get("x-submission-id")
        try:
            submission = SubmissionRequest.from_raw(data)
        except ParseError as exc:
            submission_id = submission_id_header or "unknown"
            self.alert_manager.record_parse_failure(submission_id, exc.errors)
            return 422, {"detail": exc.errors, "submission_id": submission_id}

        submission_id = submission.submission_id or submission_id_header or str(uuid.uuid4())
        self.metrics.record_submission()

        missing_metrics = []
        if not submission.metrics:
            missing_metrics = list(REQUIRED_METRICS)
        else:
            missing_metrics = [key for key in REQUIRED_METRICS if key not in submission.metrics]

        if missing_metrics:
            self.alert_manager.missing_required_metrics(submission_id, missing_metrics)

        self.request_logger.info(
            "submission_received",
            extra={
                "submission_id": submission_id,
                "request_id": str(uuid.uuid4()),
                "path": "/submissions",
                "status_code": 200,
                "metrics_present": bool(submission.metrics),
            },
        )

        return 200, {
            "submission_id": submission_id,
            "status": "accepted",
            "metrics_recorded": bool(submission.metrics),
        }

    def health(self) -> Tuple[int, Dict]:
        return 200, {"status": "ok", "metrics": self.metrics.snapshot()}

    def metrics_summary(self) -> Tuple[int, Dict]:
        return 200, self.metrics.snapshot()


class SubmissionRequestHandler(BaseHTTPRequestHandler):
    server_version = "SubmissionServer/1.0"

    def _read_json_body(self) -> Dict:
        length = int(self.headers.get("Content-Length", 0))
        raw_body = self.rfile.read(length) if length else b""
        if not raw_body:
            return {}
        try:
            return json.loads(raw_body.decode("utf-8"))
        except json.JSONDecodeError:
            raise ParseError([{"loc": ["body"], "msg": "Malformed JSON"}])

    def _write_json(self, status: int, payload: Dict) -> None:
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        body = json.dumps(payload).encode("utf-8")
        self.wfile.write(body)

    def do_POST(self):  # noqa: N802
        if self.path != "/submissions":
            self._write_json(404, {"error": "Not found"})
            return
        try:
            data = self._read_json_body()
        except ParseError as exc:
            self.server.service.alert_manager.record_parse_failure("unknown", exc.errors)
            self._write_json(400, {"detail": exc.errors})
            return
        status, payload = self.server.service.handle_submission(data, dict(self.headers))
        self._write_json(status, payload)

    def do_GET(self):  # noqa: N802
        if self.path == "/health":
            status, payload = self.server.service.health()
            self._write_json(status, payload)
        elif self.path == "/metrics":
            status, payload = self.server.service.metrics_summary()
            self._write_json(status, payload)
        else:
            self._write_json(404, {"error": "Not found"})

    def log_message(self, format: str, *args) -> None:  # noqa: A003
        # Silence default stdout logging in favor of structured logs
        return


class SubmissionHTTPServer(ThreadingHTTPServer):
    def __init__(self, server_address, RequestHandlerClass, service: SubmissionService) -> None:
        super().__init__(server_address, RequestHandlerClass)
        self.service = service


def create_service() -> SubmissionService:
    settings = get_settings()
    return SubmissionService(settings.log_dir)


def run(host: str = "0.0.0.0", port: int = 8000) -> None:
    service = create_service()
    with SubmissionHTTPServer((host, port), SubmissionRequestHandler, service) as server:
        print(f"Starting submission server on {host}:{port}")
        server.serve_forever()


if __name__ == "__main__":
    run()

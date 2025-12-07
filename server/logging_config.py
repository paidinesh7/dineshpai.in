import json
import logging
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Iterable


class JSONLogFormatter(logging.Formatter):
    """Formats log records as single-line JSON."""

    def __init__(self, extra_fields: Iterable[str] | None = None) -> None:
        super().__init__()
        self._whitelist = set(extra_fields or [])

    def format(self, record: logging.LogRecord) -> str:
        payload: Dict[str, object] = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "level": record.levelname,
            "message": record.getMessage(),
        }

        for key, value in record.__dict__.items():
            if key in {"msg", "args", "levelname", "levelno", "pathname", "filename", "module", "exc_info", "exc_text", "stack_info", "lineno", "funcName", "created", "msecs", "relativeCreated", "thread", "threadName", "processName", "process", "name"}:
                continue
            if key.startswith("_"):
                continue
            if self._whitelist and key not in self._whitelist:
                continue
            payload[key] = value

        return json.dumps(payload)


def _reset_logger(name: str) -> logging.Logger:
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    logger.propagate = False
    for handler in list(logger.handlers):
        logger.removeHandler(handler)
    return logger


def configure_logging(log_dir: Path) -> tuple[logging.Logger, logging.Logger]:
    """Configure request and alert loggers with JSON output.

    Returns the request and alert loggers for further use.
    """

    log_dir.mkdir(parents=True, exist_ok=True)

    request_logger = _reset_logger("requests")
    alert_logger = _reset_logger("alerts")

    request_handler = logging.FileHandler(log_dir / "requests.log")
    request_handler.setFormatter(
        JSONLogFormatter(
            extra_fields={
                "submission_id",
                "request_id",
                "path",
                "status_code",
                "metrics_present",
            }
        )
    )
    request_logger.addHandler(request_handler)

    alert_handler = logging.FileHandler(log_dir / "alerts.log")
    alert_handler.setFormatter(
        JSONLogFormatter(
            extra_fields={
                "submission_id",
                "reason",
                "details",
            }
        )
    )
    alert_logger.addHandler(alert_handler)

    return request_logger, alert_logger

import importlib
import json
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from server import config


@pytest.fixture(autouse=True)
def reload_config():
    importlib.reload(config)


@pytest.fixture
def service(tmp_path, monkeypatch):
    monkeypatch.setenv("LOG_DIR", str(tmp_path))
    from server.main import SubmissionService

    return SubmissionService(tmp_path), tmp_path


def test_submission_logging_and_metrics(service):
    submission_service, tmp_path = service
    status, data = submission_service.handle_submission(
        {
            "submission_id": "sub-123",
            "payload": {"foo": "bar"},
            "metrics": {"latency_ms": 120, "payload_size": 512},
        },
        {},
    )

    assert status == 200
    assert data["submission_id"] == "sub-123"
    assert data["metrics_recorded"] is True

    metrics = submission_service.metrics.snapshot()
    assert metrics["submission_count"] == 1
    assert metrics["parse_failures"] == 0
    assert metrics["missing_required_metrics"] == 0

    request_log = tmp_path / "requests.log"
    assert request_log.exists()
    with request_log.open() as handle:
        lines = [json.loads(line) for line in handle]
    assert any(entry.get("submission_id") == "sub-123" and entry.get("metrics_present") for entry in lines)


def test_missing_metrics_triggers_alert(service):
    submission_service, tmp_path = service
    status, data = submission_service.handle_submission({"payload": {"hello": "world"}}, {})
    assert status == 200
    assert data["metrics_recorded"] is False

    metrics = submission_service.metrics.snapshot()
    assert metrics["missing_required_metrics"] == 1
    assert metrics["submission_count"] == 1

    alerts_log = tmp_path / "alerts.log"
    assert alerts_log.exists()
    with alerts_log.open() as handle:
        alerts = [json.loads(line) for line in handle]
    assert any(alert.get("reason") == "missing_metrics" for alert in alerts)


def test_parse_failure_alerting(service):
    submission_service, tmp_path = service
    status, _ = submission_service.handle_submission({"submission_id": "oops", "payload": "invalid"}, {})
    assert status == 422

    metrics = submission_service.metrics.snapshot()
    assert metrics["parse_failures"] == 1

    alerts_log = tmp_path / "alerts.log"
    with alerts_log.open() as handle:
        alerts = [json.loads(line) for line in handle]
    assert any(alert.get("reason") == "parse_failure" for alert in alerts)

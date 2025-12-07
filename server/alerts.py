import logging
from typing import Iterable

from .metrics import Metrics


class AlertManager:
    """Centralized alert logging for parse and metrics issues."""

    def __init__(self, logger: logging.Logger, metrics: Metrics) -> None:
        self.logger = logger
        self.metrics = metrics

    def record_parse_failure(self, submission_id: str, details: Iterable[dict]) -> None:
        self.metrics.record_parse_failure()
        self.logger.error(
            "parse_failure",
            extra={"submission_id": submission_id, "reason": "parse_failure", "details": list(details)},
        )

    def missing_required_metrics(self, submission_id: str, required: Iterable[str]) -> None:
        self.metrics.record_missing_metrics()
        self.logger.warning(
            "missing_required_metrics",
            extra={"submission_id": submission_id, "reason": "missing_metrics", "details": list(required)},
        )

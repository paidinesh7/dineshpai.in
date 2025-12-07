from dataclasses import dataclass, field
from threading import Lock
from typing import Dict


@dataclass
class Metrics:
    """Thread-safe counters for submission processing."""

    submission_count: int = 0
    parse_failures: int = 0
    missing_required_metrics: int = 0
    _lock: Lock = field(default_factory=Lock, repr=False, compare=False)

    def record_submission(self) -> None:
        with self._lock:
            self.submission_count += 1

    def record_parse_failure(self) -> None:
        with self._lock:
            self.parse_failures += 1

    def record_missing_metrics(self) -> None:
        with self._lock:
            self.missing_required_metrics += 1

    def snapshot(self) -> Dict[str, int]:
        with self._lock:
            return {
                "submission_count": self.submission_count,
                "parse_failures": self.parse_failures,
                "missing_required_metrics": self.missing_required_metrics,
            }

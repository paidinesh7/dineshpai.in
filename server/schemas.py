from dataclasses import dataclass
from typing import Any, Dict, List, Optional


class ParseError(Exception):
    def __init__(self, errors: List[dict]):
        super().__init__("Invalid submission payload")
        self.errors = errors


@dataclass
class SubmissionRequest:
    submission_id: Optional[str]
    payload: Dict[str, Any]
    metrics: Optional[Dict[str, int]]

    @classmethod
    def from_raw(cls, data: Dict[str, Any]) -> "SubmissionRequest":
        errors: List[dict] = []

        if not isinstance(data, dict):
            raise ParseError([{"loc": ["body"], "msg": "Payload must be an object"}])

        allowed_keys = {"submission_id", "payload", "metrics"}
        extra_keys = set(data.keys()) - allowed_keys
        if extra_keys:
            errors.append({"loc": list(extra_keys), "msg": "Unexpected fields"})

        payload = data.get("payload", {})
        if not isinstance(payload, dict):
            errors.append({"loc": ["payload"], "msg": "payload must be an object"})

        metrics = data.get("metrics")
        if metrics is not None:
            if not isinstance(metrics, dict):
                errors.append({"loc": ["metrics"], "msg": "metrics must be an object"})
            else:
                non_int = [k for k, v in metrics.items() if not isinstance(v, int)]
                if non_int:
                    errors.append({"loc": ["metrics", non_int], "msg": "metric values must be integers"})

        submission_id = data.get("submission_id")
        if submission_id is not None and not isinstance(submission_id, str):
            errors.append({"loc": ["submission_id"], "msg": "submission_id must be a string"})

        if errors:
            raise ParseError(errors)

        return cls(submission_id=submission_id, payload=payload if isinstance(payload, dict) else {}, metrics=metrics if isinstance(metrics, dict) else None)

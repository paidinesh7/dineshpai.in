Static website + blog.

## Submission service

A lightweight Python service captures structured submission logs, health, and metrics without external dependencies.

### Run locally

```
python -m server.main
```

### Endpoints

- `POST /submissions` — accepts a submission payload, logs with a submission ID, and records metrics.
- `GET /health` — returns service status and current metric counters.
- `GET /metrics` — returns counts for submissions, parse failures, and missing metrics events.

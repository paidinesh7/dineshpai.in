from dataclasses import dataclass
from pathlib import Path
import os


@dataclass
class Settings:
    """Runtime configuration for the server."""

    log_dir: Path = Path(os.getenv("LOG_DIR", "logs"))

    def ensure(self) -> None:
        self.log_dir.mkdir(parents=True, exist_ok=True)


def get_settings() -> Settings:
    settings = Settings()
    settings.ensure()
    return settings

"""
NEX-INT-006 — Workforce-owned durable execution evidence journal.

Nexus consumes this only through the adapter evidence() surface.
Nexus must never own or mutate Workforce Agent/Task objects.
"""

from __future__ import annotations

from dataclasses import dataclass, asdict
from typing import Any, Dict, Optional
import json
import threading
from pathlib import Path


@dataclass(frozen=True)
class ExecutionEvidence:
    """Workforce-owned lifecycle evidence exposed across the Nexus boundary."""
    request_id: str
    handler_started: bool
    terminal: bool
    status: Optional[str] = None
    task_id: Optional[str] = None
    agent_id: Optional[str] = None
    output: Any = None
    error: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ExecutionEvidence":
        return cls(
            request_id=data["request_id"],
            handler_started=bool(data.get("handler_started", False)),
            terminal=bool(data.get("terminal", False)),
            status=data.get("status"),
            task_id=data.get("task_id"),
            agent_id=data.get("agent_id"),
            output=data.get("output"),
            error=data.get("error"),
        )


class DurableExecutionEvidenceJournal:
    """
    Minimal file-backed journal (JSONL) for cross-restart evidence.
    Ownership stays entirely inside Workforce.
    """

    def __init__(self, path: str | Path = "./workforce_evidence.jsonl") -> None:
        self.path = Path(path)
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self._lock = threading.Lock()
        self._index: Dict[str, ExecutionEvidence] = {}
        self._load()

    def _load(self) -> None:
        if not self.path.exists():
            return
        with self.path.open("r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                rec = ExecutionEvidence.from_dict(json.loads(line))
                self._index[rec.request_id] = rec

    def _rewrite(self) -> None:
        tmp = self.path.with_suffix(".tmp")
        with tmp.open("w", encoding="utf-8") as f:
            for rec in self._index.values():
                f.write(json.dumps(rec.to_dict(), default=str) + "\n")
        tmp.replace(self.path)

    def get(self, request_id: str) -> Optional[ExecutionEvidence]:
        with self._lock:
            return self._index.get(str(request_id))

    def put(self, evidence: ExecutionEvidence) -> ExecutionEvidence:
        with self._lock:
            self._index[evidence.request_id] = evidence
            self._rewrite()
            return evidence

    def close(self) -> None:
        pass

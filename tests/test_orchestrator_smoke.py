#!/usr/bin/env python3
"""Minimal end-to-end path for the Python digital_double core."""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from digital_double import AgentType, Orchestrator  # noqa: E402


def test_create_assign_complete():
    orch = Orchestrator()
    agent = orch.create_agent(AgentType.IT)
    task = orch.create_task(
        type=AgentType.IT,
        description="smoke: setup env",
        priority="high",
    )
    orch.assign_task(task.id)
    agent.complete_task(success=True)
    assert agent.performance.tasks_completed >= 1


if __name__ == "__main__":
    test_create_assign_complete()
    print("ok")

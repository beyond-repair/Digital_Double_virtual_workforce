"""Tests for Task (canonical root package)."""
from __future__ import annotations

import sys
from datetime import datetime, timedelta
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from digital_double import AgentType, Orchestrator  # noqa: E402


@pytest.fixture
def orchestrator():
    return Orchestrator()


@pytest.fixture
def sample_task(orchestrator):
    return orchestrator.create_task(
        type=AgentType.IT, description="Test task", priority="medium"
    )


def test_task_creation(sample_task):
    assert sample_task.status == "pending"
    assert sample_task.assigned_to is None
    assert isinstance(sample_task.created, datetime)


def test_task_assignment(sample_task):
    agent_id = "test-agent-id"
    sample_task.assign(agent_id)
    assert sample_task.status == "in-progress"
    assert sample_task.assigned_to == agent_id


def test_task_with_deadline(orchestrator):
    deadline = datetime.now() + timedelta(days=1)
    task = orchestrator.create_task(
        type=AgentType.IT, description="Urgent task", priority="high"
    )
    task.deadline = deadline
    assert task.deadline == deadline
    assert task.priority == "high"

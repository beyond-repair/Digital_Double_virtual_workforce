"""Tests for Agent (canonical root package)."""
from __future__ import annotations

import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from digital_double import AgentType, Orchestrator  # noqa: E402


@pytest.fixture
def orchestrator():
    return Orchestrator()


@pytest.fixture
def it_agent(orchestrator):
    return orchestrator.create_agent(AgentType.IT)


@pytest.fixture
def sample_task(orchestrator):
    return orchestrator.create_task(
        type=AgentType.IT,
        description="Test task",
        priority="medium",
    )


def test_agent_creation(it_agent):
    assert it_agent.status == "idle"
    assert it_agent.type == AgentType.IT
    assert it_agent.current_task is None
    assert it_agent.performance.tasks_completed == 0


def test_agent_task_assignment(it_agent, sample_task):
    it_agent.assign_task(sample_task)
    assert it_agent.status == "working"
    assert it_agent.current_task == sample_task


def test_agent_task_completion(it_agent, sample_task):
    it_agent.assign_task(sample_task)
    it_agent.complete_task(success=True)
    assert it_agent.status == "idle"
    assert it_agent.current_task is None
    assert it_agent.performance.tasks_completed == 1
    assert it_agent.performance.success_rate == 100.0


def test_agent_task_failure(it_agent, sample_task):
    it_agent.assign_task(sample_task)
    it_agent.complete_task(success=False)
    assert it_agent.performance.success_rate < 100.0
    assert sample_task.status == "failed"


def test_busy_agent_assignment(it_agent, orchestrator):
    first_task = orchestrator.create_task(
        type=AgentType.IT, description="First task", priority="high"
    )
    it_agent.assign_task(first_task)
    second_task = orchestrator.create_task(
        type=AgentType.IT, description="Second task", priority="high"
    )
    with pytest.raises(ValueError):
        it_agent.assign_task(second_task)


def test_agent_prompt(it_agent):
    assert it_agent.get_model_name() == "mistral/mistral-7b-instruct"
    assert isinstance(it_agent.get_system_prompt(), str)
    assert len(it_agent.get_system_prompt()) > 0

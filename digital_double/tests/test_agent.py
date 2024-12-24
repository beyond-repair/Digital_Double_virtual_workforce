"""
Tests for Agent functionality.
"""
import pytest
from digital_double import AgentType
from digital_double.core.task import Task

def test_agent_creation(it_agent):
    """Test agent initialization."""
    assert it_agent.status == "idle"
    assert it_agent.type == AgentType.IT
    assert it_agent.current_task is None
    assert it_agent.performance.tasks_completed == 0

def test_agent_task_assignment(it_agent, sample_task):
    """Test assigning task to agent."""
    it_agent.assign_task(sample_task)
    assert it_agent.status == "working"
    assert it_agent.current_task == sample_task

def test_agent_task_completion(it_agent, sample_task):
    """Test task completion."""
    it_agent.assign_task(sample_task)
    it_agent.complete_task(success=True)
    
    assert it_agent.status == "idle"
    assert it_agent.current_task is None
    assert it_agent.performance.tasks_completed == 1
    assert it_agent.performance.success_rate == 100.0

def test_agent_task_failure(it_agent, sample_task):
    """Test task failure handling."""
    it_agent.assign_task(sample_task)
    it_agent.complete_task(success=False)
    
    assert it_agent.performance.success_rate < 100.0
    assert sample_task.status == "failed"

def test_busy_agent_assignment(it_agent, orchestrator):
    """Test assigning task to busy agent."""
    first_task = orchestrator.create_task(
        type=AgentType.IT,
        description="First task",
        priority="high"
    )
    it_agent.assign_task(first_task)
    
    second_task = orchestrator.create_task(
        type=AgentType.IT,
        description="Second task",
        priority="high"
    )
    
    with pytest.raises(ValueError):
        it_agent.assign_task(second_task)

def test_agent_prompt(it_agent):
    """Test agent prompt and model access."""
    assert it_agent.get_model_name() == "mistral/mistral-7b-instruct"
    assert isinstance(it_agent.get_system_prompt(), str)
    assert len(it_agent.get_system_prompt()) > 0
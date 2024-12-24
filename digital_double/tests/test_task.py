"""
Tests for Task functionality.
"""
from datetime import datetime, timedelta
from digital_double import AgentType

def test_task_creation(sample_task):
    """Test task initialization."""
    assert sample_task.status == "pending"
    assert sample_task.assigned_to is None
    assert isinstance(sample_task.created, datetime)

def test_task_assignment(sample_task):
    """Test assigning task to agent."""
    agent_id = "test-agent-id"
    sample_task.assign(agent_id)
    
    assert sample_task.status == "in-progress"
    assert sample_task.assigned_to == agent_id

def test_task_with_deadline(orchestrator):
    """Test task with deadline."""
    deadline = datetime.now() + timedelta(days=1)
    task = orchestrator.create_task(
        type=AgentType.IT,
        description="Urgent task",
        priority="high"
    )
    task.deadline = deadline
    
    assert task.deadline == deadline
    assert task.priority == "high"
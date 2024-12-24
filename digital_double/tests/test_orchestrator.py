"""
Tests for Orchestrator functionality.
"""
from digital_double import AgentType

def test_orchestrator_initialization(orchestrator):
    """Test orchestrator creation."""
    assert len(orchestrator.agents) == 0
    assert len(orchestrator.tasks) == 0

def test_agent_creation(orchestrator):
    """Test creating agents."""
    agent = orchestrator.create_agent(AgentType.IT)
    assert agent.id in orchestrator.agents
    assert len(orchestrator.agents) == 1

def test_task_creation(orchestrator):
    """Test creating tasks."""
    task = orchestrator.create_task(
        type=AgentType.IT,
        description="Test task",
        priority="high"
    )
    assert task.id in orchestrator.tasks
    assert task.priority == "high"

def test_task_assignment(orchestrator):
    """Test task assignment."""
    agent = orchestrator.create_agent(AgentType.IT)
    task = orchestrator.create_task(
        type=AgentType.IT,
        description="Test task"
    )
    
    success = orchestrator.assign_task(task.id)
    assert success
    assert task.status == "in-progress"
    assert task.assigned_to == agent.id

def test_mismatched_task_assignment(orchestrator):
    """Test assigning task to wrong agent type."""
    orchestrator.create_agent(AgentType.IT)
    task = orchestrator.create_task(
        type=AgentType.MARKETING,
        description="Marketing task"
    )
    
    success = orchestrator.assign_task(task.id)
    assert not success
    assert task.status == "pending"

def test_get_available_agents(orchestrator):
    """Test retrieving available agents."""
    agent1 = orchestrator.create_agent(AgentType.IT)
    agent2 = orchestrator.create_agent(AgentType.MARKETING)
    
    available = orchestrator.get_available_agents()
    assert len(available) == 2
    
    task = orchestrator.create_task(
        type=AgentType.IT,
        description="Test task"
    )
    orchestrator.assign_task(task.id)
    
    available = orchestrator.get_available_agents()
    assert len(available) == 1
    assert available[0].id == agent2.id
"""
Shared pytest fixtures.
"""
import pytest
from digital_double import Orchestrator, AgentType

@pytest.fixture
def orchestrator():
    """Provide a fresh orchestrator instance."""
    return Orchestrator()

@pytest.fixture
def it_agent(orchestrator):
    """Provide an IT agent instance."""
    return orchestrator.create_agent(AgentType.IT)

@pytest.fixture
def marketing_agent(orchestrator):
    """Provide a Marketing agent instance."""
    return orchestrator.create_agent(AgentType.MARKETING)

@pytest.fixture
def sample_task(orchestrator):
    """Provide a sample task."""
    return orchestrator.create_task(
        type=AgentType.IT,
        description="Test task",
        priority="medium"
    )
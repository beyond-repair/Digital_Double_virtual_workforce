"""Validation utilities for the system."""
from typing import Optional
from ..agent_types import AgentType

def validate_priority(priority: str) -> bool:
    """Validate task priority."""
    return priority in ["low", "medium", "high"]

def validate_agent_type(agent_type: str) -> Optional[AgentType]:
    """Validate and convert agent type string."""
    try:
        return AgentType(agent_type)
    except ValueError:
        return None

def validate_task_status(status: str) -> bool:
    """Validate task status."""
    return status in ["pending", "in-progress", "completed", "failed"]
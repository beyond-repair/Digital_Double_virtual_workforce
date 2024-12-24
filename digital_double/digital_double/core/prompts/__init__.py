"""Agent prompts package."""
from .factory import create_agent_prompt

def get_agent_prompt(agent_type):
    """Get the prompt for a specific agent type."""
    return create_agent_prompt(agent_type)
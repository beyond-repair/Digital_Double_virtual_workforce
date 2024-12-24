"""Factory for creating agent prompts."""
from .base import AgentPrompt
from .templates import (
    IT_PROMPT, MARKETING_PROMPT, CONTENT_PROMPT, DESIGN_PROMPT,
    FINANCE_PROMPT, EMBEDDED_PROMPT, MOBILE_PROMPT, LEGAL_PROMPT
)
from ..agent_types import AgentType

PROMPT_MAPPING = {
    AgentType.IT: IT_PROMPT,
    AgentType.MARKETING: MARKETING_PROMPT,
    AgentType.CONTENT: CONTENT_PROMPT,
    AgentType.DESIGN: DESIGN_PROMPT,
    AgentType.FINANCE: FINANCE_PROMPT,
    AgentType.EMBEDDED: EMBEDDED_PROMPT,
    AgentType.MOBILE: MOBILE_PROMPT,
    AgentType.LEGAL: LEGAL_PROMPT,
}

def create_agent_prompt(agent_type: AgentType) -> AgentPrompt:
    """Create an agent prompt for the specified type."""
    system_prompt = PROMPT_MAPPING[agent_type]
    return AgentPrompt(system_prompt)
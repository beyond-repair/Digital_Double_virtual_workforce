"""Base prompt configuration."""
from ..config import MODEL_CONFIG

class AgentPrompt:
    """Base class for all agent prompts."""
    def __init__(self, system_prompt: str):
        self.system_prompt = system_prompt
        self.model = MODEL_CONFIG["name"]
        self.temperature = MODEL_CONFIG["temperature"]
        self.max_tokens = MODEL_CONFIG["max_tokens"]
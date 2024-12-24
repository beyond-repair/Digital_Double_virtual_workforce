"""Service layer for agent operations."""
from typing import List, Optional
from ..agent import Agent
from ..agent_types import AgentType
from ..prompts import get_agent_prompt

class AgentService:
    def __init__(self):
        self.agents = {}

    def create_agent(self, agent_type: AgentType) -> Agent:
        """Create and initialize a new agent."""
        agent = Agent(
            type=agent_type,
            prompt=get_agent_prompt(agent_type)
        )
        self.agents[agent.id] = agent
        return agent

    def get_available_agents(self) -> List[Agent]:
        """Get all available agents."""
        return [agent for agent in self.agents.values() 
                if agent.status == "idle"]

    def get_agent_by_type(self, agent_type: AgentType) -> Optional[Agent]:
        """Get first available agent of specified type."""
        return next(
            (agent for agent in self.agents.values()
             if agent.type == agent_type and agent.status == "idle"),
            None
        )

    def remove_agent(self, agent_id: str) -> bool:
        """Remove an agent from the system."""
        if agent_id in self.agents:
            del self.agents[agent_id]
            return True
        return False
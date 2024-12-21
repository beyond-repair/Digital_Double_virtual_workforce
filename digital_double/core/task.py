from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from .agent_types import AgentType

class Task(BaseModel):
    id: str
    type: AgentType
    description: str
    priority: str  # low, medium, high
    status: str = "pending"  # pending, in-progress, completed, failed
    created: datetime = datetime.now()
    deadline: Optional[datetime] = None
    assigned_to: Optional[str] = None

    def assign(self, agent_id: str) -> None:
        """Assign the task to an agent."""
        self.assigned_to = agent_id
        self.status = "in-progress"
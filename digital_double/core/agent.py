from __future__ import annotations

from dataclasses import dataclass, field
from typing import Optional

from .agent_types import AgentType
from .prompts import get_agent_prompt
from .task import Task


@dataclass
class Performance:
    tasks_completed: int = 0
    average_time: float = 0.0
    success_rate: float = 100.0


@dataclass
class Agent:
    id: str
    type: AgentType
    status: str = "idle"  # idle, working, error
    current_task: Optional[Task] = None
    performance: Performance = field(default_factory=Performance)

    def __post_init__(self) -> None:
        self._prompt = get_agent_prompt(self.type)

    def assign_task(self, task: Task) -> None:
        """Assign a task to the agent."""
        if self.status != "idle":
            raise ValueError("Agent is not available")
        self.current_task = task
        self.status = "working"

    def complete_task(self, success: bool = True) -> None:
        """Mark current task as complete and update performance metrics."""
        if not self.current_task:
            raise ValueError("No task assigned")

        self.performance.tasks_completed += 1
        if success:
            self.current_task.status = "completed"
        else:
            self.current_task.status = "failed"
            self.performance.success_rate = (
                (self.performance.tasks_completed - 1)
                / self.performance.tasks_completed
                * 100
            )

        self.current_task = None
        self.status = "idle"

    def get_model_name(self) -> str:
        """Return the model name associated with this agent type."""
        return self._prompt.model

    def get_system_prompt(self) -> str:
        """Return the system prompt for this agent type."""
        return self._prompt.system_prompt

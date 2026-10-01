from typing import Any, Optional

from pydantic import BaseModel, ConfigDict, PrivateAttr

from .agent_types import AgentType
from .prompts import get_agent_prompt
from .task import Task


class Performance(BaseModel):
    tasks_completed: int = 0
    average_time: float = 0.0
    success_rate: float = 100.0


class Agent(BaseModel):
    model_config = ConfigDict(arbitrary_types_allowed=True)

    id: str
    type: AgentType
    status: str = "idle"  # idle, working, error
    current_task: Optional[Task] = None
    performance: Performance = Performance()
    _prompt: Any = PrivateAttr(default=None)

    def model_post_init(self, __context: Any) -> None:
        self._prompt = get_agent_prompt(self.type)

    def assign_task(self, task: Task) -> None:
        """Assign a task to the agent."""
        if self.status != "idle":
            raise ValueError("Agent is not available")
        self.current_task = task
        self.status = "working"

        if task.code and task.instructions:
            # Placeholder for code generation/modification logic
            print(
                f"Agent {self.id} is generating/modifying code for "
                f"task {task.id}"
            )

    def complete_task(self, success: bool = True) -> None:
        """Mark current task as complete and update performance metrics."""
        if not self.current_task:
            raise ValueError("No task assigned")

        self.performance.tasks_completed += 1
        if self.current_task and self.current_task.test_code:
            print(
                f"Agent {self.id} is executing test code for "
                f"task {self.current_task.id}"
            )
            test_success = True  # Placeholder
            if test_success:
                self.current_task.status = "completed"
            else:
                self.current_task.status = "failed"
                self.performance.success_rate = (
                    (self.performance.tasks_completed - 1)
                    / self.performance.tasks_completed
                    * 100
                )
        elif success:
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
        """Get the name of the model used by this agent."""
        return self._prompt.model

    def get_system_prompt(self) -> str:
        """Get the system prompt for this agent."""
        return self._prompt.system_prompt

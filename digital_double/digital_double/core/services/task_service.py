"""Service layer for task operations."""
from typing import List
from datetime import datetime
from ..task import Task
from ..agent_types import AgentType

class TaskService:
    def __init__(self):
        self.tasks = {}

    def create_task(
        self, 
        type: AgentType, 
        description: str, 
        priority: str = "medium"
    ) -> Task:
        """Create a new task."""
        task = Task(
            type=type,
            description=description,
            priority=priority,
            created=datetime.now()
        )
        self.tasks[task.id] = task
        return task

    def get_pending_tasks(self) -> List[Task]:
        """Get all pending tasks."""
        return [task for task in self.tasks.values() 
                if task.status == "pending"]

    def update_task_status(
        self, 
        task_id: str, 
        status: str, 
        agent_id: Optional[str] = None
    ) -> bool:
        """Update task status and assignment."""
        if task_id in self.tasks:
            task = self.tasks[task_id]
            task.status = status
            if agent_id:
                task.assigned_to = agent_id
            return True
        return False
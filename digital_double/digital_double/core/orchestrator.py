from typing import List, Dict
from uuid import uuid4
from .agent import Agent
from .task import Task
from .agent_types import AgentType

class Orchestrator:
    def __init__(self):
        self.agents: Dict[str, Agent] = {}
        self.tasks: Dict[str, Task] = {}

    def create_agent(self, agent_type: AgentType) -> Agent:
        """Create a new agent of the specified type."""
        agent_id = str(uuid4())
        agent = Agent(id=agent_id, type=agent_type)
        self.agents[agent_id] = agent
        return agent

    def create_task(
        self, 
        type: AgentType, 
        description: str, 
        priority: str = "medium"
    ) -> Task:
        """Create a new task."""
        task_id = str(uuid4())
        task = Task(
            id=task_id,
            type=type,
            description=description,
            priority=priority
        )
        self.tasks[task_id] = task
        return task

    def assign_task(self, task_id: str) -> bool:
        """Attempt to assign a task to an available agent."""
        task = self.tasks.get(task_id)
        if not task or task.status != "pending":
            return False

        # Find available agent of matching type
        for agent in self.agents.values():
            if agent.type == task.type and agent.status == "idle":
                agent.assign_task(task)
                task.assign(agent.id)
                return True
        return False

    def get_available_agents(self) -> List[Agent]:
        """Get all available agents."""
        return [agent for agent in self.agents.values() 
                if agent.status == "idle"]

    def get_pending_tasks(self) -> List[Task]:
        """Get all pending tasks."""
        return [task for task in self.tasks.values() 
                if task.status == "pending"]
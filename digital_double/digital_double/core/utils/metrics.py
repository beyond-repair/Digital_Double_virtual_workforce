"""Metrics collection and analysis utilities."""
from typing import Dict, List
from datetime import datetime, timedelta
from ..agent import Agent
from ..task import Task

class MetricsCollector:
    @staticmethod
    def calculate_agent_metrics(agent: Agent) -> Dict:
        """Calculate performance metrics for an agent."""
        return {
            "tasks_completed": agent.performance.tasks_completed,
            "success_rate": agent.performance.success_rate,
            "average_time": agent.performance.average_time
        }

    @staticmethod
    def calculate_system_metrics(
        agents: List[Agent], 
        tasks: List[Task]
    ) -> Dict:
        """Calculate system-wide metrics."""
        total_tasks = len(tasks)
        completed_tasks = len([t for t in tasks if t.status == "completed"])
        active_agents = len([a for a in agents if a.status != "error"])
        
        return {
            "total_tasks": total_tasks,
            "completed_tasks": completed_tasks,
            "completion_rate": (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0,
            "active_agents": active_agents,
            "tasks_per_agent": total_tasks / active_agents if active_agents > 0 else 0
        }
"""Logging utilities for the system."""
import logging
from datetime import datetime

class SystemLogger:
    def __init__(self, name: str):
        self.logger = logging.getLogger(name)
        self.logger.setLevel(logging.INFO)
        
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        
        handler = logging.StreamHandler()
        handler.setFormatter(formatter)
        self.logger.addHandler(handler)

    def log_agent_action(self, agent_id: str, action: str, details: str):
        """Log agent-related actions."""
        self.logger.info(f"Agent {agent_id}: {action} - {details}")

    def log_task_update(self, task_id: str, status: str, agent_id: Optional[str]):
        """Log task status updates."""
        self.logger.info(
            f"Task {task_id} updated to {status}" + 
            (f" by agent {agent_id}" if agent_id else "")
        )

    def log_error(self, component: str, error: str):
        """Log system errors."""
        self.logger.error(f"{component} error: {error}")
"""API routes for the Digital Double system."""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from ..orchestrator import Orchestrator
from ..agent_types import AgentType

app = FastAPI(title="Digital Double API")
orchestrator = Orchestrator()

class TaskCreate(BaseModel):
    type: AgentType
    description: str
    priority: str = "medium"

class AgentCreate(BaseModel):
    type: AgentType

@app.post("/agents")
async def create_agent(agent_data: AgentCreate):
    """Create a new agent."""
    agent = orchestrator.create_agent(agent_data.type)
    return {"id": agent.id, "type": agent.type, "status": agent.status}

@app.get("/agents")
async def list_agents():
    """List all agents."""
    return orchestrator.get_available_agents()

@app.delete("/agents/{agent_id}")
async def remove_agent(agent_id: str):
    """Remove an agent."""
    if agent_id not in orchestrator.agents:
        raise HTTPException(status_code=404, detail="Agent not found")
    orchestrator.remove_agent(agent_id)
    return {"status": "success"}

@app.post("/tasks")
async def create_task(task_data: TaskCreate):
    """Create a new task."""
    task = orchestrator.create_task(
        type=task_data.type,
        description=task_data.description,
        priority=task_data.priority
    )
    return task

@app.get("/tasks")
async def list_tasks():
    """List all tasks."""
    return orchestrator.get_pending_tasks()

@app.post("/tasks/{task_id}/assign")
async def assign_task(task_id: str):
    """Assign a task to an available agent."""
    success = orchestrator.assign_task(task_id)
    if not success:
        raise HTTPException(status_code=400, detail="No available agent found")
    return {"status": "success"}
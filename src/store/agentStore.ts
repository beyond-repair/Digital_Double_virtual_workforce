import { create } from 'zustand';
import { Agent, Task } from '../types/agent';

interface AgentStore {
  agents: Agent[];
  tasks: Task[];
  addAgent: (agent: Agent) => void;
  removeAgent: (id: string) => void;
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: string, status: Task['status']) => void;
  assignTask: (taskId: string, agentId: string) => void;
}

export const useAgentStore = create<AgentStore>((set) => ({
  agents: [],
  tasks: [],
  
  addAgent: (agent) =>
    set((state) => ({ agents: [...state.agents, agent] })),
    
  removeAgent: (id) =>
    set((state) => ({
      agents: state.agents.filter((agent) => agent.id !== id),
    })),
    
  addTask: (task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
    
  updateTaskStatus: (taskId, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      ),
    })),
    
  assignTask: (taskId, agentId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, assignedTo: agentId } : task
      ),
    })),
}));
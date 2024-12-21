export type AgentType = 
  | 'IT'
  | 'MARKETING'
  | 'CONTENT'
  | 'DESIGN'
  | 'FINANCE'
  | 'EMBEDDED'
  | 'MOBILE'
  | 'LEGAL';

export interface Agent {
  id: string;
  type: AgentType;
  status: 'idle' | 'working' | 'error';
  currentTask?: Task;
  performance: {
    tasksCompleted: number;
    averageTime: number;
    successRate: number;
  };
}

export interface Task {
  id: string;
  type: AgentType;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  created: Date;
  deadline?: Date;
  assignedTo?: string;
}
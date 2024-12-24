import { useMemo } from 'react';
import { Agent } from '../types/agent';

export const useAgentMetrics = (agents: Agent[]) => {
  return useMemo(() => {
    const totalAgents = agents.length;
    const activeAgents = agents.filter(a => a.status === 'working').length;
    const totalTasksCompleted = agents.reduce(
      (sum, agent) => sum + agent.performance.tasksCompleted, 
      0
    );
    const averageSuccessRate = agents.reduce(
      (sum, agent) => sum + agent.performance.successRate, 
      0
    ) / totalAgents || 0;

    return {
      totalAgents,
      activeAgents,
      totalTasksCompleted,
      averageSuccessRate: Math.round(averageSuccessRate * 100) / 100,
      utilization: Math.round((activeAgents / totalAgents) * 100) || 0
    };
  }, [agents]);
};
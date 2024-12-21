import React from 'react';
import { Agent } from '../types/agent';
import { Brain, Activity, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface AgentCardProps {
  agent: Agent;
  onTerminate: (id: string) => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onTerminate }) => {
  const statusColor = {
    idle: 'bg-gray-200',
    working: 'bg-green-200',
    error: 'bg-red-200',
  }[agent.status];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Brain className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold">{agent.type} Agent</h3>
        </div>
        <div className={`px-3 py-1 rounded-full ${statusColor}`}>
          {agent.status}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-gray-500" />
          <span>Success Rate: {agent.performance.successRate}%</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-gray-500" />
          <span>Tasks Completed: {agent.performance.tasksCompleted}</span>
        </div>
      </div>

      {agent.currentTask && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600">Current Task:</p>
          <p className="text-sm font-medium">{agent.currentTask.description}</p>
        </div>
      )}

      <Button
        variant="destructive"
        onClick={() => onTerminate(agent.id)}
        className="w-full"
      >
        Terminate Agent
      </Button>
    </div>
  );
};
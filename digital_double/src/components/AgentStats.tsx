import React from 'react';
import { Agent } from '../types/agent';
import { Activity, CheckCircle, Clock } from 'lucide-react';

interface AgentStatsProps {
  agent: Agent;
}

export const AgentStats: React.FC<AgentStatsProps> = ({ agent }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex flex-col items-center">
        <Activity className="w-5 h-5 text-blue-500 mb-2" />
        <span className="text-sm text-gray-600">Success Rate</span>
        <span className="font-semibold">{agent.performance.successRate}%</span>
      </div>
      <div className="flex flex-col items-center">
        <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
        <span className="text-sm text-gray-600">Completed</span>
        <span className="font-semibold">{agent.performance.tasksCompleted}</span>
      </div>
      <div className="flex flex-col items-center">
        <Clock className="w-5 h-5 text-purple-500 mb-2" />
        <span className="text-sm text-gray-600">Avg Time</span>
        <span className="font-semibold">{agent.performance.averageTime}m</span>
      </div>
    </div>
  );
};
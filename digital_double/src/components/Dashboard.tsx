import React from 'react';
import { useAgentStore } from '../store/agentStore';
import { useAgentMetrics } from '../hooks/useAgentMetrics';
import { Users, CheckCircle, Percent, Activity } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const agents = useAgentStore(state => state.agents);
  const metrics = useAgentMetrics(agents);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Agents</p>
            <p className="text-2xl font-semibold">{metrics.totalAgents}</p>
          </div>
          <Users className="w-8 h-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Tasks Completed</p>
            <p className="text-2xl font-semibold">{metrics.totalTasksCompleted}</p>
          </div>
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Success Rate</p>
            <p className="text-2xl font-semibold">{metrics.averageSuccessRate}%</p>
          </div>
          <Percent className="w-8 h-8 text-purple-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Utilization</p>
            <p className="text-2xl font-semibold">{metrics.utilization}%</p>
          </div>
          <Activity className="w-8 h-8 text-orange-500" />
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { useAgentStore } from '../store/agentStore';
import { BarChart, Clock, TrendingUp } from 'lucide-react';
import { useTaskMetrics } from '../hooks/useTaskMetrics';

export const TaskAnalytics: React.FC = () => {
  const tasks = useAgentStore(state => state.tasks);
  const metrics = useTaskMetrics(tasks);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Task Analytics</h2>
        <BarChart className="w-5 h-5 text-gray-500" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Completion Rate</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-semibold">{metrics.completionRate}%</div>
          <div className="text-sm text-gray-500">
            {metrics.completedToday} completed today
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Average Time</span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-semibold">{metrics.averageTime}m</div>
          <div className="text-sm text-gray-500">
            per task completion
          </div>
        </div>
      </div>
    </div>
  );
};
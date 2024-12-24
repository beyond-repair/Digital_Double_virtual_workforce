import React from 'react';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

interface TaskPriorityProps {
  priority: 'low' | 'medium' | 'high';
}

export const TaskPriority: React.FC<TaskPriorityProps> = ({ priority }) => {
  const config = {
    low: {
      icon: CheckCircle,
      color: 'text-green-500',
      bg: 'bg-green-50',
      border: 'border-green-200'
    },
    medium: {
      icon: Clock,
      color: 'text-yellow-500',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200'
    },
    high: {
      icon: AlertTriangle,
      color: 'text-red-500',
      bg: 'bg-red-50',
      border: 'border-red-200'
    }
  }[priority];

  const Icon = config.icon;

  return (
    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${config.bg} ${config.border} border`}>
      <Icon className={`w-4 h-4 ${config.color}`} />
      <span className={`text-sm font-medium capitalize ${config.color}`}>
        {priority}
      </span>
    </div>
  );
};
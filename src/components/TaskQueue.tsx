import React from 'react';
import { Task } from '../types/agent';
import { Clock, AlertTriangle } from 'lucide-react';
import { Button } from './ui/Button';

interface TaskQueueProps {
  tasks: Task[];
  onAssign: (taskId: string) => void;
}

export const TaskQueue: React.FC<TaskQueueProps> = ({ tasks, onAssign }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Task Queue</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border rounded-lg p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{task.type}</span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                task.priority === 'high'
                  ? 'bg-red-100 text-red-800'
                  : task.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {task.priority}
              </span>
            </div>
            
            <p className="text-gray-600">{task.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>
                  {new Date(task.created).toLocaleDateString()}
                </span>
              </div>
              
              {task.deadline && (
                <div className="flex items-center space-x-2 text-sm text-red-500">
                  <AlertTriangle className="w-4 h-4" />
                  <span>
                    Due: {new Date(task.deadline).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>

            {!task.assignedTo && (
              <Button
                onClick={() => onAssign(task.id)}
                className="w-full mt-2"
              >
                Assign Task
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
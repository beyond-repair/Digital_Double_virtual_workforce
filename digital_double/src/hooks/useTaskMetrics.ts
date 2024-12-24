import { useMemo } from 'react';
import { Task } from '../types/agent';

export const useTaskMetrics = (tasks: Task[]) => {
  return useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const completedTasks = tasks.filter(t => t.status === 'completed');
    const completedToday = completedTasks.filter(t => 
      new Date(t.created) >= today
    ).length;

    const completionRate = tasks.length > 0
      ? (completedTasks.length / tasks.length) * 100
      : 0;

    const averageTime = completedTasks.length > 0
      ? completedTasks.reduce((sum, task) => {
          const start = new Date(task.created);
          const end = task.completedAt || new Date();
          return sum + (end.getTime() - start.getTime()) / (1000 * 60);
        }, 0) / completedTasks.length
      : 0;

    return {
      completionRate: Math.round(completionRate),
      completedToday,
      averageTime: Math.round(averageTime),
    };
  }, [tasks]);
};
import React from 'react';
import { AgentType } from '../types/agent';
import { Filter } from 'lucide-react';

interface TaskFiltersProps {
  selectedType: AgentType | 'all';
  selectedPriority: string | 'all';
  onTypeChange: (type: AgentType | 'all') => void;
  onPriorityChange: (priority: string | 'all') => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  selectedType,
  selectedPriority,
  onTypeChange,
  onPriorityChange
}) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
      <Filter className="w-5 h-5 text-gray-500" />
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value as AgentType | 'all')}
        className="px-3 py-2 rounded-md border border-gray-200"
      >
        <option value="all">All Types</option>
        <option value="IT">IT Support</option>
        <option value="MARKETING">Marketing</option>
        <option value="CONTENT">Content</option>
        <option value="DESIGN">Design</option>
        <option value="FINANCE">Finance</option>
        <option value="EMBEDDED">Embedded</option>
        <option value="MOBILE">Mobile</option>
        <option value="LEGAL">Legal</option>
      </select>
      
      <select
        value={selectedPriority}
        onChange={(e) => onPriorityChange(e.target.value)}
        className="px-3 py-2 rounded-md border border-gray-200"
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};
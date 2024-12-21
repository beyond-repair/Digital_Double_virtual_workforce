import React from 'react';
import { nanoid } from 'nanoid';
import { AgentType } from '../types/agent';
import { useAgentStore } from '../store/agentStore';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/Dialog';
import { Button } from './ui/Button';

interface CreateTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateTaskDialog: React.FC<CreateTaskDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const addTask = useAgentStore((state) => state.addTask);
  const [type, setType] = React.useState<AgentType>('IT');
  const [description, setDescription] = React.useState('');
  const [priority, setPriority] = React.useState<'low' | 'medium' | 'high'>('medium');
  const [deadline, setDeadline] = React.useState('');

  const handleCreateTask = () => {
    addTask({
      id: nanoid(),
      type,
      description,
      priority,
      status: 'pending',
      created: new Date(),
      deadline: deadline ? new Date(deadline) : undefined,
    });
    onOpenChange(false);
    setDescription('');
    setDeadline('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Task Type</label>
            <select
              className="w-full p-2 border rounded-md"
              value={type}
              onChange={(e) => setType(e.target.value as AgentType)}
            >
              <option value="IT">IT Support</option>
              <option value="MARKETING">Digital Marketing</option>
              <option value="CONTENT">Content Writing</option>
              <option value="DESIGN">Graphic/Web Design</option>
              <option value="FINANCE">Finance</option>
              <option value="EMBEDDED">Embedded Systems</option>
              <option value="MOBILE">Mobile Development</option>
              <option value="LEGAL">Legal Process</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Description</label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Priority</label>
            <select
              className="w-full p-2 border rounded-md"
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Deadline (Optional)</label>
            <input
              type="datetime-local"
              className="w-full p-2 border rounded-md"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreateTask} disabled={!description.trim()}>
            Create Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
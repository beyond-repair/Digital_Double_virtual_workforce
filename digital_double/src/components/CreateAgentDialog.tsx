import React from 'react';
import { nanoid } from 'nanoid';
import { AgentType } from '../types/agent';
import { useAgentStore } from '../store/agentStore';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/Dialog';
import { Button } from './ui/Button';

interface CreateAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateAgentDialog: React.FC<CreateAgentDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const addAgent = useAgentStore((state) => state.addAgent);
  const [selectedType, setSelectedType] = React.useState<AgentType>('IT');

  const handleCreateAgent = () => {
    addAgent({
      id: nanoid(),
      type: selectedType,
      status: 'idle',
      performance: {
        tasksCompleted: 0,
        averageTime: 0,
        successRate: 100,
      },
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Agent</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Agent Type</label>
            <select
              className="w-full p-2 border rounded-md"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as AgentType)}
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
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreateAgent}>Create Agent</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
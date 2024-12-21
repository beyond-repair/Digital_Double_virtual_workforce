import React from 'react';
import { useAgentStore } from './store/agentStore';
import { AgentCard } from './components/AgentCard';
import { TaskQueue } from './components/TaskQueue';
import { Button } from './components/ui/Button';
import { Plus, LayoutDashboard, ListTodo } from 'lucide-react';
import { CreateAgentDialog } from './components/CreateAgentDialog';
import { CreateTaskDialog } from './components/CreateTaskDialog';

function App() {
  const { agents, tasks, removeAgent, assignTask } = useAgentStore();
  const [createAgentOpen, setCreateAgentOpen] = React.useState(false);
  const [createTaskOpen, setCreateTaskOpen] = React.useState(false);

  const handleAssignTask = (taskId: string) => {
    const availableAgent = agents.find((agent) => agent.status === 'idle');
    if (availableAgent) {
      assignTask(taskId, availableAgent.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <LayoutDashboard className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Digital Double</h1>
            </div>
            <div className="flex space-x-4">
              <Button onClick={() => setCreateTaskOpen(true)}>
                <ListTodo className="w-4 h-4 mr-2" />
                New Task
              </Button>
              <Button onClick={() => setCreateAgentOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Agent
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onTerminate={removeAgent}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <TaskQueue tasks={tasks} onAssign={handleAssignTask} />
          </div>
        </div>
      </main>

      <CreateAgentDialog
        open={createAgentOpen}
        onOpenChange={setCreateAgentOpen}
      />
      <CreateTaskDialog
        open={createTaskOpen}
        onOpenChange={setCreateTaskOpen}
      />
    </div>
  );
}

export default App;
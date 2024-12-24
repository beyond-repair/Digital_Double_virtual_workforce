import { render, screen } from '@testing-library/react';
import { TaskAnalytics } from '../components/TaskAnalytics';
import { useAgentStore } from '../store/agentStore';

jest.mock('../store/agentStore');

describe('TaskAnalytics', () => {
  const mockTasks = [
    {
      id: '1',
      type: 'IT',
      status: 'completed',
      created: new Date(),
      completedAt: new Date(),
      description: 'Test task',
      priority: 'high' as const,
    },
    {
      id: '2',
      type: 'MARKETING',
      status: 'pending',
      created: new Date(),
      description: 'Another task',
      priority: 'medium' as const,
    },
  ];

  beforeEach(() => {
    (useAgentStore as jest.Mock).mockImplementation(() => ({
      tasks: mockTasks,
    }));
  });

  it('renders analytics metrics correctly', () => {
    render(<TaskAnalytics />);
    
    expect(screen.getByText('Task Analytics')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText(/completed today/)).toBeInTheDocument();
  });
});
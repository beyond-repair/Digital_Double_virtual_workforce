import { render, screen } from '@testing-library/react';
import { Dashboard } from '../components/Dashboard';
import { useAgentStore } from '../store/agentStore';

// Mock the store
jest.mock('../store/agentStore');

describe('Dashboard', () => {
  const mockAgents = [
    {
      id: '1',
      type: 'IT',
      status: 'working',
      performance: {
        tasksCompleted: 10,
        successRate: 95,
        averageTime: 15
      }
    },
    {
      id: '2',
      type: 'MARKETING',
      status: 'idle',
      performance: {
        tasksCompleted: 5,
        successRate: 90,
        averageTime: 20
      }
    }
  ];

  beforeEach(() => {
    (useAgentStore as jest.Mock).mockImplementation(() => mockAgents);
  });

  it('renders dashboard metrics correctly', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Total Agents')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Tasks Completed')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('Success Rate')).toBeInTheDocument();
    expect(screen.getByText('92.5%')).toBeInTheDocument();
  });
});
import { render, fireEvent, screen } from '@testing-library/react';
import { AgentCard } from '../components/AgentCard';
import { Agent } from '../types/agent';

describe('AgentCard', () => {
  const mockAgent: Agent = {
    id: '1',
    type: 'IT',
    status: 'idle',
    performance: {
      tasksCompleted: 5,
      averageTime: 10,
      successRate: 95
    }
  };

  it('renders agent information correctly', () => {
    render(<AgentCard agent={mockAgent} onTerminate={jest.fn()} />);
    
    expect(screen.getByText('IT Agent')).toBeInTheDocument();
    expect(screen.getByText('Success Rate: 95%')).toBeInTheDocument();
    expect(screen.getByText('Tasks Completed: 5')).toBeInTheDocument();
  });

  it('calls onTerminate when terminate button is clicked', () => {
    const mockTerminate = jest.fn();
    render(<AgentCard agent={mockAgent} onTerminate={mockTerminate} />);
    
    fireEvent.click(screen.getByText('Terminate Agent'));
    expect(mockTerminate).toHaveBeenCalledWith('1');
  });
});
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LLMTest } from '../components/LLMTest';

// Mock fetch
global.fetch = jest.fn();

describe('LLMTest', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('renders test button', () => {
    render(<LLMTest />);
    expect(screen.getByText('Test LLM')).toBeInTheDocument();
  });

  it('handles successful LLM test', async () => {
    const mockResponse = { response: 'Test response from Mistral-7B' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    render(<LLMTest />);
    fireEvent.click(screen.getByText('Test LLM'));

    await waitFor(() => {
      expect(screen.getByText(mockResponse.response)).toBeInTheDocument();
    });
  });

  it('handles LLM test error', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(<LLMTest />);
    fireEvent.click(screen.getByText('Test LLM'));

    await waitFor(() => {
      expect(screen.getByText('API Error')).toBeInTheDocument();
    });
  });
});
import React, { useState } from 'react';
import { Brain, Loader } from 'lucide-react';
import { Button } from './ui/Button';

export const LLMTest: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const testLLM = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetch('/api/test-llm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: "Test prompt for Mistral-7B: Explain what an AI agent is.",
          model: "mistral/mistral-7b-instruct"
        })
      });

      if (!result.ok) {
        throw new Error('Failed to test LLM');
      }

      const data = await result.json();
      setResponse(data.response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to test LLM');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-purple-500" />
          <h2 className="text-lg font-semibold">LLM Test (Mistral-7B)</h2>
        </div>
        <Button
          onClick={testLLM}
          disabled={loading}
          className="flex items-center space-x-2"
        >
          {loading ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <Brain className="w-4 h-4" />
          )}
          <span>Test LLM</span>
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md mb-4">
          {error}
        </div>
      )}

      {response && (
        <div className="p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
};
'use client';

import { useState } from 'react';
import { Task } from '@/types/Task';
import { transformParsedTasks } from '@/lib/taskTransformer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

interface TranscriptParserProps {
  onTasksExtracted: (tasks: Task[]) => void;
}

export default function TranscriptParser({ onTasksExtracted }: TranscriptParserProps) {
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Parse the transcript JSON string
      const parsedData = JSON.parse(transcript);
      // Transform the parsed data into Task format
      const transformedTasks = transformParsedTasks(parsedData);
      onTasksExtracted(transformedTasks);
      setTranscript('');
    } catch (error) {
      console.error('Error parsing transcript:', error);
      alert('Error parsing transcript. Please ensure the input is valid JSON.');
    }
  };

  return (
    <Card className="p-6 bg-white shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="transcript" className="block text-sm font-medium text-gray-700 mb-2">
            Paste your task data here
          </label>
          <Textarea
            id="transcript"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="Paste your JSON task data here..."
            className="min-h-[200px] w-full p-4 border rounded-md"
          />
        </div>
        <Button
          type="submit"
          disabled={!transcript.trim() || isProcessing}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
        >
          Process Tasks
        </Button>
      </form>
    </Card>
  );
} 
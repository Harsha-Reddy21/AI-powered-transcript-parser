'use client';

import { useState } from 'react';
import TranscriptParser from '@/components/TranscriptParser';
import TaskBoard from '@/components/TaskBoard';
import { Task } from '@/types/Task';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTasksExtracted = (newTasks: Task[]) => {
    setTasks((prevTasks) => [...prevTasks, ...newTasks]);
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Natural Task Scribe
        </h1>
        <div className="space-y-8">
          <TranscriptParser onTasksExtracted={handleTasksExtracted} />
          <TaskBoard tasks={tasks} onTaskUpdate={handleTaskUpdate} />
        </div>
      </div>
    </main>
  );
} 
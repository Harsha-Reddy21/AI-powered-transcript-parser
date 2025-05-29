'use client';

import { Task } from '@/types/Task';
import { useState } from 'react';

interface TaskBoardProps {
  tasks: Task[];
  onTaskUpdate: (updatedTask: Task) => void;
}

export default function TaskBoard({ tasks, onTaskUpdate }: TaskBoardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'P1':
        return 'bg-red-100 text-red-800';
      case 'P2':
        return 'bg-yellow-100 text-yellow-800';
      case 'P3':
        return 'bg-blue-100 text-blue-800';
      case 'P4':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Task Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 rounded-lg shadow-md bg-white border-l-4 ${
              task.completed ? 'border-green-500' : 'border-blue-500'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800 flex-1">
                {task.description}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{task.assignee}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{task.deadline}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  onTaskUpdate({ ...task, completed: !task.completed })
                }
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Mark as complete</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
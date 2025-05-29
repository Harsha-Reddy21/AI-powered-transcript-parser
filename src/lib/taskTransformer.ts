import { Task } from '@/types/Task';
import { v4 as uuidv4 } from 'uuid';

interface ParsedTask {
  title: string;
  assignee: string;
  date: string;
  priority: string;
}

export function transformParsedTasks(parsedData: { tasks: ParsedTask[] }): Task[] {
  return parsedData.tasks.map((task) => ({
    id: uuidv4(),
    description: task.title,
    assignee: task.assignee,
    deadline: task.date,
    priority: task.priority as 'P1' | 'P2' | 'P3',
    completed: false
  }));
} 
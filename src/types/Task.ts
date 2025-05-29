export interface Task {
  id: string;
  description: string;
  assignee: string;
  deadline: string;
  priority: 'P1' | 'P2' | 'P3' | 'P4';
  completed: boolean;
}

export type Priority = 'P1' | 'P2' | 'P3' | 'P4';

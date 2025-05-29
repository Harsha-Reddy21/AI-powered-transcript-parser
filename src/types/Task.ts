export interface Task {
  id: string;
  name: string;
  assignee: string;
  dueDate: string;
  priority: string;
  originalText: string;
}

export type Priority = 'P1' | 'P2' | 'P3' | 'P4';

import {Todo} from '@app/shared/models/todos';

export class Category {
  id: number;
  title: string;
  priority?: string;
  todos?: Todo[];

  constructor(id: number, title: string, priority?: string) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.todos = [];
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}

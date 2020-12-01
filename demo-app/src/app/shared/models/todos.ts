export class Todo {
  id: number;
  detail: string;
  isDone: boolean;

  constructor(id: number, detail: string, isDone?: boolean) {
    this.id = id;
    this.detail = detail;
    this.isDone = isDone;
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, Todo} from '@app/shared/models';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '@app/shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  category: Category;
  todoList: Todo[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
  ) {
    this.category = this.todoService.getCurrentCategory();
  }

  ngOnInit(): void {
    this.todoService.getTodosByCategory(this.category).subscribe((response: Todo[]) => {
      this.todoList = response;
      console.log(this.todoList);
    });
  }

  resolveTodo(todo): void {
    this.todoService.resolveTodo(this.category, todo).subscribe((response: Todo) => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
        this.router.navigate(['/category', this.category.id]));
    });
  }
}

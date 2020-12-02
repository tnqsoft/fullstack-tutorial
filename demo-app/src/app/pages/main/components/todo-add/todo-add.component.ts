import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PriorityType} from '@app/shared/enum/priority-type.enum';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '@app/shared/services/todo.service';
import {Category, Todo} from '@app/shared/models';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  category: Category;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {
    this.category = this.todoService.getCurrentCategory();
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      detail: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    const todo = new Todo(null, this.f.detail.value);
    this.todoService.addTodo(this.category, todo).subscribe({
      next: () => {
        this.router.navigate(['/category', this.category.id]);
      },
      error: error => {
        this.error = error;
        this.loading = false;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {PriorityType} from '@app/shared/enum/priority-type.enum';
import {Category} from '@app/shared/models';
import {TodoService} from '@app/shared/services/todo.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  priorityList = [
    PriorityType.High,
    PriorityType.Normal,
    PriorityType.Low,
  ];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      priority: [PriorityType.Normal, Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    const category = new Category(0, this.f.title.value, this.f.priority.value);
    category.id = null;
    this.todoService.addCategory(category)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/category']);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '@app/shared/auth';
import {TodoService} from '@app/shared/services/todo.service';
import {Category} from '@app/shared/models';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.todoService.getCategory().subscribe((response: Category[]) => {
      this.categories = response;
    });
  }
}

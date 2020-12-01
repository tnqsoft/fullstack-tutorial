import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/shared/auth';
import { TodoService } from '@app/shared/services/todo.service';
import {Category} from '@app/shared/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  categories: Category[];

  constructor(
    private authenticationService: AuthenticationService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  logout() {
    this.authenticationService.logout();
  }

  getCategories(): void {
    this.todoService.getCategory().subscribe((response: Category[]) => {
      this.categories = response;
    });
  }
}

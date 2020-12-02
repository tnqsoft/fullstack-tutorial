import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Category, Todo, User} from '@app/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private currentCategorySubject: BehaviorSubject<Category>;
  public currentCategory: Observable<Category>;

  constructor(private http: HttpClient) {
    this.currentCategorySubject = new BehaviorSubject<Category>(null);
  }

  getCurrentCategory(): Category {
    return this.currentCategorySubject.value;
  }

  getCategories(): Observable<Category[]> {
    const url = `${environment.apiUrl}categories`;
    return this.http.get<Category[]>(url);
      // .pipe(map(res => {
      // }));
  }

  getCategory(id: number): Observable<Category> {
    const url = `${environment.apiUrl}categories/${id}`;
    return this.http.get<Category>(url)
    .pipe(map(res => {
      const category = new Category(res.id, res.title, res.priority);
      this.currentCategorySubject.next(category);
      this.currentCategory = this.currentCategorySubject.asObservable();
      return category;
    }));
  }

  getTodosByCategory(category: Category): Observable<Todo[]> {
    const url = `${environment.apiUrl}categories/${category.id}/todo`;
    return this.http.get<Todo[]>(url);
    // .pipe(map(res => {
    //
    // }));
  }

  addCategory(category: Category): Observable<any> {
    const url = `${environment.apiUrl}categories`;
    return this.http.post<any>(url, category);
    // .pipe(map(res => {
    // }));
  }

  resolveTodo(category: Category, todo: Todo): Observable<any> {
    const url = `${environment.apiUrl}categories/${category.id}/todo/${todo.id}`;
    return this.http.put<any>(url, {});
    // .pipe(map(res => {
    // }));
  }

  addTodo(category: Category, todo: Todo): Observable<any> {
    const url = `${environment.apiUrl}categories/${category.id}/todo`;
    return this.http.post<any>(url, todo);
    // .pipe(map(res => {
    // }));
  }
}

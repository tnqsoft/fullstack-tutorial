import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import {Category} from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    const url = `${environment.apiUrl}categories`;
    return this.http.get<Category[]>(url);
      // .pipe(map(res => {
      // }));
  }
}

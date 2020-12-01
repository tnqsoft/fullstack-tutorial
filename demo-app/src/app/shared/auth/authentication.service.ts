import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { User } from '@app/shared/models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    const token: string = localStorage.getItem('token');
    const user: User = this.getUserFromToken(token);
    this.currentUserSubject = new BehaviorSubject<User>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}login_check`, { email, password })
      .pipe(map(res => {
        console.log(res);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        const user: User = this.getUserFromToken(res.token);
        localStorage.setItem('token', res.token);
        this.currentUserSubject.next(res);
        return res;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(['login']);
  }

  getUserFromToken(token: string): User {
    // const token = localStorage.getItem('token');
    if (token) {
      const decoded: any = jwt_decode(token);
      if (moment.unix(decoded.exp).toDate() < moment().toDate()) {
        return null;
      }
      return new User(decoded.userId, decoded.username, localStorage.getItem('token'));
    }
    return null;
  }
}

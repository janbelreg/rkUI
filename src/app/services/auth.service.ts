import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:7241/api/Auth';
  public usernameSubject = new BehaviorSubject<string>('');
  currentUser$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {}

  public register(user: any): Observable<any> {
    return this.http.post<any>(
      'https://localhost:7241/api/Auth/register',      //'https://localhost:7157/api/Auth/register'
      user
    );
  }

  public login(user: any): Observable<string> {
    return this.http.post('https://localhost:7241/api/Auth/login', user, { //'https://localhost:7157/api/Auth/login'
      responseType: 'text',
    });
  }
/*
  isLoggedIn(): boolean {
    // Check if token is present
    return !!localStorage.getItem('token');
  }

  fetchUsername(): void {
    this.http.get<any>(`${this.apiUrl}/username`).subscribe(
      response => {
        this.usernameSubject.next(response.username);
      },
      error => {
        console.error('Error fetching username', error);
      }
    );
  }

  getUsername(): BehaviorSubject<string> {
    return this.usernameSubject;
  }*/


  public getMe(): Observable<string> {
    return this.http.get('https://localhost:7241/api/Auth', {
      responseType: 'text',
    });
  }
}
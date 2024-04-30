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
  //metóda v službe pre realizáciu registrácie smerom k API
  public register(user: any): Observable<any> {
    return this.http.post<any>(
      'https://localhost:7241/api/Auth/register',      
      user
    );
  }
  //metóda pre získanie dát z APi pre účel prihlásenia
  public login(user: any): Observable<string> {
    return this.http.post('https://localhost:7241/api/Auth/login', user, { 
      responseType: 'text',
    });
  }


  //metóda pre získanie mena úživateľa
  public getMe(): Observable<string> {
    return this.http.get('https://localhost:7241/api/Auth', {
      responseType: 'text',
    });
  }
}
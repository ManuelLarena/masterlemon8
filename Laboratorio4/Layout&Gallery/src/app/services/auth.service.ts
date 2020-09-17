import { Injectable } from '@angular/core';
import { LoginEntity } from '../model/Login-Entity';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() {}

  login(user: LoginEntity): boolean {
    if (
      user.username === 'master8@lemoncode.net' &&
      user.password === '12345678'
    ) {
      localStorage.setItem('username', user.username);
      localStorage.setItem(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OCIsIm5hbWUiOiJtYXN0ZXI4QGxlbW9uY29kZS5uZXQiLCJpYXQiOjE1MTYyMzkwMjJ9.5yh0NKIFuNv9XBNQGpDbBaM0rBVBPOs2n9KlHzdfME0'
      );
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }
}

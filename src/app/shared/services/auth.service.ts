import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  public loggedIn = new BehaviorSubject(false);

  constructor() { }

  saveToken(token) {
    this.loggedIn.next(true);
  	localStorage.setItem('token', token);
  }

  getToken() {
  	return localStorage.getItem('token') ? 'Bearer '+localStorage.getItem('token') : '';
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  clearToken() {
    this.loggedIn.next(false);
  	localStorage.removeItem('token');
  }

  savePermissions(permissions) {
    localStorage.setItem('permissions', JSON.stringify(permissions));
  }

  getPermissions() {
    return localStorage.getItem('permissions') ? JSON.parse(localStorage.getItem('permissions')) : {};
  }

  clearPermissions() {
    localStorage.removeItem('permissions');
  }
}

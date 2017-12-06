import 'rxjs';

import { AuthService } from './../shared/services/auth.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class LoginService {

  constructor(
  	private http: Http,
    private authService: AuthService
  ) { }

  login(credentials) {
  	let data = environment.client;
  	data['username'] = credentials.username;
    data['password'] = credentials.password;

  	return this.http.post(`${environment.api}../oauth/token`, data)
  		.map(response => {
  			this.authService.saveToken(response.json().access_token);
  			return response.json();
  		})
  		.toPromise();
  }

  logout(): boolean {
    this.authService.clearToken();
    return false;
  }

  getToken(): string | boolean {
  	return JSON.parse(localStorage.getItem('token')) || false;
  }

}

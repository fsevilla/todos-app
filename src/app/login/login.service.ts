import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { AuthService } from './../shared/services/auth.service';
import 'rxjs';

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

  logout() {
  	this.authService.clearToken();
    this.authService.clearPermissions();
  }

  getToken() {
  	return JSON.parse(localStorage.getItem('token')) || false;
  }

}

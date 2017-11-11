import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class HttpClient {

  constructor(
  	private http: Http,
  	private authService: AuthService
  ) {  }

  get(url: string) {
  	let headers = new Headers();
  	headers.append('Accept', 'application/json');
  	headers.append('Authorization', this.authService.getToken());
  	return this.http.get(url, {
  		headers: headers
  	});
  }

  post(url: string, data: string) {
  	let headers = new Headers();
  	headers.append('Accept', 'application/json');
  	headers.append('Authorization', this.authService.getToken());
  	return this.http.post(url, data, {
  		headers: headers
  	});
  }

}

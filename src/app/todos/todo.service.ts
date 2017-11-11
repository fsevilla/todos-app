import { Injectable } from '@angular/core';
import { HttpClient } from './../shared/services/http-client.service';
import { environment } from './../../environments/environment';
import { AuthService } from './../shared/services/auth.service';
import 'rxjs';

@Injectable()
export class TodoService {

  api = environment.api+'todos/';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getTodos() {
  	return this.http.get(this.api)
  		.map(response => response.json())
  		.toPromise();
  }

  getTodo(id: number) {
  	return this.http.get(this.api+id)
  		.map(response => response.json())
  		.toPromise();
  }

}

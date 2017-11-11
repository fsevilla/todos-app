import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { AuthService } from './auth.service';
import { HttpClient } from './http-client.service';
import 'rxjs';

@Injectable()
export class PermissionsService {

  headers: Headers;
  constructor(
  	private http: HttpClient,
  	private authService: AuthService
  ) {  }

  get() {
  	return this.http.get(`${environment.api}user/permissions`)
  		.map(response => {
        let permissions = response.json(),
          permsObj = {};

        for(var k in permissions) {
          permsObj[k] = permissions[k][0].permission;
        }

  			this.authService.savePermissions(permsObj);
  			return response.json();
  		})
  		.toPromise();
  }

}
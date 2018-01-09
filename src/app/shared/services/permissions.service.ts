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
     console.log('Permissions: ', response);
     let permissions = response.json(),
       permissionsObj = {};

     for(const k in permissions) {
       if(permissions.hasOwnProperty(k)) {
         permissionsObj[k] = permissions[k][0].permission;
       }
     }

     this.authService.savePermissions(permissionsObj);
     return permissionsObj;
  		})
  		.toPromise();
  }

  hasPermission(resource: string, inActions: Array<string>) {
    let permissions = this.authService.getPermissions(),
        thePermission = permissions[resource];

    return inActions.indexOf(thePermission) !== -1;
  }

}
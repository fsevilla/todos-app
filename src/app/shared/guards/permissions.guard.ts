import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { PermissionsService } from './../services/permissions.service';

@Injectable()
export class PermissionsGuard implements CanActivate {

	constructor(
		private router: Router,
		private permissionsService: PermissionsService
	) {

	}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasPermission(next.data.resource, next.data.permissions);
  }

  hasPermission(resource: string, actions: Array<string>) {
  	if(this.permissionsService.hasPermission(resource, actions)) {
  		return true;
  	} else {
  		this.router.navigate(['/forbidden']);
  		return false;
  	}
  }
}

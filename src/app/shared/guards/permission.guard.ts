import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  
  constructor(
  	private router: Router,
  	private authService: AuthService
  ) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	return this.hasPermissions(next.data.resource, next.data.actions);
  }

  hasPermissions(resource: string, actions: Array<string>) {
  	let perms = this.authService.getPermissions();
  	if(actions.indexOf(perms[resource]) !== -1) {
  		return true;
  	} else {
  		this.router.navigate(['/forbidden']);
  		return false;
  	}
  }
}

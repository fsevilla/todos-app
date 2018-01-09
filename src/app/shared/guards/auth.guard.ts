import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private auth: AuthService,
		private router: Router
	) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	console.log('Auth guard');
    return this.checkSession();
  }

  checkSession() {
  	if(this.auth.isLoggedIn()) {
  		return true;
  	} else {
  		this.router.navigate(['/login']);
  		return false;
  	}
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { PermissionsService } from './../shared/services/permissions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private error = false;
  
  public credentials = {
    username: '',
    password: ''
  };

  constructor(
  	private loginService: LoginService,
    private router: Router,
    private permissionsService: PermissionsService
  ) { }

  ngOnInit() {
  }

  onLogin() {
  	this.loginService.login(this.credentials)
  		.then(response => {
        this.permissionsService.get()
          .then(response => {
            this.router.navigate(['/todos']);
          });
  		})
  		.catch(error => {
  			this.error = true;
  		});
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
  	private router: Router,
  	private loginService: LoginService
  ) { }

  ngOnInit() {
  	this.loginService.logout();
  	this.router.navigate(['/login']);
  }

}

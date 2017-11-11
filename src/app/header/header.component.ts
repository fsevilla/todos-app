import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  	if(this.authService.isLoggedIn()) {
  		this.authService.loggedIn.next(true);
  	}

  	this.authService.loggedIn.subscribe(loggedIn => {
  		this.isLoggedIn = loggedIn;
  	});
  }

}

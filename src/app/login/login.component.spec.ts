import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { PermissionsService } from './../shared/services/permissions.service';
import { HttpModule, Http } from '@angular/http';
import { AuthService } from './../shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from './../shared/services/http-client.service';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";


fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let submitEl: DebugElement;
  let emailEl: DebugElement;
  let passwordEl: DebugElement;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, HttpModule],
      providers: [
        LoginService,
        PermissionsService,
        AuthService,
        HttpClient,
        { provide: Router, useValue: mockRouter }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    submitEl = fixture.debugElement.query(By.css('button[type=submit]'));
    emailEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind username with a property', () => {
    let username = 'sample@sample.com';

    // component.credentials.username = username;
    spyOn(component.credentials, 'username').and.returnValue(username);
    // emailEl.nativeElement.value = 'sample';
    fixture.detectChanges();
    console.log('CREDENTIALS!!!', emailEl.nativeElement);
    expect(emailEl.nativeElement.value).toBe(username);
  });
});

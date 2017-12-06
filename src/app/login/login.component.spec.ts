import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';

import { AuthService } from './../shared/services/auth.service';
import { By } from "@angular/platform-browser";
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from './../shared/services/http-client.service';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { PermissionsService } from './../shared/services/permissions.service';
import { Router } from '@angular/router';

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

  // it('should bind username with a property', () => {
  //   let username = 'sample@sample.com';

  //   // component.credentials.username = username;
  //   spyOn(component.credentials, 'username').and.returnValue(username);
  //   // emailEl.nativeElement.value = 'sample';
  //   fixture.detectChanges();
  //   console.log('CREDENTIALS!!!', emailEl.nativeElement);
  //   expect(emailEl.nativeElement.value).toBe(username);
  // });

  it('should have a span tag that contain Usuario', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#user').innerText).toContain('Usuario');
  });

  it('Login component should containt credentials variable', () => {
    expect(component.credentials).toBeDefined();
  });

  it('credentials variable should be and Object', () => {
    expect(component.credentials).toEqual(jasmine.any(Object));
  });

  it('should contain a function onLogin()', () => {
    expect(component.onLogin()).not.toBeDefined();
  });
});

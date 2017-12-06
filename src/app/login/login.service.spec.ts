import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './../shared/services/auth.service';
import { HttpModule } from '@angular/http';
import { LoginService } from './login.service';

fdescribe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, AuthService],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a logout function', inject([LoginService], (service: LoginService) => {
    expect(service.logout()).toBeDefined();
  }));

  it('logout function should return false', inject([LoginService], (service: LoginService) => {
    expect(service.logout()).toEqual(jasmine.any(Boolean));
  }));

  it('should contain a login service', inject([LoginService], ( service: LoginService) => {
    const mockLogin = {
      username: '',
      password: ''
    };
    expect(service.login(mockLogin)).toBeDefined();
  }));

  it('should contain a getToken() function', inject([LoginService], (service: LoginService) => {
    expect(service.getToken()).toBeDefined();
  }));

  it('getToken should return a string or a boolean', inject([LoginService], (service: LoginService) => {
    const mockExpect: string | boolean = false;
    expect(service.getToken()).toEqual(mockExpect);
  }));
});

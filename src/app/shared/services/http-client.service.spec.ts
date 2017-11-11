import { TestBed, inject } from '@angular/core/testing';

import { HttpClient } from './http-client.service';

describe('HttpClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient]
    });
  });

  it('should be created', inject([HttpClient], (service: HttpClient) => {
    expect(service).toBeTruthy();
  }));
});

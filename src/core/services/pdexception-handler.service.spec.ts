import { TestBed, inject } from '@angular/core/testing';

import { PDExceptionHandlerService } from './pdexception-handler.service';

describe('PDExceptionHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDExceptionHandlerService]
    });
  });

  it('should be created', inject([PDExceptionHandlerService], (service: PDExceptionHandlerService) => {
    expect(service).toBeTruthy();
  }));
});

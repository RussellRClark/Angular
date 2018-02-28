import { TestBed, inject } from '@angular/core/testing';

import { PDHttpLoggerService } from './pdhttplogger.service';

describe('PDHttpLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDHttpLoggerService]
    });
  });

  it('should be created', inject([PDHttpLoggerService], (service: PDHttpLoggerService) => {
    expect(service).toBeTruthy();
  }));
});

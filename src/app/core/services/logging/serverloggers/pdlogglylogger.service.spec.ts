import { TestBed, inject } from '@angular/core/testing';
import { PDLogglyLoggerService } from './pdlogglylogger.service';

describe('PDLogglyLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDLogglyLoggerService]
    });
  });

  it('should be created',
    inject([PDLogglyLoggerService],
      (service: PDLogglyLoggerService) => {

        expect(service).toBeTruthy();
  }));
});

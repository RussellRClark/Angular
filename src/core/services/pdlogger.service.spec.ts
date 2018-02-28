import { TestBed, inject } from '@angular/core/testing';
import { PDLoggerService } from './pdlogger.service';

describe('PDloggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDLoggerService]
    });
  });

  it('should be created', inject([PDLoggerService], (service: PDLoggerService) => {
    expect(service).toBeTruthy();
  }));
});

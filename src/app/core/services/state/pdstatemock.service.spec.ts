import { TestBed, inject } from '@angular/core/testing';
import { PDStateMockService } from './pdstatemock.service';

describe('PDStateMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDStateMockService]
    });
  });

  it('should be created',
    inject([PDStateMockService],
      (service: PDStateMockService) => {

    expect(service).toBeTruthy();
  }));
});

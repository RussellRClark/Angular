import { TestBed, inject } from '@angular/core/testing';

import { PDState2MockService } from './pdstate2mock.service';

describe('PDState2MockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDState2MockService]
    });
  });

  it('should be created',
    inject([PDState2MockService],
      (service: PDState2MockService) => {

      expect(service).toBeTruthy();
  }));
});

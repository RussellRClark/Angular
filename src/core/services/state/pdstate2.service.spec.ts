import { TestBed, inject } from '@angular/core/testing';
import { PDStateService2 } from './pdstate2.service';
import {ConnectionBackend, Http, HttpModule, RequestOptions} from '@angular/http';
import {Inject} from '@angular/core';

describe('PDStateService2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PDStateService2, Http, ConnectionBackend]
    });
  });

  it('should be created',
    inject([PDStateService2, Http],
      (service: PDStateService2,
       http: Http) => {

        expect(service).toBeTruthy();
        expect(http).toBeTruthy();
      }));
});


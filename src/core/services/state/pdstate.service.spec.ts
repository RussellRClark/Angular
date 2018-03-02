import { TestBed, inject } from '@angular/core/testing';
import { PDStateService } from './pdstate.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Inject} from '@angular/core';

describe('PDStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDStateService, HttpClient, HttpHandler]
    });
  });

  it('should be created',
    inject([PDStateService, HttpClient],
      (service: PDStateService,
       http: HttpClient) => {

        expect(service).toBeTruthy();
        expect(http).toBeTruthy();
      }));
});


import { TestBed, inject } from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Http, ConnectionBackend, RequestOptions, HttpModule} from '@angular/http';
import { PDHttpLoggerService } from './pdhttplogger.service';
import { PDStateService} from '../../state/pdstate.service';
import { PDStateService2} from '../../state/pdstate2.service';

describe('PDHttpLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PDHttpLoggerService, Http, ConnectionBackend, HttpClient, HttpHandler, PDStateService, PDStateService2]
    });
  });

  it('should be created',
    inject([PDHttpLoggerService, Http, ConnectionBackend, RequestOptions, HttpClient, PDStateService, PDStateService2],
      (service: PDHttpLoggerService,
       http: Http,
       httpClient: HttpClient,
       state: PDStateService,
       state2: PDStateService2) => {

        expect(service).toBeTruthy();
        expect(http).toBeTruthy();
        expect(httpClient).toBeTruthy();
        expect(state).toBeTruthy();
        expect(state2).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { PDHttpLoggerService } from './pdhttplogger.service';
import { PDStateMockService } from '../../state/pdstatemock.service';
import { PDStateService} from '../../state/pdstateinterface';
import { PDState2MockService } from '../../state/pdstate2mock.service';
import { PDState2Service} from '../../state/pdstate2interface';

describe ('PDHttpLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PDHttpLoggerService, HttpClient, HttpHandler,
        {provide: PDStateService, useClass: PDStateMockService},
        {provide: PDState2Service, useClass: PDState2MockService}
      ]
    });
  });

  it('logger should be created',
    inject([PDHttpLoggerService],
      (service: PDHttpLoggerService) => {

        expect(service).toBeTruthy();
  }));

  it('services should be created',
    inject([PDStateService, PDState2Service],
      (state: PDStateService,
       state2: PDState2Service) => {

        expect(state).toBeTruthy();
        expect(state2).toBeTruthy();
      }));
});

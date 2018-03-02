import { TestBed, inject } from '@angular/core/testing';
import { PDErrorHandlerService } from './pdexception-handler.service';
import {PDLoggerService} from '../pdlogger.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PDServerLogger} from '../logging/serverloggers/ipdserverlogger';

describe('PDErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDErrorHandlerService, PDLoggerService, HttpClient, HttpHandler, PDServerLogger]
    });
  });

  it('should be created',
    inject([PDErrorHandlerService, PDLoggerService],
      (service: PDErrorHandlerService,
       logger: PDLoggerService) => {

      expect(service).toBeTruthy();
      expect(logger).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';
import {LoggerConfig, PDLoggerService} from './pdlogger.service';
import {Optional, PLATFORM_ID} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PDServerLogger} from './logging/serverloggers/ipdserverlogger';
import {PDHttpLoggerService} from './logging/serverloggers/pdhttplogger.service';

describe('PDloggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDLoggerService, HttpClient, HttpHandler, Optional, PDServerLogger]
    });
  });

  it('should be created',
    inject([PDLoggerService, HttpClient, Optional, PDServerLogger],
      (service: PDLoggerService,
       http: HttpClient,
       options: Optional,
       logger: PDServerLogger) => {

      expect(service).toBeTruthy();
      expect(http).toBeTruthy();
  }));
});

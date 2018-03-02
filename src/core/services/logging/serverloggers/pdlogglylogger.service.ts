import { Injectable } from '@angular/core';
import {IPDServerLogger, PDServerLogger} from './ipdserverlogger';

@Injectable()
export class PDLogglyLoggerService implements PDServerLogger {

  constructor() {
  }

  log() {}

  private timestamp() {
    return new Date().toISOString();
  }
}

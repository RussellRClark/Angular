import { Injectable } from '@angular/core';
import {IPDServerLogger} from './ipdserverlogger';

@Injectable()
export class PDLogglyLoggerService implements IPDServerLogger {
  log() {}
  constructor() { }
}

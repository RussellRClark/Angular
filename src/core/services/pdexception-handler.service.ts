import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {PDLoggerService} from './pdlogger.service';

@Injectable()
export class PDErrorHandlerService extends ErrorHandler {
  constructor(private loggerService: PDLoggerService) {
    super();
  }

  handleError(error) {
    this.loggerService.error(error);
  }
}

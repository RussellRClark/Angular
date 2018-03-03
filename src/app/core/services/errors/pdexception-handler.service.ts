import {ErrorHandler, Injectable, Inject} from '@angular/core';
import {PDLoggerService} from '../logging/pdlogger.service';

// how do we disply the error to the user??
// an alert (horrid), a toast?? better & easier

@Injectable()
export class PDErrorHandlerService extends ErrorHandler {
  constructor(private loggerService: PDLoggerService) {
    super();
  }

  handleError(error) {
    this.loggerService.error(error);
  }
}

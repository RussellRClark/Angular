import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDLoggerService } from './services/pdlogger.service';
import { PDErrorHandlerService } from './services/pdexception-handler.service';
import { PDHttpLoggerService } from './services/pdhttplogger.service';

@NgModule({
  providers: [
      PDLoggerService,
      PDErrorHandlerService,
      PDHttpLoggerService
  ],
  imports: [
  ]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule error: import ONLY in the AppModule');
    }
  }
}



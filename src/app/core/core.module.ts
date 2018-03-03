import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDLoggerService } from './services/logging/pdlogger.service';
import { PDErrorHandlerService } from './services/errors/pdexception-handler.service';
import { PDHttpLoggerService } from './services/logging/serverloggers/pdhttplogger.service';
import { PDLogglyLoggerService} from './services/logging/serverloggers/pdlogglylogger.service';
import { PDStateService} from './services/state/pdstateinterface';
import { PDStateHttpService} from './services/state/pdstatehttp.service';
import { PDState2Service} from './services/state/pdstate2interface';
import { PDState2HttpService} from './services/state/pdstate2http.service';
import { PDServerLogger} from './services/logging/serverloggers/ipdserverlogger';

@NgModule({
  providers: [
    {provide: PDLoggerService, useClass: PDLoggerService},
      PDErrorHandlerService,
      PDHttpLoggerService,
      {provide: PDStateService, useClass: PDStateHttpService},
      {provide: PDState2Service, useClass: PDState2HttpService},
      {provide: PDServerLogger, useClass: PDHttpLoggerService}
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



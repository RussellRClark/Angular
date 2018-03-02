import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDLoggerService } from './services/pdlogger.service';
import { PDErrorHandlerService } from './services/errors/pdexception-handler.service';
import { PDHttpLoggerService } from './services/logging/serverloggers/pdhttplogger.service';
import { PDLogglyLoggerService} from './services/logging/serverloggers/pdlogglylogger.service';
import { PDStateService} from './services/state/pdstate.service';
import { PDStateService2} from './services/state/pdstate2.service';
import { PDServerLogger} from './services/logging/serverloggers/ipdserverlogger';
import { HttpModule} from '@angular/http';

@NgModule({
  providers: [
    {provide: PDLoggerService, useClass: PDLoggerService},
      PDErrorHandlerService,
      PDHttpLoggerService,
      PDStateService,
      PDStateService2,
      {provide: PDServerLogger, useClass: PDHttpLoggerService}
  ],
  imports: [
    HttpModule,
  ]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule error: import ONLY in the AppModule');
    }
  }
}



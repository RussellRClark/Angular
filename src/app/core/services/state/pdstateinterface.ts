import { ConfigModel} from '../../models/config.model';
import {HttpErrorResponse} from '@angular/common/http';

export interface IPDStateService {
  configData: ConfigModel;
  baseURL;
  cars: any;
  myURL(): string;
  myData(): string;
  getConfiguration();
  getConfig();
  handleError(error: HttpErrorResponse);
}

export abstract class PDStateService implements IPDStateService {
  abstract configData: ConfigModel;
  abstract baseURL;
  abstract cars: any;
  abstract myURL(): string;
  abstract myData(): string;
  abstract getConfiguration();
  abstract getConfig();
  abstract handleError(error: HttpErrorResponse);
}

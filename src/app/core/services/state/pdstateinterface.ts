import { ConfigModel} from '../../models/config.model';

export interface IPDStateService {
  configData: ConfigModel;
  baseURL;
  cars: any;
  myURL(): string;
  myData(): string;
  getConfiguration(): void;
}

export abstract class PDStateService implements IPDStateService {
  abstract configData: ConfigModel;
  abstract baseURL;
  abstract cars: any;
  abstract myURL(): string;
  abstract myData(): string;
  abstract getConfiguration(): void;
}

import { ConfigModel} from '../../models/config.model';

export interface IPDState2Service {
  configData: ConfigModel;
  baseURL;
  cars: any;
  myURL(): string;
  myData(): string;
  getConfiguration(): void;
}

export abstract class PDState2Service implements IPDState2Service {
  abstract configData: ConfigModel;
  abstract baseURL;
  abstract cars: any;
  abstract myURL(): string;
  abstract myData(): string;
  abstract getConfiguration(): void;
}

import { Injectable } from '@angular/core';
import { PDStateService } from './pdstateinterface';
import { ConfigModel } from '../../models/config.model';

@Injectable()
export class PDStateMockService extends PDStateService {

  constructor() {
    super();
  }

  configData: ConfigModel;
  baseURL: string;

  // for demo
  cars = [
    'mock', 'Ford', 'Chevrolet', 'Buick'
  ];

  myData() {
    return 'mock: This is my data, man!';
  }

  myURL() {
    this.baseURL = 'mock';
    return this.baseURL;
  }

  getConfiguration() {
    this.configData = {
      'apiServerURL': '../tsconfig.json',
      'dbServerURL': '../tsconfig.json',
      'logging': {
        'httpURL': '../out-tsc/app',
        'logglyID': './'
      }
    };
  }
}

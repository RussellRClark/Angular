import { Injectable } from '@angular/core';
import { PDState2Service } from './pdstate2interface';
import { ConfigModel } from '../../models/config.model';

@Injectable()
export class PDState2MockService extends PDState2Service {

  constructor() {
    super();
  }

  configData: ConfigModel;

  baseURL: string;

  // for demo
  cars = [
    'Mock2', 'Ford', 'Chevrolet', 'Buick'
  ];

  myData() {
    return 'Mock2: This is my data, man!';
  }

  myURL() {
    this.baseURL = 'mock2';
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

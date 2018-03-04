import { Injectable } from '@angular/core';
import { PDStateService } from './pdstateinterface';
import { ConfigModel } from '../../models/config.model';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

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

  getConfig() {
    this.getConfiguration();
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

  handleError(error: HttpErrorResponse) {
    return new ErrorObservable( 'Something bad happened; please try again later.');
  }
}

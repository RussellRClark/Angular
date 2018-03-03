import {Injectable} from '@angular/core';
import { ConfigModel } from '../../models/config.model';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { PDStateService} from './pdstateinterface';
import 'rxjs/add/operator/map';

// if i try tio inject thisinti app.component all hell breaks loose - but with httplogger.
// no idea why

@Injectable()
export class PDStateHttpService extends PDStateService {

  constructor(private _http: HttpClient) {
    super();
  }

  public configData: ConfigModel;
  baseURL: string;

  // for demo
  cars = [
    'Ford', 'Chevrolet', 'Buick'
  ];

  myData() {
    return 'http: This is my data, man!';
  }

  myURL() {
    return this.baseURL;
  }
  // NB: baseURL is treated differently
  // for demo END

  // if configuration data is in a db this url needs to be hard wired or in a separate file
  // if the config data is in assets/data then this will error & call processerror
  // its a demo of both error handling and reading files
  // base url needed if API is not somewhere else(!!). BasURL removed - testing issues

  getConfiguration () {
    console.log('in state');
    this.baseURL = 'baseurl';
    let url: string;
    url = 'assets/data/config.json';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this._http.get(url, {responseType: 'json'}).subscribe((data: ConfigModel) => {
        this.configData = data;
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }
    );
  }

  processError (error) {
    let url: string;
    url = 'assets/data/config.json';

    this._http.get(url)
      .subscribe((data) => {this.configData = data as ConfigModel; },
          error2 => console.log('get file error: ',  error2),
        () => console.log('got file')
      );
  }
}

// Notes
// This is a singleton. Holds data needed across modules etc

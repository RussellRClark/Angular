import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {isPlatformBrowser} from '@angular/common';

import {IPDServerLogger} from './ipdserverlogger';

@Injectable()
export class PDHttpLoggerService implements IPDServerLogger {

  _url = '23456';

  constructor(private http: HttpClient) { }

  log(message: string, level: string, additional: any) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(this._url, {
      level: level,
      message: message,
      additional: additional,
      timestamp: this.timestamp()
    }, {headers})
      .subscribe(
        res => null,
        error => console.log('ERROR FAILED TO LOG ON SERVER')
      );
  }

  timestamp() {
    return new Date().toISOString();
  }

}

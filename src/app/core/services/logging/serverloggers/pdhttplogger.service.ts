import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PDServerLogger} from './ipdserverlogger';
import { PDStateService} from '../../state/pdstateinterface';
import { PDState2Service} from '../../state/pdstate2interface';


@Injectable()
export class PDHttpLoggerService implements PDServerLogger {

  _url: string;

  constructor(private http: HttpClient,
              private state: PDStateService,
              private state2: PDState2Service) {
    this._url = '';

    // just to demo that DI works
    // if you run ng Test, you will see that Statemock & State2mock (the console output shows mock & mock2)
    // are injected by the test fixture instead of StateHTTP & State2HTTP
    // if you run ng start-dev you will see StateHTTP & State2HTTP ((the console output shows the correct output)
    console.log('logger getting state');
    this.state.getConfiguration();
    console.log('state baseurl: ', this.state.baseURL);
    console.log('state myurl: ', this.state.myURL());
    console.log('state cars: ', this.state.cars);
    console.log('state mydata: ', this.state.myData());
    console.log('state config: ', this.state.configData);

    console.log('logger getting state2');
    this.state2.getConfiguration();
     console.log('state2 baseurl: ', this.state2.baseURL);
     console.log('state2 myurl: ', this.state2.myURL());
     console.log('state2 cars: ', this.state2.cars);
     console.log('state2 mydata: ', this.state2.myData());
     console.log('state2 config: ', this.state2.configData);
  }

  log(message: string, level: string, additional: any): void {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(this.state.configData.logging.httpURL, {
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

  private timestamp() {
    return new Date().toISOString();
  }

}

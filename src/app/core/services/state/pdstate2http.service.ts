import {Injectable} from '@angular/core';
import { ConfigModel } from '../../models/config.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {PDState2Service} from './pdstate2interface';

@Injectable()
export class PDState2HttpService extends PDState2Service {

  constructor(private _http: Http) {
    super();
  }

  public configData: ConfigModel;
  baseURL: string;

  // for demo
  cars = [
    'http2', 'Ford', 'Chevrolet', 'Buick'
  ];

  myData() {
    return 'http2: This is my data, man!';
  }

  myURL() {
    this.baseURL = 'http2';
    return this.baseURL;
  }
  // NB: baseURL is treated differently
  // for demo END

  // if configuration data is in a db this url needs to be hard wired or in a separate file
  // if the config data is in assets/data then this will error & call processerror
  // its a demo of both error handling and reading files
  // base url needed if API is not somewhere else(!!). BasURL removed - testing issues

  getConfiguration () {
    this.baseURL = 'http://localhost/';
    let url: string;
    url = 'api/SampleData/WeatherForecasts';

    this._http.get(url).subscribe(result => {
      this.configData = result.json() as ConfigModel;
      console.log('state2 config: ', result.json());
    }, error => this.processError());
  }

  processError () {
    let url: string;
    url = 'assets/data/config.json';
    console.log('config2 getting local data');
    this._http.get(url)
      .map((data) => {
        return data.json();
      })
      .subscribe((success) => {
        this.configData = success;
        console.log('config2 local data: ', this.configData);
      }, error2 =>   console.log('config2 error: ', error2));
  }
}

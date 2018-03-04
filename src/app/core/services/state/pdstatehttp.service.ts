import {Injectable} from '@angular/core';
import { ConfigModel } from '../../models/config.model';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { PDStateService} from './pdstateinterface';
import 'rxjs/add/operator/map';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError, retry} from 'rxjs/operators';

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
    'http', 'Ford', 'Chevrolet', 'Buick'
  ];

  myData() {
    return 'http: This is my data, man!';
  }

  myURL() {
    this.baseURL = 'http';
    return this.baseURL;
  }
  // NB: baseURL is treated differently
  // for demo END

  // if configuration data is in a db this url needs to be hard wired or in a separate file
  // if the config data is in assets/data then this will error & call processerror
  // its a demo of both error handling and reading files
  // base url needed if API is not somewhere else(!!). BasURL removed - testing issues

  getConfiguration() {
    let url: string;
    url = 'assets/data/config.json'; // change this to test the error handling

    return this._http.get<ConfigModel>(url, { observe: 'response'})
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getConfig() {
    return this.getConfiguration()
      .subscribe(
        resp => {
          const keys = resp.headers.keys();
          console.log('state got response keys: ', keys);
          this.configData = {... resp.body};
          console.log('state got response body configData: ', this.configData);
        },
        error => this.handleError
      );
  }

  handleError(error: HttpErrorResponse) {
    console.log(`in error handler`);

    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('Client-side error', error.error.message);
      console.error('  message:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // perhaps we should make sure the body holds some useful info??
      console.error( `Backend error`);
      console.error( `  code: ${error.status} ${error.statusText}`);
      console.error( `  body:`);
      console.error( `  ${error.error}`);
      console.error( `  message: ${error.message}`);
      console.error( `  name: ${error.name}`);
    }

    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable( 'Something bad happened; please try again later.');
  }
}

import {Component} from '@angular/core';
import { PDStateService} from './core/services/state/pdstateinterface';
import { PDState2Service} from './core/services/state/pdstate2interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Russells Angular Demo';

  constructor(private state2: PDState2Service, private state: PDStateService) {

    // just to demo that DI works
    // if you run ng Test, you will see that Statemock & State2mock (the console output shows mock & mock2)
    // are injected by the test fixture instead of StateHTTP & State2HTTP
    // if you run ng start-dev you will see StateHTTP & State2HTTP ((the console output shows the correct output)
    console.log('app getting state2');
    this.state2.getConfiguration();
    console.log('state2 baseurl: ', this.state2.baseURL);
    console.log('state2 myurl: ', this.state2.myURL());
    console.log('state2 cars: ', this.state2.cars);
    console.log('state2 mydata: ', this.state2.myData());
    console.log('state2 config: ', this.state2.configData);

   // this will fail in test until the statemock mocks HTTP
    console.log('app getting state');
    this.state.getConfiguration()
      .subscribe(
        resp => {
          const keys = resp.headers.keys();
          console.log('app got response keys: ', keys);
          this.state.configData = {... resp.body};
          console.log('app got response body configData: ', this.state.configData);
        },
        error => this.handleError(error)
      );

    console.log('state baseurl: ', this.state.baseURL);
    console.log('state myurl: ', this.state.myURL());
    console.log('state cars: ', this.state.cars);
    console.log('state mydata: ', this.state.myData());
    console.log('state config: ', this.state.configData);

    // if we do this the error has to be handled another way
    // may be an error page??
    this.state.getConfig();
  }

  private handleError(error) {
    // now we have the error we can do display it nicely to the user
    // we can log the error here or in the service (better)
    console.log('observable error: ', error);
  }
}

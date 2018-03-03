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
    console.log('app getting state');

    this.state.getConfiguration();
    console.log('state baseurl: ', this.state.baseURL);
    console.log('state myurl: ', this.state.myURL());
    console.log('state cars: ', this.state.cars);
    console.log('state mydata: ', this.state.myData());

    console.log('app getting state2');
    this.state2.getConfiguration();
    console.log('state2 baseurl: ', this.state2.baseURL);
    console.log('state2 myurl: ', this.state2.myURL());
    console.log('state2 cars: ', this.state2.cars);
    console.log('state2 mydata: ', this.state2.myData());
  }
}

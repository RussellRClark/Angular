import {Component} from '@angular/core';
import { PDStateService2} from '../core/services/state/pdstate2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Russells Angular Demo';

  constructor(private state2: PDStateService2) {
    this.state2.getData();
  }
}

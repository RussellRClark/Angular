import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PDStateMockService} from './core/services/state/pdstatemock.service';
import {PDStateService} from './core/services/state/pdstateinterface';
import { PDState2MockService} from './core/services/state/pdstate2mock.service';
import {PDState2Service} from './core/services/state/pdstate2interface';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
      ],
      providers: [
        {provide: PDStateService, useClass: PDStateMockService},
        {provide: PDState2Service, useClass: PDState2MockService}
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Russells Angular Demo'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Russells Angular Demo');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Russells Angular Demo of Continuous Integration & Continuous Deployment');
  }));
});

import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend} from '@angular/http';
import { PDState2HttpService } from './pdstate2http.service';

describe('PDState2HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PDState2HttpService, Http, ConnectionBackend]
    });
  });

  it('should be created',
    inject([PDState2HttpService],
      (service: PDState2HttpService) => {

        expect(service).toBeTruthy();
      }));
});

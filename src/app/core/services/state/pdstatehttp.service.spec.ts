import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { PDStateHttpService } from './pdstatehttp.service';

describe('PDStateHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PDStateHttpService, HttpClient, HttpHandler]
    });
  });

  it('should be created',
    inject([PDStateHttpService],
      (service: PDStateHttpService) => {

        expect(service).toBeTruthy();
      }));
});

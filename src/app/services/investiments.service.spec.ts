import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Investiments } from '../models/investiments';
import { InvestimentsService } from './investiments.service';

describe('InvestimentsService', () => {
  let service: InvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const URL =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  const mockListInvestiments: Array<Investiments> = [
    { name: 'Exemplo 1', value: 100 },
    { name: 'Exemplo 2', value: 200 },
    { name: 'Exemplo 3', value: 300 },
    { name: 'Exemplo 4', value: 400 },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(InvestimentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch list of investiments', (done) => {
    service.fetchInvestiments().subscribe({
      next: (res: Investiments[]) => {
        expect(res[0].name).toEqual('Exemplo 1');
        expect(res[0].value).toEqual(100);
        expect(res[3].name).toEqual('Exemplo 4');
        expect(res[3].value).toEqual(400);
        done();
      },
    });

    const req = httpTestingController.expectOne(URL);
    req.flush(mockListInvestiments);

    expect(req.request.method).toEqual('GET');
  });
});

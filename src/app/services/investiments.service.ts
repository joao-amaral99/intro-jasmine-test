import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Investiments } from '../models/investiments';

@Injectable({
  providedIn: 'root',
})
export class InvestimentsService {
  apiUrl: string =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  constructor(private http: HttpClient) {}

  fetchInvestiments(): Observable<Investiments[]> {
    return this.http.get<Investiments[]>(this.apiUrl).pipe(map((res) => res));
  }
}

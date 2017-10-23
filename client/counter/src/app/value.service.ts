import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ValueService {

  constructor(private client: HttpClient) {
  }

  plus(): Observable<string> {
    return this.client.get(environment.baseUrl + 'api/Values/plus', { responseType: 'text' });
  }

  minus(): Observable<string> {
    return this.client.get(environment.baseUrl + 'api/Values/minus', { responseType: 'text' });
  }

  get(): Observable<string> {
    return this.client.get(environment.baseUrl + 'api/Values', { responseType: 'text' });
  }
  list(): Observable<any[]> {
    return this.client.get(environment.baseUrl + 'api/Values/list');
  }

  submit(name: string): Observable<string> {
    return this.client.post(environment.baseUrl + `api/Values/save/${name}`, 0);
  }
}

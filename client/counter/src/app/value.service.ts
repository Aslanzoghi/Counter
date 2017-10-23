import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ValueService {

  constructor(private client: HttpClient) {
  }

  plus(): Observable<string> {
    return this.client.get<string>(environment.baseUrl + 'api/Values/plus', { responseType: 'text' });
  }

  minus(): Observable<string> {
    return this.client.get<string>(environment.baseUrl + 'api/Values/minus',{ responseType: 'text' });
  }

  get(): Observable<string> {
    return this.client.get<string>(environment.baseUrl + 'api/Values',{ responseType: 'text' });
  }
}

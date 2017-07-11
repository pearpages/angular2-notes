# Observable.catch error handling

```typescript
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PassebngerDashboardService {

  constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    this.http.get(`${PASSENGER_API}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));

      // in the subscribe, the second argument is the error.
  }

}

```
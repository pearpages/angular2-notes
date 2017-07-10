# Custom Headers and RequestOptions

```typescript
import { Injectable } from '@angular/core';
import { Http, Reponse, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PassengerService {

  constructor(private http: Http) {}

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let optons = new RequestOptions({headers});
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options),
      .map((response:Response) => response.json());
  }

}

```
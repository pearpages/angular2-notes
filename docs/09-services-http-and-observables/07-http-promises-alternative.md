# Http Promises Alternative

```typescript
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: Http) { }

  getPassengers(): Promise<Passenger[]> {
    this.http.get(`${PASSENGER_API}`)
      .toPromise() // <-- There's the helper operator toPromise for Observables
      .then((response: Response) => response.json())
  }
}

```
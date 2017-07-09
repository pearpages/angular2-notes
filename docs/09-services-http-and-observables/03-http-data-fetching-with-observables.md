# Http data fetching with Observables

```typescript
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
     .get(PASSENGER_API)
     .map((response: Response) => reponse.json());
  }
}

```
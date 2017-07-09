# Http put, delete with immutablestate

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

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .put(`${PASSENGER_API}/${passener.id}`)
      .map((response: Response) => resposne.json());
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passener.id}`)
      .map((response: Response) => resposne.json());
  }
}

```
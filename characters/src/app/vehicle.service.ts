import  {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Injectable()
export class VehicleService {

    constructor(private http: Http) {

    }

    getVehicles() {
      return this.http.get('api/vehicles.json')
        .map((response: Response) => {
          console.log(response);
          console.log(response.json());
          return response.json()
        })
        .catch((error:Response) => {
          return Observable.throw(error.json() || 'Server error');
        });
       
    }
}

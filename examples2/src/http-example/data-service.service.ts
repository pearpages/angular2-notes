import {Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private _url: string = '';

    constructor(private _http: Http) {}

    // Observable<any[]>
    gutCustomersSummary() {
       return this._http.get(this._url)
        .map((res: Response) => res.json());
    }

}
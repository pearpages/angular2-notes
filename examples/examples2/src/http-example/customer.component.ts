import {Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {DataService} from './data-service.service';

@Component({
    selector: 'customers',
    templateUrl: './customers.html'
})
export class CustomersComponent implements OnInit {

    customers : Observable<any[]> = [];

    constructor(private _dataService: DataService) {}

    ngOnInit() {
        this._dataService.gutCustomersSummary()
        .subscribe((data) => this.customers = data);
    }
}
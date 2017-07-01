import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
    selector: 'ro-crisis-detail',
    template: `
    <div>
        <h3>Detail {{id}}</h3>
        <button (click)="goBackToCrises()">Go Back To Crises</button>
    </div>
    `
})

export class CrisisDetailComponent implements OnInit {

    id: string;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        // "The Router manages the observables it provides and localizes the subscriptions. The subscriptions are cleaned up when the component is destroyed, protecting against memory leaks, so we don't need to unsubscribe from the route params Observable."
        this.route.paramMap
            .map((params: ParamMap) => params.get('id'))
            .subscribe(id => this.id = id);
    }

    goBackToCrises() {
        // Relative navigation back to the crises
        this.router.navigate(['../', {id: this.id, foo: 'foo'}], { relativeTo: this.route })
    }
}
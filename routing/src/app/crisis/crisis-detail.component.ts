import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Component({
    selector: 'ro-crisis-detail',
    template: `
    <div>
        <h3>Detail</h3>
        <button (click)="goBackToCrises()">Go Back To Crises</button>
    </div>
    `
})

export class CrisisDetailComponent implements OnInit {

    id$: Observable<string>;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.id$ = this.route.params.map((params: ParamMap) => params.get('id'));
    }

    goBackToCrises() {
        this.id$.take(1).map( (id: string) =>
            // Relative navigation back to the crises
            this.router.navigate(['../', id], { relativeTo: this.route })
        );
    }
}
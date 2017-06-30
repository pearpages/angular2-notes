import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ro-hero-detail',
    template: `
    <div>This is a hero</div>
    <div>
        An example for ActivatedRoute:
        <ul>
            <li>url</li>
            <li>data</li>
            <li>paramMap (former params)</li>
            <li>queryParamMap (former queryParams)</li>
            <li>fragment</li>
            <li>outlet</li>
            <li>routeConfig</li>
            <li>parent</li>
            <li>firstChild</li>
            <li>children</li>
        </ul>
    </div>
    <pre>params: {{params$ | async | json}}</pre>
        `,
    styles: [``]
})
export class HeroDetailComponent implements OnInit {

    params$: Observable<any>;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.params$ = this.route.paramMap;
    }
}

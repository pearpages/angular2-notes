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
    <pre>paramMap: {{params$ | async | json}}</pre>
    <div>
        ParamMap has:
        <ul>
            <li>has(name)</li>
            <li>get(name)</li>
            <li>getAll(name)</li>
            <li>keys</li>
        </ul>
    </div>
    <div>
        When you know for certain that a HeroDetailComponent instance will never,
         never, ever be re-used, you can simplify the code with the snapshot.
    </div>
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

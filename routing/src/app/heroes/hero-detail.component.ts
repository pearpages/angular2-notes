import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ro-hero-detail',
    template: `
    <h2>Hero Detail</h2>

    <div>
        <div><strong>Name and Lastname</strong> {{ (params$ | async).params?.id }} {{ (params$ | async).params?.surname }}</div>
        <div><strong>Keys</strong> {{(params$ | async).keys | json }}</div>
    </div>

    <pre>paramMap: {{params$ | async | json}}</pre>

    <h3>API</h3>

     <div>
        <h4>ActivatedRoute</h4>
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
    <div>
        <h4>ParamsMap</h4>
        <ul>
            <li>has(name)</li>
            <li>get(name)</li>
            <li>getAll(name)</li>
            <li>keys</li>
        </ul>
    </div>
    <div>
        <h4>SwitchMap</h4>
        The switchMap operator also cancels previous in-flight requests. If the user re-navigates to this route with a new id while the HeroService is still retrieving the old id, switchMap discards that old request and returns the hero for the new id.
    </div>
    <div>
        <h4>snapshot</h4>
        When you know for certain that a HeroDetailComponent instance will never,
         never, ever be re-used, you can simplify the code with the snapshot.
    </div>
        `,
    styles: [``]
})
export class HeroDetailComponent implements OnInit {

    params$: Observable<ParamMap>;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.params$ = this.route.paramMap;
    }
}

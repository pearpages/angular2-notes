import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ro-heroes-list',
    template: `
    <ul>
        <li>Pere</li>
        <li>Joan</li>
        <li>Jaume</li>
        <li>Josep</li>
        <li>Maria</li>
        <li>Marta</li>
    </ul>
    <pre>data: {{data$ | async | json}}</pre>
    `
})

export class HeroesListComponent implements OnInit {

    data$: Observable<any>;

    constructor(public route: ActivatedRoute) { }

    ngOnInit() {
        this.data$ = this.route.data;
    }
}

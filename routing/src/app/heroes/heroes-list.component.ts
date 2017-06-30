import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'ro-heroes-list',
    template: `
    <ul>
        <li *ngFor="let hero of heroes" [class]="getCssClass((id$ | async),hero)">{{hero}}</li>
    </ul>
    <pre>data: {{data$ | async | json}}</pre>
    <pre>id: {{id$ | async | json}}</pre>
    `,
    styles: [`
        .selected {
            text-decoration: underline;
            color: red;
        }
    `]
})

export class HeroesListComponent implements OnInit {

    data$: Observable<any>;
    id$: Observable<any>;
    heroes: string[] = [
        'Pere',
        'Joan',
        'Jaume',
        'Josep',
        'Maria',
        'Marta'
    ];

    constructor(public route: ActivatedRoute) { }

    ngOnInit() {
        this.data$ = this.route.data;

        this.id$ = this.route.paramMap
            .map( (paramMap: ParamMap) => paramMap.get('id'));
    }

    getCssClass(id: string, hero: string) {
        if (id.toLowerCase() === hero.toLowerCase() ) {
            return 'selected';
        }
        return '';
    }
}

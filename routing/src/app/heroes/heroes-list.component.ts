import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'ro-heroes-list',
    template: `
    <h2 *ngIf="(data$ | async).title">{{ (data$ | async).title }}</h2>
    <ul>
        <li class="element" *ngFor="let hero of heroes"
            [class.selected]="isSelected((id$ | async),hero)"
            (click)="select(hero)"
        >{{hero}} <span *ngIf="isFromUrl((id$|async),hero)">(by url id)</span></li>
    </ul>
    <pre>data: {{data$ | async | json}}</pre>
    <pre>id: {{id$ | async | json}}</pre>
    `,
    styles: [`
        .element:hover {
            color: blue;
            cursor: pointer;
            text-decoration: underline;
        }
        .selected {
            text-decoration: underline;
            color: red;
        }
    `]
})

export class HeroesListComponent implements OnInit {

    data$: Observable<any>;
    id$: Observable<any>;
    heroes: string[];
    selected: string;

    constructor(public route: ActivatedRoute) { }

    ngOnInit() {
        this.data$ = this.route.data;

        this.id$ = this.route.paramMap
            .map( (paramMap: ParamMap) => {
                this.selected = paramMap.get('id');
                return paramMap.get('id');
            });

        this.heroes  = [
            'Pere',
            'Joan',
            'Carles',
            'Jaume',
            'Josep',
            'Maria',
            'Marta'
        ];
    }

    select(hero:string): void {
        this.selected = hero;
    }

    isFromUrl(id: string, hero: string): boolean {
        if (!id ) {
            return false;
        }
        return id.toLowerCase() == hero.toLowerCase();
    }

    isSelected(id: string, hero: string): boolean {
        if (!id && !this.selected) {
            return false;
        }
        return ( id.toLowerCase() === hero.toLowerCase() || this.selected.toLowerCase() === hero.toLowerCase() );
    }
}

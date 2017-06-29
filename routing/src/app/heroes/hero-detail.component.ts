import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ro-hero-detail',
    template: `
    <div>This is a hero</div>
    <pre>params: {{params$ | async | json}}</pre>
        `,
    styles: [``]
})
export class HeroDetailComponent implements OnInit {

    params$: Observable<any>;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.params$ = this.route.params;
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ro-nav',
    template: `
        <nav>
            <a routerLinkActive="active" routerLink="root">Home</a>
            <a routerLinkActive="active" routerLink="blue" [routerLinkActiveOptions]="{ exact: true }">Blue</a>
            <a routerLinkActive="active" routerLink="blue/house">Blue</a>
            <a routerLinkActive="active"
            routerLink="blue"
            [queryParams]="{color:'red', name:'Pere'}" [fragment]="'my-history'">Blue queryParams</a>
            <a routerLinkActive="active" routerLink="red">Red</a>
            <a routerLinkActive="active" routerLink="orange">Orange</a>
            <a routerLinkActive="active" routerLink="black">Redirection Example</a>
            <a routerLinkActive="active" routerLink="black/car">Redirection Example 2</a>
            <a routerLinkActive="active" routerLink="brown">Redirection Example 3</a>
            <a routerLinkActive="active" routerLink="hero/hello">Precedence Example</a>
            <a routerLinkActive="active" routerLink="hero/joan">Hero Joan</a>
            <a routerLinkActive="active" routerLink="heroes">Heroes List</a>
        </nav>
        <button (click)="gotoHeroes()">heroes</button>
        <button (click)="gotoHeroes({id: 'carles', var2: 'whatever2'})">heroes with params (Matrix URL)</button>
        <button (click)="gotoHero('pere')">hero pere</button>
        <button (click)="gotoHero('carles')">hero carles</button>
        `,
    styles: [`
        a.active {
            color: green !important;
        }

        a:visited {
            color: rgb(0, 0, 238);
        }
    `]
})
export class NavComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }

    gotoHeroes(params: Object): void {
        if (params) {
            this.router.navigate(['heroes', params]);
        } else {
            this.router.navigate(['heroes']);
        }
    }

    gotoHero(id: string): void {
        this.router.navigate(['hero', id]);
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ro-nav',
    template: `
        <nav>
            <a routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" routerLink="">Home</a>
            <a routerLinkActive="active" routerLink="blue">Blue</a>
            <a routerLinkActive="active" routerLink="red">Red</a>
            <a routerLinkActive="active" routerLink="orange">Orange</a>
            <a routerLinkActive="active" routerLink="black">Redirection Example</a>
            <a routerLinkActive="active" routerLink="hero/joan">Hero Joan</a>
            <a routerLinkActive="active" routerLink="heroes">Heroes List</a>
        </nav>
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
    constructor() { }

    ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
    // no need for selector
    template: `
    <div>
        <h2>CRISIS CENTER</h2>
        <p>This is the outer router-outlet from Crisis Center</p>
        <router-outlet></router-outlet>
    </div>
    `
})

export class CrisisCenterComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
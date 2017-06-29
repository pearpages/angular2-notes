import { Component, OnInit } from '@angular/core';

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
    `
})

export class HeroesListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Crisis, CrisisService } from '.';

@Component({
    selector: 'ro-crisis-list',
    template: `
    <h3>List</h3>
    <ul class="items">
        <li *ngFor="let crisis of crises">
        <a [routerLink]="[crisis.id]"
            [class.selected]="isSelected(crisis)">
            <span class="badge">{{ crisis.id }}</span>
            {{ crisis.name }}
        </a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `
})

export class CrisisListComponent implements OnInit {

    selectedId: number;
    crises: Array<Crisis>;

    constructor(
        private route: ActivatedRoute,
        private crisesService: CrisisService,
        private router: Router
    ) { }

    ngOnInit() {
       this.crises = this.crisesService.getAll();
     }

    isSelected(crisis: number): boolean {
        return this.selectedId === crisis;
    }

    onSelect(crisis: Crisis) {
        this.selectedId = crisis.id;

        // Navigate with relative link
        this.router.navigate([crisis.id], { relativeTo: this.route });
    }
}
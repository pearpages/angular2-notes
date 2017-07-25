import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-bem',
  template: `
  <h2>BEM</h2>
  <h6>Beginner</h6>
  <a [routerLink]="['variable-names']" routerLinkActive="sp-active">Variable Names</a>
  <a [routerLink]="['structure-sass']" routerLinkActive="sp-active">Sass Structure</a>
  <h6>Intermediate</h6>
  <h6>Advanced</h6>
  <router-outlet></router-outlet>
  `
})

export class BemComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

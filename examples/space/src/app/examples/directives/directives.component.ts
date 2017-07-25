import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-directives-example',
  template: `
  <h2>Directives</h2>
  <nav>
    <a routerLink="attribute" routerLinkActive="sp-active">Attribute Directives</a>
    <a routerLink="structural" routerLinkActive="sp-active">Structural Directives</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class DirectivesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

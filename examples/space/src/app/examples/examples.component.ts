import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-examples',
  template: `
  <h2>Examples</h2>
  <nav>
    <a routerLink="pipes" routerLinkActive="active">Pipes</a>
    <a routerLink="host" routerLinkActive="active">Host</a>
    <a routerLink="dynamic-components" routerLinkActive="active">Dynamic Components</a>
    <a routerLink="directives" routerLinkActive="active">Directives</a>
    <a routerLink="communication" routerLinkActive="active">Communication</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class ExamplesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

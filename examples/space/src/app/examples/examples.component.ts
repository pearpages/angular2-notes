import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-examples',
  template: `
  <h2>Examples</h2>
  <nav class="sp-nav">
    <a routerLink="pipes" routerLinkActive="sp-active">Pipes</a>
    <a routerLink="host" routerLinkActive="sp-active">Host</a>
    <a routerLink="dynamic-components" routerLinkActive="sp-active">Dynamic Components</a>
    <a routerLink="directives" routerLinkActive="sp-active">Directives</a>
    <a routerLink="communication" routerLinkActive="sp-active">Communication</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class ExamplesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

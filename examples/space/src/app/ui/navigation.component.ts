import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-navigation',
  template: `
  <nav>
    <a routerLink="examples/pipes" routerLinkActive="active">Pipes</a>
    <a routerLink="examples/host" routerLinkActive="active">Host</a>
    <a routerLink="examples/dynamic-components" routerLinkActive="active">Dynamic Components</a>
    <a routerLink="examples/directives" routerLinkActive="active">Directives</a>
    <a routerLink="examples/communication" routerLinkActive="active">Communication</a>
  </nav>
  `
})

export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

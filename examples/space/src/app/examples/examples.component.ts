import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-examples',
  template: `
  <nav>
    <a routerLink="/pipes" routerLinkActive="active">Pipes</a>
    <a routerLink="/host" routerLinkActive="active">Host</a>
    <a routerLink="/dynamic-components" routerLinkActive="active">Dynamic Components</a>
    <a routerLink="/directives/attribute" routerLinkActive="active">Attribute Directives</a>
    <a routerLink="/directives/structural" routerLinkActive="active">Structural Directives</a>
    <a routerLink="/communication/viewchild" routerLinkActive="active">Communication via Viewchild</a>
    <a routerLink="/communication/service" routerLinkActive="active">Communication via Service</a>
    <a routerLink="/communication/setter" routerLinkActive="active">Communication via Setter</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class ExamplesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

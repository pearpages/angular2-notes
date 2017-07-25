import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-navigation',
  template: `
  <nav>
    <a routerLink="examples" routerLinkActive="active">Examples</a>
    <a routerLink="bem" routerLinkActive="active">Bem</a>
  </nav>
  `
})

export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

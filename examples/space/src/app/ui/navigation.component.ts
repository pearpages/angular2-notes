import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-navigation',
  template: `
  <nav class="sp-nav">
    <a routerLink="examples" routerLinkActive="sp-active">Examples</a>
    <a routerLink="bem" routerLinkActive="sp-active">Bem</a>
  </nav>
  `
})

export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

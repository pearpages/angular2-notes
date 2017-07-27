import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-navigation',
  template: `
  <nav class="sp-nav">
    <a routerLink="examples" routerLinkActive="sp-active">Examples</a>
    <a routerLink="css" routerLinkActive="sp-active">CSS</a>
    <a routerLink="forms" routerLinkActive="sp-active">Forms</a>
  </nav>
  `
})

export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

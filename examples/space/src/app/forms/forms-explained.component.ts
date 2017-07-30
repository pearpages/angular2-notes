import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-forms-explained',
  template: `
  <h1>Forms</h1>
  <nav class="sp-nav">
    <a routerLink="basic" routerLinkActive="sp-active">Basic Concepts</a>
    <a routerLink="template-driven" routerLinkActive="sp-active">Template Driven</a>
    <a routerLink="reactive" routerLinkActive="sp-active">Reactive Forms</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class FormsExplainedComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

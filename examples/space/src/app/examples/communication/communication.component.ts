import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-communication-example',
  template: `
  <h2>Communication Through Components</h2>
  <nav>
    <a routerLink="service" routerLinkActive="sp-active">Service</a>
    <a routerLink="setter" routerLinkActive="sp-active">Setter&Getter</a>
    <a routerLink="template-variables" routerLinkActive="sp-active">Template Variables</a>
    <a routerLink="viewchild" routerLinkActive="sp-active">Viewchild</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class CommunicationComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

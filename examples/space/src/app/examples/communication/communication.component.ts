import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-communication-example',
  template: `
  <h2>Communication Through Components</h2>
  <nav>
    <a routerLink="service" routerLinkActive="active">Service</a>
    <a routerLink="setter" routerLinkActive="active">Setter&Getter</a>
    <a routerLink="template-variables" routerLinkActive="active">Template Variables</a>
    <a routerLink="viewchild" routerLinkActive="active">Viewchild</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class CommunicationComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

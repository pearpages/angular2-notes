import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Routing App</h1>
    <p>Remember to learn about 'BrowserAnimationsModule'</p>
    <ro-nav></ro-nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() { }
}

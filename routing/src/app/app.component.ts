import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Routing App</h1>
    <p>Remember to learn about 'BrowserAnimationsModule'</p>
    <ro-nav></ro-nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
    <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ro-nav></ro-nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
    <div><a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a></div>
    <footer>
      <p>Remember to learn about 'BrowserAnimationsModule'</p>
    </footer>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() { }
}

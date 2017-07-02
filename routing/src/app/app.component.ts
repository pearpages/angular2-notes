import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ro-nav></ro-nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
    <div><a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a></div>
    <footer>
      <h3>Remember to learn</h3>
      <ul>
        <li>BroswerAnimationsModule</li>
        <li>CanDeactivate</li>
      </ul>
    </footer>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() { }
}

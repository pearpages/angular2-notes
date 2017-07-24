import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1><a [routerLink]="['/']">Angular.io Examples</a></h1>
    <sp-navigation></sp-navigation>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }

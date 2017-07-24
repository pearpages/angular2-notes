import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1><a class="sp-title" [routerLink]="['/']">Angular.io Examples</a></h1>
    <sp-navigation></sp-navigation>
    <router-outlet></router-outlet>
  `,
  styles: [`
  .sp-title {
    color: inherit;
  }
  `]
})
export class AppComponent { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1><a class="sp-title" [routerLink]="['/']">Angular.io Examples</a></h1>
      <sp-navigation></sp-navigation>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
  .sp-title {
    color: inherit;
  }
  `]
})
export class AppComponent { }

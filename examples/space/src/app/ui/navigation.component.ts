import { Component } from '@angular/core';

import { LoginService } from '@space/login';

@Component({
  selector: 'sp-navigation',
  template: `
  <nav class="sp-nav">
    <a routerLink="examples" routerLinkActive="sp-active">Examples</a>
    <a routerLink="css" routerLinkActive="sp-active">CSS</a>
    <a routerLink="forms" routerLinkActive="sp-active">Forms</a>
    <span *ngIf="loginService.isLogged()" (click)="logout()">Logout</span>
  </nav>
  `
})

export class NavigationComponent {
  constructor(public loginService: LoginService) { }

  logout() {
    this.loginService.logout();
  }
}

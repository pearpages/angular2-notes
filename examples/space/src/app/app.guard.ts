import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from './login/login.service';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate() {
    if ( this.loginService.isLogged() ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

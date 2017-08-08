import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from './login/login.service';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService,
  //  private state: RouterStateSnapshot
  ) {}

  canActivate(): boolean {
    if ( this.loginService.isLogged() ) {
      console.log('is logged: ' + this.loginService.isLogged());
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('not logged, going to /login');
      return false;
    }
  }
}

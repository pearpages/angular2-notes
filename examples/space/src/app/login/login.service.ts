import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { StoreService } from '@space/core';

@Injectable()
export class LoginService {
  private key = 'user';
  private redirectUrl = '/';

  constructor(
    private storeService: StoreService,
    private router: Router
  ) { }

  login(username: string, password: string) {
    this.storeService.setItem(this.key, username);
    this.router.navigate([this.redirectUrl]);
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  logout() {
    this.storeService.removeItem(this.key);
    this.router.navigateByUrl('/login');
  }

  isLogged(): boolean {
    return this.storeService.getItem(this.key) !== null;
  }

}

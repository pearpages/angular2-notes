import { Injectable } from '@angular/core';

import { StoreService } from '@space/core';

@Injectable()
export class LoginService {
  private key = 'user';

  constructor(private storeService: StoreService) { }

  login(username: string, password: string) {
    this.storeService.setItem(this.key, username);
  }

  logout() {
    this.storeService.removeItem(this.key);
  }

  isLogged(): boolean {
    return this.storeService.getItem(this.key) !== null;
  }

}

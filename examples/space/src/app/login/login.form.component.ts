import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'sp-login-form',
  template: `
  <form (submit)="doLogin()" [formGroup]="login">
  <input class="form-control" formControlName="username">
  <input class="form-control" formControlName="password" type="password">
  <button [disabled]="login.status === 'INVALID'" class="btn btn-default">Submit</button>
  </form>
  `
})

export class LoginFormComponent implements OnInit {
  login: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  doLogin() {
    const {username, password} = this.login.value;
    this.loginService.login(username, password);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-login-page',
  template: `
  <h2>Login</h2>
  <sp-login-form></sp-login-form>
  `
})

export class LoginPageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.models';

@Component({
  selector: 'sp-validation-example',
  template: `
  <label for="name">Name</label>

  <input type="text" id="name" class="form-control"
         required minlength="4" maxlength="24"
         name="name" [(ngModel)]="hero.name"
         #name="ngModel" >

  <div *ngIf="name.errors && (name.dirty || name.touched)"
       class="alert alert-danger">
      <div [hidden]="!name.errors.required">
        Name is required
      </div>
      <div [hidden]="!name.errors.minlength">
        Name must be at least 4 characters long.
      </div>
      <div [hidden]="!name.errors.maxlength">
        Name cannot be more than 24 characters long.
      </div>
  </div>
  `
})

export class ValidationExampleComponent implements OnInit {

  hero: Hero = {
    id: 234245,
    name: 'Pere Pages',
    power: 'Hard Worker'
  };
  constructor() { }

  ngOnInit() { }
}

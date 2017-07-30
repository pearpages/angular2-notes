import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.models';

@Component({
  selector: 'sp-validation-example',
  template: `
  <h3>Explanation</h3>
  <div>
  The template variable (#name) has the value "ngModel" (always ngModel). This gives you a reference to the Angular NgModel directive associated with this control that you can use in the template to check for control states such as valid and dirty.
  </div>
  <hr>

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

export class ValidationWithAttributesComponent implements OnInit {

  hero: Hero = {
    id: 234245,
    name: 'Pere Pages',
    power: 'Hard Worker'
  };
  constructor() { }

  ngOnInit() { }
}

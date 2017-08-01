import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from './../shared/hero.models';

@Component({
  selector: 'sp-validation-controller',
  template: `
  <h3>Explanation</h3>
  <div>
  The template variable (#name) has the value "ngModel" (always ngModel). This gives you a reference to the Angular NgModel directive associated with this control that you can use in the template to check for control states such as valid and dirty.
  </div>
  <hr>

  <form #heroForm="ngForm" >

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

  </form>
  `
})

export class ValidationWithControllerCodeComponent implements OnInit, AfterViewChecked {

  heroForm: NgForm;
  @ViewChild('heroForm') currentForm: NgForm;
  hero: Hero = {
    id: 234245,
    name: 'Pere Pages',
    power: 'Hard Worker'
  };
  formErrors = {
    'name': '',
    'power': ''
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };
  constructor() { }

  ngOnInit() { }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.heroForm) { return; }
    this.heroForm = this.currentForm;
    if (this.heroForm) {
      this.heroForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty[key]) { this.formErrors[field] += messages[key] + ' '; }
          }
        }
      }

    }
  }

}

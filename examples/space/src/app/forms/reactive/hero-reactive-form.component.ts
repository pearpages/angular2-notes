import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Hero } from './../shared/hero.models';

@Component({
  selector: 'sp-hero-form-reactive',
  templateUrl: './hero-reactive-form.component.html'
})
export class HeroReactiveFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { id: 18, name: 'Dr. WhatIsHisName', power: this.powers[0], alterEgo: 'Dr. What' };

  submitted = false;

  heroForm: FormGroup;

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

  onSubmit() {
    this.submitted = true;
    this.hero = this.heroForm.value;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.heroForm = this.fb.group({
      'name': [this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]
      ],
      'alterEgo': [this.hero.alterEgo],
      'power': [this.hero.power, Validators.required]
    });

    this.heroForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}

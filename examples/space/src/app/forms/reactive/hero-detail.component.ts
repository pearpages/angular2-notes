import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { states, makeAddress } from './reactive.models';

@Component({
  selector: 'sp-hero-detail',
  template: `
  <h2>Hero Detail</h2>
  <h3><i>Just a Form Control</i></h3>
  <fieldset class="heroForm" [formGroup]="heroForm">
  <label>Name:
    <input class="form-control" formControlName="name">
  </label>
  <label>LastName:
    <input class="form-control" formControlName="lastName">
  </label>
  <button (click)="onSubmit(heroForm)" [disabled]="heroForm.status === 'INVALID'" class="btn btn-default">Submit</button>
  </fieldset>
  <p>Form value: {{ heroForm.value | json }}</p>
  <p>Form status: {{ heroForm.status | json }}</p>

  <hr>

  <fieldset class="colleagueForm" [formGroup]="colleague">
  <div class="form-group">Name:
    <input class="form-control" formControlName="name">
  </div>
  <div class="form-group">LastName:
    <input class="form-control" formControlName="lastName">
  </div>
  <fieldset formGroupName="address">
    <legend>Address</legend>
    <div class="form-group">Street:
      <input class="form-control" formControlName="street">
    </div>
    <div class="form-group">City:
      <input class="form-control" formControlName="city">
    </div>
    <div class="form-group">State:
      <input class="form-control" formControlName="state">
    </div>
    <div class="form-group">Zip:
      <input class="form-control" formControlName="zip">
    </div>
  </fieldset>
  <div class="form-group">Power:
    <input class="form-control" formControlName="power">
  </div>
  <div class="form-group">Sidekick:
    <input class="form-control" formControlName="sidekick">
  </div>
  <button (click)="onSubmit(colleague)" [disabled]="colleague.status === 'INVALID'" class="btn btn-default">Submit</button>
  </fieldset>
  <p>Form value: {{ colleague.value | json }}</p>
  <p>Form status: {{ colleague.status | json }}</p>
  <p>Name value (heroForm.get('name').value): {{ colleague.get('name').value }}</p>
  <p>Street value (heroForm.get('address.street').value): {{ colleague.get('address.street').value}}</p>
  `,
  styles: [`
  .heroForm, .colleagueForm {
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 10px;
  }
  .heroForm .ng-valid, .colleagueForm .ng-valid {
    background: lightgreen;
  }
  .heroForm .ng-invalid, .colleagueForm .ng-invalid {
    background: lightcoral;
  }
  .heroForm .ng-pristine, .colleagueForm .ng-pristine {
    background: inherit;
  }
`]
})

export class HeroDetailComponent {
  heroForm: FormGroup;
  colleague: FormGroup;

  constructor(private fb: FormBuilder) {
    this.colleague = this.createColleagueForm();
  }

  onSubmit(form: FormGroup) {
    alert(JSON.stringify(form.value));
  }

  private createColleagueForm(): FormGroup {
    return this.fb.group({
      name: ['Pere', Validators.required],
      lastName: ['Pages', Validators.required],
      address: this.fb.group(makeAddress()),
      power: '',
      sidekick: ''
    });
  }

  private createHeroForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.models';

@Component({
  selector: 'sp-hero-form',
  template: `
  <h2>HeroForm</h2>
  <a href="https://angular.io/guide/forms">Template Driven Forms Angular.io</a>
  <a href="https://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html">More about it</a>
  <p>In template driven forms, if you've imported FormsModule, you don't have to do anything to the &lt;form&gt; tag in order to make use of FormsModule.</p>
  <p>[(ngModel)]="model.name" name="name"</p>
  <p>#heroForm="ngForm"</p>
  <p>Internally, Angular creates FormControl instances and registers them with an NgForm directive that Angular attached to the &lt;form&gt; tag. Each FormControl is registered under the name you assigned to the name attribute. Read more in the previous section, The NgForm directive.</p>
  <p>Using ngModel in a form gives you more than just two-way data binding. It also tells you if the user touched the control, if the value changed, or if the value became invalid.</p>

  <form [hidden]="submitted" (ngSubmit)="onSubmit(heroForm.value); heroForm.reset();" #heroForm="ngForm">

      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" [(ngModel)]="model.name" name="name" #name required>
      </div>

      <div class="form-group">
        <label for="power">Hero Power</label>
        <select class="form-control" id="power" required [(ngModel)]="model.power" name="power">
          <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input type="text" class="form-control" id="alterEgo" [(ngModel)]="model.alterEgo" name="alterEgo">
      </div>

      <button [disabled]="!heroForm.form.valid" type="submit" class="btn btn-success" >Submit</button>

    </form>

    {{ diagnostic }}
    <p><strong>name className: </strong>{{ name.className }}</p>

    <h4>Heroes List</h4>
    <ul>
    <li *ngFor="let value of heroes">{{ value | json}}</li>
    </ul>
  `
})

export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer', 'Hard Worker'];
  model: Hero = {
    id: 234245,
    name: 'Pere Pages',
    power: 'Hard Worker'
  };
  heroes: Array<Hero> = [];
  submitted = false;

  constructor() { }

  ngOnInit() { }

  onSubmit(value: Hero): void {
    this.newHero(value);
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero(hero: Hero) {
    this.heroes.push({...hero});
  }

}

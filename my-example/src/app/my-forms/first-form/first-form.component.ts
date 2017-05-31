import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

// let myHero = new Hero(42, 'SkyDog',
//   'Fetch any object at any distance',
//   'Leslie Rollover');

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  modelSubmitted;

  onSubmit() {
    this.submitted = true;
    this.modelSubmitted = Object.assign({},this.model);
  }

  constructor() { }

  ngOnInit() {

  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  touched(value) {
    return value.split(' ').indexOf('ng-touched') !== -1;
  }
  pristine(value) {
    return value.split(' ').indexOf('ng-pristine') !== -1;
  }
  valid(value) {
    return value.split(' ').indexOf('ng-valid') !== -1;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-pipes-example',
  template: `
  <h4>Pipes Example</h4>
  <fieldset>
    <legend>Exponential</legend>
    <input [(ngModel)]="value" type="number" name="value">
    <input [(ngModel)]="exponent" type="number" name="exponent">
    {{this.value | exponentialStrength:this.exponent}}
  </fieldset>
  `
})

export class PipesExampleComponent implements OnInit {
  value = 1;
  exponent = 1;

  constructor() { }

  ngOnInit() { }
}

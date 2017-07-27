import { Component } from '@angular/core';

@Component({
  selector: 'sp-basic-example3',
  template: `
  <h2>Another template reference</h2>
  <input #box (keyup)="onKey(box.value)">
  <p>{{value}}</p>
  `
})

export class Example3Component {
  value = '';

  onKey(value: string): void {
    this.value = value;
  }
}

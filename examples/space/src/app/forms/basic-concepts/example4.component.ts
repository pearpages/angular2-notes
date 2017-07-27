import { Component } from '@angular/core';

@Component({
  selector: 'sp-basic-example4',
  template: `
  <h2>Key Event Filtering (key.enter)</h2>
  <input #box (keyup.enter)="onEnter(box.value)">
  <p>{{value}}</p>
  `
})

export class Example4Component {
  value: string;

  onEnter(value: string): void {
    this.value = value;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'sp-basic-example5',
  template: `
  <h2>On blur</h2>
  <input #box (blur)="update(box.value)">
  <p><strong>On Blur:</strong> {{value}}</p>

  <button class="btn btn-default" (click)="addToTheList(box.value)">Add to the list</button>

  <ul>
    <li *ngFor="let value of list">{{value}}</li>
  </ul>
  `
})

export class Example5Component {
  value: string;
  list: Array<string> = [];

  update(value: string): void {
    this.value = value;
  }

  addToTheList(value: string): void {
    this.list.push(value);
  }
}

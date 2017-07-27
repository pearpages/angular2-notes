import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-basic-example1',
  template: `
  <h2>Keyup Event</h2>
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
  `
})

export class Example1Component implements OnInit {
  values: string;
  constructor() { }

  ngOnInit() { }

  onKey(event: KeyboardEvent): void {
    this.values = (<HTMLInputElement>event.target).value;
  }
}

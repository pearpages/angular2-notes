import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-communication-through-template-variable',
  template: `
    <h4>Parent Accessing Son Through Template Variable Component</h4>
    <sp-countdown-timer #timer></sp-countdown-timer>

    <button (click)="timer.start()">Start</button>
    <button (click)="timer.stop()">Stop</button>
    <button (click)="timer.reset()">Reset</button>
  `
})

export class TemplateVariablesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

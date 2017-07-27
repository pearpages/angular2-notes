import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-basic-example2',
  template: `
  <h2>Template Reference</h2>
  <h4>This won't work at all unless you bind to an event</h4>
  <p>Angular updates the bindings (and therefore the screen) only if the app does something in response to asynchronous events, such as keystrokes. This example code binds the keyup event to the number 0, the shortest template statement possible. While the statement does nothing useful, it satisfies Angular's requirement so that Angular will update the screen.</p>

  <input #box (keyup)="0">
  <p>{{box.value}}</p>
  `
})

export class Example2Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

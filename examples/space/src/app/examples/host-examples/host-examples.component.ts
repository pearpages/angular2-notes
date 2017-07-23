import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-host-examples',
  template: `
  <h4>Host Examples Styles</h4>
  <button (click)="isBlue = !isBlue">Change Outer Context Class</button>
  <host-example-parent [class.blue]="isBlue"></host-example-parent>
  `
})

export class HostExamplesComponent implements OnInit {
  isBlue = false;
  constructor() { }

  ngOnInit() { }
}

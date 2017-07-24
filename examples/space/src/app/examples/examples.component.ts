import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-examples',
  template: `
  <router-outlet></router-outlet>
  `
})

export class ExamplesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

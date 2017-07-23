import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-examples',
  template: `
  <sp-pipes-example></sp-pipes-example>
  <sp-structural-directives-example></sp-structural-directives-example>
  <sp-attribute-directive-example></sp-attribute-directive-example>
  <sp-banner-example></sp-banner-example>
  <sp-example-5></sp-example-5>
  <sp-example-1></sp-example-1>
  <sp-example-2></sp-example-2>
  <sp-example-3></sp-example-3>
  <sp-example-4></sp-example-4>
  `
})

export class ExamplesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-structural-directives-example',
  template: `
  <h4>Structural Directives Example</h4>
  <button (click)="isHiddenElement = !isHiddenElement">Toggle Visibility</button>
  <p *spUnless="isHiddenElement">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad quibusdam eaque veniam at consequuntur odit doloremque saepe veritatis blanditiis!</p>
  `
})

export class StructuralDirectivesExample implements OnInit {
  isHiddenElement = true;

  constructor() { }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-attribute-directive-example',
  template: `
  <h4>Attribute Directives Examples</h4>
  <div>
    <div>The following example shows the <strong>highlight</strong> directive. Uses <i>ElementRef</i> and <i>HostListener</i></div>
    <p [spHighlight]="'yellow'" [enterColor]="'red'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, unde?</p>
  </div>
  `
})

export class AttributeExamplesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

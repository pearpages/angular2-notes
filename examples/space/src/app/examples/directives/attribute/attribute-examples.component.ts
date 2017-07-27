import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-attribute-directive-example',
  template: `
  <h2>Attribute Directives Examples</h2>

  <h3>Concepts</h3>

  <h4>ElementRef</h4>
  <p>ElementRef injects into the directive's constructor so the code can access the DOM element.</p>
  <p>Angular creates a new instance of the directive's controller class for each matching element,
   injecting an Angular ElementRef into the constructor.</p>
  <p>ElementRef is a service that grants direct access to the DOM element through its nativeElement property.</p>

  <h4>Respond to user-initiated events: HostListener</h4>
  <p>The @HostListener decorator lets you subscribe to events of the DOM element
   that hosts an attribute directive, the <p> in this case.</p>

  <pre class="sp-code">
    @HostListener('mouseenter') onMouseEnter()
      this.highlight('yellow');

    @HostListener('mouseleave') onMouseLeave()
      this.highlight(null);

    private highlight(color: string)
      this.el.nativeElement.style.backgroundColor = color;
  </pre>

  <pre class="sp-code">
  constructor(el: ElementRef)
       el.nativeElement.style.backgroundColor = 'yellow';
  </pre>
  <hr>
  <h3>Example</h3>
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

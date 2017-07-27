import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-structural-directives-example',
  template: `
  <h2>Structural Directives Example</h2>
  <p>Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure,
   typically by adding, removing, or manipulating elements.</p>

  <h3>Concepts</h3>
  <p>You can only apply one structural directive to a host element.</p>

  <h4>Template input variable</h4>
  <p>You declare a template input variable using the let keyword (let hero).
   The variable's scope is limited to a single instance of the repeated template.
    You can use the same variable name again in the definition of other structural directives.</p>

  <h4>ng-template</h4>
  <p>The <strong>&lt;ng-template&gt;</strong> is an Angular element for rendering HTML. It is never displayed directly.
   In fact, before rendering the view, Angular replaces the <strong>&lt;ng-template&gt;</strong> and its contents with a comment.</p>
  <p>If there is no structural directive and you merely wrap some elements in a <strong>&lt;ng-template&gt;</strong>,
   those elements disappear.</p>

  <h4>ng-container</h4>
  <p>The Angular <strong>&lt;ng-container&gt;</strong> is a grouping element that doesn't
   interfere with styles or layout because Angular doesn't put it in the DOM.</p>

  <pre class="sp-code">
  &lt;p&gt;
    I turned the corner
    &lt;ng-container *ngIf="hero"&gt;
      and saw John. I waved
    &lt;/ng-container&gt;
    and continued on my way.
  &lt;/p&gt;
  </pre>

  <h4>How it Works: TemplateRef, ViewContainerRef</h4>
  <p>A structural directive creates an embedded view from the Angular-generated
   <strong>&lt;ng-template&gt;</strong> and inserts that view in a view container adjacent to the directive's original host element.</p>
  <p>You'll acquire the <strong>&lt;ng-template&gt;</strong> contents with a
   <strong>TemplateRef</strong> and access the view container through a <strong>ViewContainerRef</strong>.</p>

  <pre class="sp-code">
  constructor(
    private templateRef: TemplateRef&lt;any&gt;,
    private viewContainer: ViewContainerRef)
  </pre>

  <hr>

  <h3>Example</h3>
  <button class="btn btn-default" (click)="isHiddenElement = !isHiddenElement">Toggle Visibility</button>
  <p *spUnless="isHiddenElement">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
   Ducimus ad quibusdam eaque veniam at consequuntur odit doloremque saepe veritatis blanditiis!</p>
  `
})

export class StructuralDirectivesExample implements OnInit {
  isHiddenElement = true;

  constructor() { }

  ngOnInit() { }
}

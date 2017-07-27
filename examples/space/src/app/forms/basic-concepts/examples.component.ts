import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-basic-form-examples',
  template: `
  <h1>Basic Concepts</h1>
  <ol>
  <li><strong>Use template variables to refer to elements</strong> — The newHero template variable refers to the &lt;input&gt; element. You can reference newHero from any sibling or child of the &lt;input&gt; element.</li>
  <li><strong>Pass values, not elements</strong> — Instead of passing the newHero into the component's addHero method, get the input box value and pass that to addHero.</li>
  <li><strong>Keep template statements simple</strong> — The (blur) event is bound to two JavaScript statements. The first statement calls addHero. The second statement, newHero.value='', clears the input box after a new hero is added to the list.</li>
  </ol>

  <hr>

  <sp-basic-example1></sp-basic-example1>
  <sp-basic-example2></sp-basic-example2>
  <sp-basic-example3></sp-basic-example3>
  <sp-basic-example4></sp-basic-example4>
  <sp-basic-example5></sp-basic-example5>
  `
})

export class ExamplesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

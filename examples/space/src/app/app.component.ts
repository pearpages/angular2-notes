import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>

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
export class AppComponent {
  title = 'app works!';

  handleOnClick(character: string) {
    alert(character);
  }
}

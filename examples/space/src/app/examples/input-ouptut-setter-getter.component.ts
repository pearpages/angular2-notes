import { Component } from '@angular/core';

@Component({
  selector: 'sp-example-2',
  template: `
  <h4>Input Output Setter Getter Example</h4>
  <sp-heroes [heroes]="['spiderman','wonderwoman','batman']" [villains]="['pere','pablo']" (onClick)="onClick($event)">
  `
})

export class InputOutputSetterGetterComponent {
  onClick(element: string) {
    alert(element);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'sp-communication-through-setter',
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

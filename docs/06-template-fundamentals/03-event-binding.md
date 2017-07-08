# Event Binding

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
    <button (click)="handleClick($event)"></button>
    <input 
      type="text"
      [value]="name"
      (input)="handleInput($event)"
      (blur)="handleBlur($event)"
    >
    {{ name }}
  `
})

export class MyCompComponent {
  name: 'Pere';

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleBlur(event: any) {
    console.log(event); // we get the entire input
    this.name = event.target.value;
  }

  handleClick() {
    this.name = 'Pere';
  }
}
```
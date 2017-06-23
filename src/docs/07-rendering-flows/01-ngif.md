# ngIf

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <input type="text" [value]="name" (input)="handleChange($event.target.value)">
  <div *ngIf="name.length > 2">
    Searching for... {{ name }}
  </div>
  `
})

export class MyCompComponent {
  name = '';

  handleChange(value: string) {
    this.name = value;
  }
}
```

```html
<template [ngIf]="name.length > 2">
  <div>
    Searching for... {{ name }}
  </div>
</template>
```
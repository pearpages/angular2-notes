# Two-Way Data Binding

```typescript
import { FormsModule } from '@angular/forms';
```

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <input
    type="text"
    [ngModel]="name"
    (ngModelChange)="handleChange($event)"
  >

  <!-- or -->

  <input
    type="text"
    [(ngModel)]="name"
  >

  {{ name }}
  `
})

export class MyCompComponent {
  name = 'Pere';

  handleChange(value: string) {
    this.name = value;
  }
}
```
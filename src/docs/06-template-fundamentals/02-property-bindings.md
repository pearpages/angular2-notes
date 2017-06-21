# Property Bindings

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <h1 [innerHTML]="title"></h1>
  <h1>{{title}}</h1>

  <img [src]="logo">
  <input type="text" [value]="name"> <!-- one way data flow -->
  `
})

export class MyCompComponent {
  logo: 'img/logo.svg';
  name: 'Pere';
}
```
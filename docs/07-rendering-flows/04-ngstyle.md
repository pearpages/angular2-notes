# ngStyle

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <ul>
    <li *ngFor="let passenger of passengers">
      <span [style.backgroundColor]="(passenger.checkedIn) ? '#2ecc71' : '#c0392b'"></span>
    </li>
  </ul>

  <ul>
    <li *ngFor="let passenger of passengers">
      <span [ngStyle]="{
        backgroundColor: (passenger.checkedIn) ? '#2ecc71' : '#c0392b'
      }"></span>
    </li>
  </ul>
  `
})

export class MyCompComponent {}
```
# ngClass

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <ul>
    <li *ngFor="let passenger of passengers">
      <span class="status" [class.checked-in]="passenger.checkedIn"></span>
    </li>
  </ul>

  <ul>
    <li *ngFor="let passenger of passengers">
      <span class="status" [ngClass]="{ 
        'checked-in': passenger.checkedIn,
        'checked-out': "passenger.checkedIn
       }"></span>
    </li>
  </ul>
  `
})

// ...
```
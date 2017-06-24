# ngFor

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <ul>
    <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
      <li>
        {{ i }}: {{ passenger.fullname }}
      </li>
    </template>
  </ul>
  <ul>
    <li *ngFor="let passenger of passengers; let i = index;">
      {{ i }}: {{ passenger.fullname }}
    </li>
  </ul>
  `
})

export class MyCompComponent {
  passengers: Array<Passenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true
    }
  ];
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}
```
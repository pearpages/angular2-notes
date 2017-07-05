# @Input

```html
<passenger-count [items]="passengers"></passenger-count>
```

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'passenger-count',
  template: `
  <div>
    Total passengers: {{ items.length }} <br/>
    Total checkedIn passengers: {{ checkedInCount() }}
  </div>
  `
})

export class PassengerCountComponent {
  @Input() items: Passenger[];

  checkedInCount(): number {
    if (!this.items) return;
    return this.items.filter( (passenger: Passenger) => passenger.checkedIn).length;
  }
}
```
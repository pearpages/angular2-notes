# Dynamic Input with *ngFor

```html
<passenger-detail *ngFor="let passenger of passengers" [detail]="passenger"></passenger-detail>
```

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'passenger-detail',
  template: `
  <div>
    {{ detail | json }}
  </div>
  `
})

export class PassengerDetailComponent {
  @Input() detail: Passenger;
}
```
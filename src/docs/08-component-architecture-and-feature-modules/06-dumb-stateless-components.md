# Dumb Stateless Components

Follow the examp in input.md.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'passenger-count',
  template: `
  <div>
    Count Component
  </div>
  `
})

export class PassengerCountComponent {
  constructor() {}
}
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'passenger-detail',
  template: `
  <div>
    Passenger detail
  </div>
  `
})

export class PassengerDetailComponent {}
```
# ngOnInit

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passenger-dashboard',
  template: ``
})

export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor() { }

  ngOnInit() { 
    this.passengers = // ...
  }
}
```
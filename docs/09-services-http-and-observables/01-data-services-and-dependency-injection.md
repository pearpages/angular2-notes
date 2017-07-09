# Data Services and Dependency Injection

```typescript
// passenger.service.ts
export class PassengerDashboardService {
  constructor() {}

  getPassengers(): Passenger[] {
    // ...
  }
}
```

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerDashboardService } from './passenger.service';
import { PassengerListCompoonent } from './passenger-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PassengerListComponent
  ],
  providers: [
    PassengerDashboardService
  ],
})
export class PassengerModule { }
```

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passenger-list',
  template: `
  <ul>
    <li *ngFor="let passenger of passengers">{{ passenger.fullname }}</li>
  </ul>
  `
})

export class PassengerListComponent implements OnInit {
  passengers: Passenger[];

  constructor(private passengerDashboardService: PassengerDashboardService) { }

  ngOnInit() {
    this.passengers = this.passengerDashboardService.getPassengers();
   }
}
```
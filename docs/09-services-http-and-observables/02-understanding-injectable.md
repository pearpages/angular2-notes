# Understanding @Injectable

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    // ...
  ],
  declarations: [
    // ...
  ],
  providers: [
    PassengerDashboardService
  ],
})
export class PassengerModule { }
```

```typescript
// passenger.service.ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Passenger[] {
    // ...
  }
}
```
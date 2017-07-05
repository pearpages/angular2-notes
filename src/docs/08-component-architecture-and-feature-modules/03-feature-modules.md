# Feature Modules

passenger.module.ts

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    // angular modules
    CommonModule
    // custom modules
      // ...
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class PassengerDashboardModule { }

```
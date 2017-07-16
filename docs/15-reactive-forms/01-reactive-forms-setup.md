# Reactive Forms Setup

It's only about create a component, import it to its module and then import this module in the main module.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'no-stock-inventory',
  template: `
  <div class="no-stock-inventory">
    HELLO WORLD
  </div>
  `,
  styles: [`
  `]
})

export class StockInventoryComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
```

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory.component';

@NgModule({
  declarations: [
    StockInventoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [StockInventoryComponent]
})
export class StockInventoryModule { }

```
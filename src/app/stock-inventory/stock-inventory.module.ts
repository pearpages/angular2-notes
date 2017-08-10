import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory.component';
import { StockSelectorComponent } from './components/stock-selector.component';
import { StockProductsComponent } from './components/stock-products.component';
import { StockBranchComponent } from './components/stock-branch.component';
import { StockCounterComponent } from './components/stock-counter.component';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockCounterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [StockInventoryComponent]
})
export class StockInventoryModule { }

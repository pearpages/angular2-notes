# Add items to FormArray

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product, Stock } from './../models/product.interface';

@Component({
  selector: 'no-stock-selector',
  template: `
  <div class="no-stock-selector" [formGroup]="parent">
    <div formGroupName="selector">
      <select formControlName="product_id">
        <option value="">Select stock</option>
        <option *ngFor="let product of products"
          [value]="product.id"
        >{{product.name}}
        </option>
      </select>
      <input type="number"
        step="10"
        min="10"
        max="1000"
        formControlName="quantity"
      >
      <button
        type="button"
        (click)="onAdd()"
        >Add stock</button>
    </div>
  </div>
  `,
  styles: [`
  `]
})

export class StockSelectorComponent {
  @Input() parent: FormGroup;
  @Input() products: Product[];
  @Output() added: EventEmitter<Stock> = new EventEmitter();

  onAdd() {
    this.added.emit(this.parent.get('selector').value)
  }
}

```

```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

import { Product, Stock } from './../models/product.interface';

@Component({
  selector: 'no-stock-inventory',
  template: `
  <div class="no-stock-inventory">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <no-stock-branch 
        [parent]="form">
      </no-stock-branch>

      <no-stock-selector 
        [parent]="form"
        [products]="products"
        (added)="addStock($event)"
        >
      </no-stock-selector>

      <no-stock-products 
        [parent]="form">
      </no-stock-products>

      <div class="no-stock-inventory__buttons">
        <button 
          type="submit"
          [disabled]="form.invalid"
        >Order stock</button>
      </div>

      <pre>{{ form.value | json }}</pre>

    </form>
  </div>
  `,
  styles: [`
  `]
})

export class StockInventoryComponent {
  products: Product[] = [
    {id: 1, price: 2800, name: 'MacBook Pro'},
    {id: 2, price: 50, name: 'USB-C Adaptor'},
    {id: 3, price: 400, name: 'iPod'},
    {id: 4, price: 900, name: 'iPhone'},
    {id: 5, price: 600, name: 'Apple Watch'},
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('B182'), // <-- default value
      code: new FormControl('1234')
    }),
    selector: this.createStock(),
    stock: new FormArray([
      this.createStock({product_id: '1', quantity: 10}),
      this.createStock({product_id: '3', quantity: 50})
    ])
  });

  createStock(stock: Stock = {product_id: '', quantity: 10}): FormGroup {
    return new FormGroup({
      product_id: new FormControl(stock.product_id),
      quantity: new FormControl(stock.quantity)
    })
  }

  addStock(stock: Stock) {
    (this.form.get('stock') as FormArray).push(this.createStock(stock)); // <--
  }

  onSubmit() {
    console.log('submit', this.form.value);
  }
}
```

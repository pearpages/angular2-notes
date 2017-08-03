# Removing items from the FormArray

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { Stock } from '../models/product.interface';

@Component({
  selector: 'no-stock-products',
  template: `
  <div class="no-stock-products" [formGroup]="parent">
    <div formArrayName="stock">
      <div *ngFor="let item of stocks; let i = index;">

        <div class="stock-product__content" [formGroupName]="i">
          <div class="stock-product__name">{{item.value.product_id}}</div>
          <input type="number" step="10" min="10" max="1000" formControlName="quantity">
          <button
            type="button"
            (click)="onRemoveItem(item, i)"
          >Remove</button>
        </div>

      </div>
    </div>
  </div>
  `,
  styles: [`
  `]
})

export class StockProductsComponent {
  @Input() parent: FormGroup;
  @Output() removed: EventEmitter<{group: FormGroup, index: number}> = new EventEmitter();

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  onRemoveItem(group: FormGroup, index: number) {
    this.removed.emit({group, index})
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
        [parent]="form"
        (removed)="removeStock($event)"
      >
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
    (this.form.get('stock') as FormArray).push(this.createStock(stock));
  }

  removeStock({group, index}: {group: FormGroup, index: number}) {
    (this.form.get('stock') as FormArray).removeAt(index); // <--
  }

  onSubmit() {
    console.log('submit', this.form.value);
  }
}
```

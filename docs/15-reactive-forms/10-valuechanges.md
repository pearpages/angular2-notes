# Subscribing to the valueChanges Observable

```typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

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
        [map]="productMap"
      >
      </no-stock-products>

      <div>Total: {{total | currency: 'USD': 'symbol'}}</div>

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

export class StockInventoryComponent implements OnInit{
  total: number;
  products: Product[] = [
    {id: 1, price: 2800, name: 'MacBook Pro'},
    {id: 2, price: 50, name: 'USB-C Adaptor'},
    {id: 3, price: 400, name: 'iPod'},
    {id: 4, price: 900, name: 'iPhone'},
    {id: 5, price: 600, name: 'Apple Watch'},
  ];
  productMap: Map<string, Product> = new Map([['1',{id: 1, price: 2800, name: 'MacBook Pro'}],['2',{id: 2, price: 50, name: 'USB-C Adaptor'}],['3',{id: 3, price: 400, name: 'iPod'}],['4',{id: 4, price: 900, name: 'iPhone'}],['5',{id: 5, price: 600, name: 'Apple Watch'}]]);

  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    store: this.formBuilder.group({
      branch: 'B182', // <-- default value
      code: '1234'
    }),
    selector: this.createStock(),
    stock: this.formBuilder.array([
      this.createStock({product_id: '1', quantity: 10}),
      this.createStock({product_id: '3', quantity: 50})
    ])
  });

  ngOnInit() {
    this.calculateTotal(this.form.get('stock').value);
    this.form.get('stock').valueChanges.subscribe(value => this.calculateTotal(value));
  }

  calculateTotal(value: Stock[]) {
    this.total = value.reduce((prev, next) => prev + (next.quantity * this.productMap.get(next.product_id).price), 0);
  }

  createStock(stock: Stock = {product_id: '', quantity: 10}): FormGroup {
    return this.formBuilder.group({
      product_id: stock.product_id,
      quantity: stock.quantity
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

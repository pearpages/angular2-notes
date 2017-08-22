import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Product, Stock } from './../models/product.interface';

const products = [
  {id: 1, price: 2800, name: 'MacBook Pro'},
  {id: 2, price: 50, name: 'USB-C Adaptor'},
  {id: 3, price: 400, name: 'iPod'},
  {id: 4, price: 900, name: 'iPhone'},
  {id: 5, price: 600, name: 'Apple Watch'},
];

const mappedProducts = new Map([['1',{id: 1, price: 2800, name: 'MacBook Pro'}],['2',{id: 2, price: 50, name: 'USB-C Adaptor'}],['3',{id: 3, price: 400, name: 'iPod'}],['4',{id: 4, price: 900, name: 'iPhone'}],['5',{id: 5, price: 600, name: 'Apple Watch'}]]);

@Component({
  selector: 'no-stock-inventory',
  template: `
  <div class="no-stock-inventory">
    <h2>Form</h2>
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

      <div class="no-stock-inventory__total">
        <div class="no-stock-inventory__label">Total: </div>
        <div class="no-stock-inventory__value">{{total | currency: 'USD': 'symbol'}}</div>
      </div>

      <div class="no-stock-inventory__buttons">
        <button
          type="submit"
          [disabled]="form.invalid"
        >Order stock</button>
      </div>

      <hr>

      <div>
        <h4>Form DataModel</h4>
        <pre>{{ form.value | json }}</pre>
      </div>

    </form>
  </div>
  `,
  styles: [`
  .no-stock-inventory {
    max-width: 600px;
    padding: 40px;
    border: 1px dotted #ccc;
    background-color: #ddd;
    border-radius: 10px;
    margin: auto;
  }
  .no-stock-inventory__total {
    display: flex;
  }
  .no-stock-inventory__label, .no-stock-inventory__value {
    width: 25%;
  }
  `]
})

export class StockInventoryComponent implements OnInit{
  total: number;
  products: Product[] = products;
  productMap: Map<string, Product> = mappedProducts;
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

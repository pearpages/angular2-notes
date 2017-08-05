# Http service and joining Observables

```typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin'; // <--

import { Product, Stock } from './../models/product.interface';
import { StockInventoryService } from 'stock-inventory.service';


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

export class StockInventoryComponent implements OnInit {
  products: Product[];
  productMap: Map<string, Product>;
  form = this.formBuilder.group({
    store: this.formBuilder.group({
      branch: '',
      code: ''
    }),
    seletor: this.createStock(),
    stock: this.formBuilder.array([])
  });

  private constructor(
    private formBuilder: FormBuilder,
    private stockInventoryService: StockInventoryService) {}

  ngOnInit() {
    const stocks: Stock[] = this.stockInventoryService.getCart();
    const products: Product[] = this.stockInventoryService.getProducts();

    Observable
      .forkJoin(stocks, products) // <-- forkJoin
      .subscribe(([stocks, products]: [Stock[], Product[]]) => {
        const myMap = products
          .map<[number, Product]>(product => [product.id, product]);

        this.productMap = new Map<number, Product>(myMap); // <-- Map
        this.products = products;
        
        stocks.forEach(stock => this.addStock(stock));
      });
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

## Map Example

```typescript
  productMap: Map<string, Product> = new Map([
    ['1',{id: 1, price: 2800, name: 'MacBook Pro'}],
    ['2',{id: 2, price: 50, name: 'USB-C Adaptor'}],
    ['3',{id: 3, price: 400, name: 'iPod'}],
    ['4',{id: 4, price: 900, name: 'iPhone'}],
    ['5',{id: 5, price: 600, name: 'Apple Watch'}]
    ]);

  const product = this.productMap.get('3');
```

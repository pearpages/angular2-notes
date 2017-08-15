import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { Stock, Product } from '../models/product.interface';

@Component({
  selector: 'no-stock-products',
  template: `
  <div class="no-stock-products" [formGroup]="parent">
    <div formArrayName="stock">
      <div *ngFor="let item of stocks; let i = index;">

        <div class="stock-product__content" [formGroupName]="i">
          <div class="stock-product__name">{{getProduct(item.value.product_id).name}}</div>
          <div class="stock-product__price">{{getProduct(item.value.product_id).price | currency: 'USD': 'symbol'}}</div>
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
  .stock-product__content {
    display: flex;
  }
  .stock-product__name, .stock-product__price {
    display: inline-flex;
    width: 25%;
  }
  `]
})

export class StockProductsComponent {
  @Input() parent: FormGroup;
  @Input() map: Map<string, Product>;
  @Output() removed: EventEmitter<{group: FormGroup, index: number}> = new EventEmitter();

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  getProduct(id: string): Product {
    return this.map.get(id);
  }

  onRemoveItem(group: FormGroup, index: number) {
    this.removed.emit({group, index})
  }

}

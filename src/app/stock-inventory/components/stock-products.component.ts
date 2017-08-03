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

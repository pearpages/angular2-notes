import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'no-stock-inventory',
  template: `
  <div class="no-stock-inventory">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <no-stock-branch [parent]="form"></no-stock-branch>
      <no-stock-selector [parent]="form"></no-stock-selector>
      <no-stock-products [parent]="form"></no-stock-products>

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
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('B182'), // <-- default value
      code: new FormControl('1234')
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  });

  onSubmit() {
    console.log('submit', this.form.value);
  }
}
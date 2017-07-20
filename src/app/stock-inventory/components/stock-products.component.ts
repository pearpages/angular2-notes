import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'no-stock-products',
  template: `
  <div class="no-stock-products" [formGroup]="parent">
  </div>
  `,
  styles: [`
  `]
})

export class StockProductsComponent {
  @Input() parent: FormGroup;
}

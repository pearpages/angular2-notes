import { Stock } from './../models/product.interface';
import { AbstractControl } from '@angular/forms';

export class StockValidators {

  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidbranch: true};
  }

  static checkStockExists(control: AbstractControl) {
    const stockItem = control.get('stock');
    const selector = control.get('selector');

    if (!(stockItem && selector)) return null;

    const exists = stockItem.value.some((stock: Stock) => stock.product_id === selector.value.product_id);

    return exists ? { stockexists: true} : null;
  }
}

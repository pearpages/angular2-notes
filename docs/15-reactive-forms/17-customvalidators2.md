# Form Groups Custom Validators

```typescript
  form = this.formBuilder.group({
    store: this.formBuilder.group({
      branch: ['B182', [Validators.required, StockValidators.checkBranch]],
      code: ['1234', [Validators.required, Validators.minLength(4)]]
    }),
    selector: this.createStock(),
    stock: this.formBuilder.array([
      this.createStock({product_id: '1', quantity: 10}),
      this.createStock({product_id: '3', quantity: 50})
    ])
  }, {validator: StockValidators.checkStockExists});
```

```typescript

  static checkStockExists(control: AbstractControl) {
    const stockItem = control.get('stock');
    const selector = control.get('selector');

    if (!(stockItem && selector)) return null;

    const exists = stockItem.value.some((stock: Stock) => stock.product_id === selector.value.product_id);

    return exists ? { stockexists: true} : null;
  }
```

```typescript
  get hasStock() {
    return this.parent.hasError('stockexists')
    && this.parent.get('selector.product_id').dirty;
  }

  isSelected() {
    return (!this.parent.get('selector.product_id').value)
  }
```

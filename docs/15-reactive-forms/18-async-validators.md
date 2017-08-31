# Async Custom Validators

```typescript
checkBranchId(id: string): Observable<boolean> {
  let search  = new URLSearchParams();
  search.set('id', id);
  return this.http
    .get('/api/branches', {search})
    .map(response => response.json())
    .map(response => !!response.length)
    .catch(error => Observable.throw(error.json()));
}
```

```typescript
validateBranch(control: AbstractControl) {
  return this.stockService
    .checkBranchId(control.value)
    .map((response: boolean) => response ? null : {unknownbranch: true});
}
```

```typescript
  form = this.formBuilder.group({
    store: this.formBuilder.group({
      branch: ['B182', [Validators.required, StockValidators.checkBranch], [this.validateBranch.bind(this)]],
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
get isUnknown(): boolean {
  return (
    this.parent.get('store.branch').hasError('unknownbranch') &&
    this.parent.get('store.branch').dirty
  );
}
```

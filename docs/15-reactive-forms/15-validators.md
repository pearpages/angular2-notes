# Validators object for FormControls

```typescript
import { Validators } from '@angular/forms';
```

```typescript
// component container
  form = this.formBuilder.group({
    store: this.formBuilder.group({
      branch: ['B182', Validators.required], // <--
      code: ['1234', [Validators.required, Validators.minLength(4)]] // <--
    }),
    selector: this.createStock(),
    stock: this.formBuilder.array([
      this.createStock({product_id: '1', quantity: 10}),
      this.createStock({product_id: '3', quantity: 50})
    ])
  });
```

```html
<span *ngIf="isRequired('branch')">
  Branch ID is rquired
</span>
```

```typescript
// component dumb
export class StockBranchComponent {
  @Input() parent: FormGroup;

  isRequired(name: string): boolean {
    return (this.parent.get(`store.${name}`).hasError('required') && this.parent.get(`store.${name}`).touched);
  }
}
```

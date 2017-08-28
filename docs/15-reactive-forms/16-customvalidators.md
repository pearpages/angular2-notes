# FormControl Custom Validators

Custom validators can be just a function, there's no need to create a class, but it's more handy.

There's no need to include them in .module's.

```typescript
import { AbstractControl } from '@angular/forms';

export class StockValidators {

  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidbranch: true}; // <-- the name of the error
  }
}
```

```typescript
  isNotValidBranch(name: string) {
    return (this.parent.get(`store.${name}`).hasError('invalidbranch') && this.parent.get(`store.${name}`).dirty);
  }
```

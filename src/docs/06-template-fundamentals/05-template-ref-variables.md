# Template #ref variables

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <button (click)"handleClick(username.value)>Get Value</button>
  <input type="text" #username >
  `
})

export class MyCompComponent {
  handleClick(value: string) {
    console.log(value);
  }
}
```
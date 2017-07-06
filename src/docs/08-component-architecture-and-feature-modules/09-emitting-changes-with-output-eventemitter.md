# Emitting changes with @Output and EventEmitter

```html
<passenger-detail [detail]="passenger" (remove)="handleRemove($event)></passenger-detail>
```

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <input
    type="text"
    [value]="detail.fullname"
    (input)="onNameChange(name.value)"
    #name
  >

  <button (click)="onRemove()>Remove</button>
  `
})

export class MycompComponent {
  @Input() detail: Passenger;
  @Output() remove: EventEmitter<Passenger> = new EventEmitter();

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
```
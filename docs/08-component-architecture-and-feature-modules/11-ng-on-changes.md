# ngOnChanges

OnChanges goes before OnInit and therefor it let's us manipulate the data before rendering.

In the following example we break the reference with the parent, and only when clicking done this is sent to the parent.

```typescript
import { Component, OnChanges, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <input type="text" [value]="detail.fullname" (input)="handleChanges(fullname.value)" #fullname>
  <button (click)="done(detail)">Done</button>
  `
})

export class MyCompComponent implements OnChanges {
  @Input() detail: Passenger;
  @Output() done: EventEmitter<passenger> = new EventEmitter();

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = {...changes.detail.currentValue};
    }
  }

  handlChanges(value: string) {
    this.detail.fullname = value;
  }

  done() {
    this.done.emit(this.detail);
  }
}
```
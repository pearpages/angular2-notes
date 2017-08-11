# Adding keyboard events to our control

```typescript
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'no-stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
  template: `
    <div class="no-stock-counter" [class.no-stoc-counter--focused]="focus">
      <div>
        <div
          tabindex="0"
          (keydown)="onKeyDown($event)"
          (blur)="onBlur($event)"
          (focus)="onFocus($event)">
          <p>{{ value }}</p>
          <div>
            <button [disabled]="value == max" type="button" (click)="increment()">+</button>
            <button [disabled]="value == min"type="button" (click)="decrement()">-</button>
          </div>
        </div>
      </div>
    </div>`
})

export class StockCounterComponent implements ControlValueAccessor {
  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;
  focus: boolean;

  private onTouch: Function;
  private onModelChange: Function;

  writeValue(value) {
    this.value = value || 0;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  increment() {
    if (this.value < this.max) {
      this.value += this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  decrement() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  onKeyDown(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    }

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }
}

```
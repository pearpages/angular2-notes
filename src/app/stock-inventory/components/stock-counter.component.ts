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
    <div
      class="no-stock-counter"
      [class.no-stoc-counter--focused]="focus"
      tabindex="0"
      (keydown)="onKeyDown($event)"
      (blur)="onBlur($event)"
      (focus)="onFocus($event)">
      <div class="no-stock-counter__value">{{ value }}</div>
      <div class="no-stock-counter__buttons">
        <button [disabled]="value == max" type="button" (click)="increment()">+</button>
        <button [disabled]="value == min"type="button" (click)="decrement()">-</button>
      </div>
    </div>`,
  styles: [`
  .no-stock-counter {
    border: 1px solid grey;
    display: flex;
    padding-right: 10px;
    max-width: 100px;
    justify-content: center;
  }
  .no-stock-counter__value {
    margin-right: 10px;
  }
  .no-stock-counter__value, .no-stock-counter__buttons {
    display: inline-flex;
  }
  `]
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

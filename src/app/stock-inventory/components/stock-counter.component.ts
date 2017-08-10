import { Component, Input } from '@angular/core';

@Component({
  selector: 'no-stock-counter',
  template: `
  <div class="no-stock-counter">
    <div>
      <div>
        <div>{{ value }}</div>
        <div>
          <button [disabled]="value == max" type="button" (click)="increment()">+</button>
          <button [disabled]="value == min"type="button" (click)="decrement()">-</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class StockCounterComponent {
  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;

  increment() {
    if (this.value < this.max) {
      this.value += this.step;
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value -= this.step;
    }
  }
}

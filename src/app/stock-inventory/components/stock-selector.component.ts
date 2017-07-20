import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'no-stock-selector',
  template: `
  <div class="no-stock-selector" [formGroup]="parent">
  </div>
  `,
  styles: [`
  `]
})

export class StockSelectorComponent {
  @Input() parent: FormGroup;
}

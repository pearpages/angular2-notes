import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'no-stock-branch',
  template: `
  <div [formGroup]="parent">
    <div formGroupName="store">
      <input
        type="text"
        placeholder="Branch ID"
        formControlName="branch"
      >
      <input
        type="text"
        placeholder="Manager Code"
        formControlName="code"
      >
    </div>
  </div>
  `,
  styles: [`
  `]
})

export class StockBranchComponent {
  @Input() parent: FormGroup;
}

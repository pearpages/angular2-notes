import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'no-stock-branch',
  template: `
  <div [formGroup]="parent" class="no-stock-branch">
    <h4>Stock Branch</h4>
    <div formGroupName="store">
      <label for="branch">Branch ID</label>
      <input
        type="text"
        id="branch"
        placeholder="Branch ID"
        formControlName="branch"
      >
      <label for="code">Manager Code</label>
      <input
        type="text"
        id="code"
        placeholder="Manager Code"
        formControlName="code"
      >
    </div>
  </div>
  `,
  styles: [`
  .no-stock-branch {
    margin-bottom: 40px;
  }
  `]
})

export class StockBranchComponent {
  @Input() parent: FormGroup;
}

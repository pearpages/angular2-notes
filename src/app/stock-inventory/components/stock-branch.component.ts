import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'no-stock-branch',
  template: `
  <div [formGroup]="parent" class="no-stock-branch">
    <h4>Stock Branch</h4>

    <div formGroupName="store">
      <label class="no-stock-branch__label" for="branch">Branch ID</label>
      <input
        type="text"
        id="branch"
        placeholder="Branch ID"
        formControlName="branch"
      >
      <span *ngIf="isRequired('branch')">
        Branch ID is rquired
      </span>
      <span *ngIf="isNotValidBranch('branch')">
        must start with 1 letter and have 3 numbers
      </span>

      <br/>

      <label class="no-stock-branch__label" for="code">Manager Code</label>
      <input
        type="text"
        id="code"
        placeholder="Manager Code"
        formControlName="code"
      >
      <span *ngIf="isRequired('code')">
        Manager ID is required
      </span>
      <span *ngIf="hasMinLength('code')">
        Length 4
      </span>
    </div>

  </div>
  `,
  styles: [`
  .no-stock-branch {
    margin-bottom: 40px;
  }
  .no-stock-branch__label {
    width: 100px;
    display: inline-block;
  }
  `]
})

export class StockBranchComponent {
  @Input() parent: FormGroup;

  isRequired(name: string): boolean {
    return (this.parent.get(`store.${name}`).hasError('required') && this.parent.get(`store.${name}`).touched);
  }

  hasMinLength(name: string): boolean {
    return (this.parent.get(`store.${name}`).hasError('minlength') && this.parent.get(`store.${name}`).touched);
  }

  isNotValidBranch(name: string) {
    return (this.parent.get(`store.${name}`).hasError('invalidbranch') && this.parent.get(`store.${name}`).dirty);
  }
}

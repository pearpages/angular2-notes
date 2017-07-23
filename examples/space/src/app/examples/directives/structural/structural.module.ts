import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UnlessDirective } from './unless.directive';
import { StructuralDirectivesExample } from './structural-directives-example.component';

@NgModule({
  imports: [CommonModule],
  exports: [StructuralDirectivesExample],
  declarations: [
    StructuralDirectivesExample,
    UnlessDirective
  ]
})
export class StructuralDirectivesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariableNamesComponent } from './variable-names.component';
import { StructureSassComponent } from './structure-sass.component';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [
    VariableNamesComponent,
    StructureSassComponent
  ],
  providers: [],
})
export class BeginnerModule { }

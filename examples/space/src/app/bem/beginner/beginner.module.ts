import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariableNamesComponent } from './variable-names.component';
import { NestedSelectorsComponent } from './nested-selectors.component';
import { StructureSassComponent } from './structure-sass.component';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [
    VariableNamesComponent,
    StructureSassComponent,
    NestedSelectorsComponent
  ],
  providers: [],
})
export class BeginnerModule { }

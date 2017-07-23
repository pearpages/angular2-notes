import { NgModule } from '@angular/core';

import { StructuralDirectivesModule } from './structural';
import { AttributeDirectivesModule } from './attribute';

@NgModule({
  imports: [AttributeDirectivesModule,StructuralDirectivesModule],
  exports: [AttributeDirectivesModule,StructuralDirectivesModule]
})
export class DirectivesModule { }

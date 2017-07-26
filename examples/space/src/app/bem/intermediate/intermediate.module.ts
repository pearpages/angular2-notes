import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { intermediateRoutedComponents, IntermediateRoutingModule } from './intermediate.routing';

@NgModule({
  imports: [CommonModule,IntermediateRoutingModule],
  exports: [],
  declarations: [intermediateRoutedComponents],
  providers: [],
})
export class IntermediateModule { }

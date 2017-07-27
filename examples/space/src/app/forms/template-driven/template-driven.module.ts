import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { templateDrivenRoutedComponents, TemplateDrivenRoutingModule } from './template-driven.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenRoutingModule
  ],
  exports: [],
  declarations: [templateDrivenRoutedComponents],
  providers: [],
})
export class TemplateDrivenModule { }

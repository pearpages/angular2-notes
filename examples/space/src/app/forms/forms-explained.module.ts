import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormExplainedRoutingModule, formsRoutedComponents } from './forms-explained.routing';
import { BasicModule } from './basic-concepts';
import { TemplateDrivenModule } from './template-driven';

@NgModule({
  imports: [
    CommonModule,
    BasicModule,
    TemplateDrivenModule,
    FormExplainedRoutingModule
  ],
  exports: [],
  declarations: [formsRoutedComponents],
  providers: [],
})
export class FormsExplainedModule { }

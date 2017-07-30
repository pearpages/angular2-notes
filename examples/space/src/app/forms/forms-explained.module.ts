import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormExplainedRoutingModule, formsRoutedComponents } from './forms-explained.routing';
import { BasicModule } from './basic-concepts';
import { ReactiveModule } from './reactive';
import { TemplateDrivenModule } from './template-driven';

@NgModule({
  imports: [
    CommonModule,
    BasicModule,
    TemplateDrivenModule,
    ReactiveModule,
    FormExplainedRoutingModule
  ],
  exports: [],
  declarations: [formsRoutedComponents],
  providers: [],
})
export class FormsExplainedModule { }

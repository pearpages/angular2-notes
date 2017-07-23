import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '@space/shared';
import { CountdownViewChildParentComponent } from './accessing-child-through-view-child.component';
import { InputOutputSetterGetterComponent } from './input-ouptut-setter-getter.component';
import { ParentAccessingSonThroughTemplateVariableComponent } from './parent-accessing-son-through-template-variable.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CountdownViewChildParentComponent,
    InputOutputSetterGetterComponent,
    ParentAccessingSonThroughTemplateVariableComponent
  ],
  declarations: [
    CountdownViewChildParentComponent,
    InputOutputSetterGetterComponent,
    ParentAccessingSonThroughTemplateVariableComponent
  ],
  providers: [],
})
export class CommunicationThroughComponentsModule { }

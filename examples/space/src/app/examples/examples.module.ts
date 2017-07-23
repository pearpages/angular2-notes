import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '@space/shared';
import { InputOutputSetterGetterComponent } from './input-ouptut-setter-getter.component';
import { ParentAccessingSonThroughTemplateVariableComponent } from './parent-accessing-son-through-template-variable.component';
import { CountdownViewChildParentComponent } from './accessing-child-through-view-child.component';
import { MissionService, MissionControlComponent, AstronautComponent, CommunicationThroughtServiceComponent } from './communication-through-service';

const exportedComponents = [
  ParentAccessingSonThroughTemplateVariableComponent,
  InputOutputSetterGetterComponent,
  CountdownViewChildParentComponent,
  CommunicationThroughtServiceComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: exportedComponents,
  declarations: [...exportedComponents,MissionControlComponent,AstronautComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExamplesModule { }

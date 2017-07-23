import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationThroughComponentsModule } from './communication-though-components/communication-through-components.module';
import { HostExamplesModule } from './host-examples';
import { CommunicationThroughServiceModule } from './communication-through-service';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';

@NgModule({
  imports: [
    CommonModule,
    CommunicationThroughServiceModule,
    HostExamplesModule,
    CommunicationThroughComponentsModule,
    DynamicComponentsModule
  ],
  exports: [
    CommunicationThroughServiceModule,
    HostExamplesModule,
    CommunicationThroughComponentsModule,
    DynamicComponentsModule
  ]
})
export class ExamplesModule { }

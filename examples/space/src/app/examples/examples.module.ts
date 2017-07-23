import { CommunicationThroughComponentsModule } from './communication-though-components/communication-through-components.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostExamplesModule } from './host-examples';
import { CommunicationThroughServiceModule } from './communication-through-service';


@NgModule({
  imports: [
    CommonModule,
    CommunicationThroughServiceModule,
    HostExamplesModule,
    CommunicationThroughComponentsModule,
  ],
  exports: [
    CommunicationThroughServiceModule,
    HostExamplesModule,
    CommunicationThroughComponentsModule
  ]
})
export class ExamplesModule { }

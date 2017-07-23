import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationThroughComponentsModule } from './communication-though-components';
import { HostExamplesModule } from './host-examples';
import { CommunicationThroughServiceModule } from './communication-through-service';
import { DynamicComponentsModule } from './dynamic-components';
import { DirectivesModule } from './directives';

@NgModule({
  imports: [
    CommonModule,
    CommunicationThroughServiceModule,
    HostExamplesModule,
    CommunicationThroughComponentsModule,
    DynamicComponentsModule,
    DirectivesModule
  ],
  exports: [
    CommunicationThroughServiceModule,
    HostExamplesModule,
    CommunicationThroughComponentsModule,
    DynamicComponentsModule,
    DirectivesModule
  ]
})
export class ExamplesModule { }

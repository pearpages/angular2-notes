import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationThroughComponentsModule } from './communication-though-components';
import { HostExamplesModule } from './host-examples';
import { CommunicationThroughServiceModule } from './communication-through-service';
import { DynamicComponentsModule } from './dynamic-components';
import { DirectivesModule } from './directives';
import { PipesModule } from './pipes';

const exportedModules = [
  CommunicationThroughServiceModule,
  HostExamplesModule,
  CommunicationThroughComponentsModule,
  DynamicComponentsModule,
  DirectivesModule,
  PipesModule
];

@NgModule({
  imports: [
    CommonModule,
    ...exportedModules
  ],
  exports: [
    ...exportedModules
  ]
})
export class ExamplesModule { }

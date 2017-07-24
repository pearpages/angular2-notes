import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesComponent } from './examples.component';
import { HostExamplesModule } from './host-examples';
import { DynamicComponentsModule } from './dynamic-components';
import { DirectivesModule } from './directives';
import { PipesModule } from './pipes';
import { PipesExampleComponent } from './pipes/pipes-example.component';
import { CommunicationModule } from './communication';
import { ExamplesRoutingModule } from './examples.routing';
import { StructuralDirectivesExample } from './directives/structural/structural-directives-example.component';
import { AttributeExamplesComponent } from './directives/attribute/attribute-examples.component';
import { BannerExampleComponent } from './dynamic-components/banner-example.component';
import { HostExamplesComponent } from './host-examples/host-examples.component';

const modules = [
  HostExamplesModule,
  DynamicComponentsModule,
  DirectivesModule,
  PipesModule,
  ExamplesRoutingModule,
  CommunicationModule
];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ExamplesComponent,
    RouterModule
  ],
  declarations: [ExamplesComponent]
})
export class ExamplesModule { }

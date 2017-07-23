import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesComponent } from './examples.component';
import { CommunicationThroughComponentsModule } from './communication-though-components';
import { HostExamplesModule } from './host-examples';
import { CommunicationThroughServiceModule } from './communication-through-service';
import { DynamicComponentsModule } from './dynamic-components';
import { DirectivesModule } from './directives';
import { PipesModule } from './pipes';
import { PipesExampleComponent } from './pipes/pipes-example.component';
import { InputOutputSetterGetterComponent } from './communication-though-components/input-ouptut-setter-getter.component';
import { CommunicationThroughServiceComponent } from './communication-through-service/communication-through-service.component';
import { CountdownViewChildParentComponent } from './communication-though-components/accessing-child-through-view-child.component';
import { StructuralDirectivesExample } from './directives/structural/structural-directives-example.component';
import { AttributeExamplesComponent } from './directives/attribute/attribute-examples.component';
import { BannerExampleComponent } from './dynamic-components/banner-example.component';
import { HostExamplesComponent } from './host-examples/host-examples.component';

const modules = [
  CommunicationThroughServiceModule,
  HostExamplesModule,
  CommunicationThroughComponentsModule,
  DynamicComponentsModule,
  DirectivesModule,
  PipesModule
];

const routes = [
  {
    path: '', component: ExamplesComponent, children: [
      { path: 'pipes', component: PipesExampleComponent },
      { path: 'host', component: HostExamplesComponent },
      { path: 'dynamic-components', component: BannerExampleComponent },
      { path: 'directives/attribute', component: AttributeExamplesComponent },
      { path: 'directives/structural', component: StructuralDirectivesExample },
      { path: 'communication/viewchild', component: CountdownViewChildParentComponent},
      { path: 'communication/service', component: CommunicationThroughServiceComponent },
      { path: 'communication/setter', component: InputOutputSetterGetterComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ...modules,
    RouterModule.forChild(routes)
  ],
  exports: [
    ExamplesComponent,
    RouterModule
  ],
  declarations: [ExamplesComponent]
})
export class ExamplesModule { }

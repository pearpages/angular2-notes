import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructuralDirectivesExample } from './directives/structural/structural-directives-example.component';
import { AttributeExamplesComponent } from './directives/attribute/attribute-examples.component';
import { BannerExampleComponent } from './dynamic-components/banner-example.component';
import { DirectivesComponent } from './directives/directives.component';
import { HostExamplesComponent } from './host-examples/host-examples.component';
import { PipesExampleComponent } from './pipes/pipes-example.component';
import { ExamplesComponent } from './examples.component';
import { CommunicationComponent } from './communication/communication.component';

const routes: Routes = [
  {
    path: 'examples', component: ExamplesComponent, children: [
      { path: 'pipes', component: PipesExampleComponent },
      { path: 'host', component: HostExamplesComponent },
      { path: 'dynamic-components', component: BannerExampleComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'communication', component: CommunicationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule { }

export const routedComponents = [
  StructuralDirectivesExample,
  AttributeExamplesComponent,
  BannerExampleComponent,
  HostExamplesComponent,
  PipesExampleComponent,
  ExamplesComponent
];

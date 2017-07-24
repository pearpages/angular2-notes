import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesComponent } from './directives.component';
import { StructuralDirectivesExample } from './structural/structural-directives-example.component';
import { AttributeExamplesComponent } from './attribute/attribute-examples.component';

const routes: Routes = [
  { path: 'examples/directives', component: DirectivesComponent, children: [
      { path: 'attribute', component: AttributeExamplesComponent },
      { path: 'structural', component: StructuralDirectivesExample },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesRoutingModule { }

export const routedComponents = [DirectivesComponent];

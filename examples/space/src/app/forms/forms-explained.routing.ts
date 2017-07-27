import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsExplainedComponent } from './forms-explained.component';
import { ExamplesComponent } from './basic-concepts/examples.component';

const routes: Routes = [
  { path: 'forms', component: FormsExplainedComponent, children: [
    { path: 'basic', component: ExamplesComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormExplainedRoutingModule { }

export const formsRoutedComponents = [
  FormsExplainedComponent
];

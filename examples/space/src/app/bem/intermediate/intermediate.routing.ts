import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleGridMixinsComponent } from './simple-grid-mixins.component';

const routes: Routes = [
  { path: 'bem/intermediate', children: [
    { path: 'simple-grid-mixins', component: SimpleGridMixinsComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntermediateRoutingModule { }

export const intermediateRoutedComponents = [SimpleGridMixinsComponent];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleGridMixinsComponent } from './simple-grid-mixins.component';
import { ObjectOrientedCSSComponent } from './object-oriented-css.component';

const routes: Routes = [
  { path: 'bem/intermediate', children: [
    { path: 'simple-grid-mixins', component: SimpleGridMixinsComponent },
    { path: 'object-oriented-css', component: ObjectOrientedCSSComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntermediateRoutingModule { }

export const intermediateRoutedComponents = [SimpleGridMixinsComponent,ObjectOrientedCSSComponent];

import { VariableNamesComponent } from './beginner/variable-names.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeginnerModule } from './beginner/beginner.module';
import { BemComponent } from './bem.component';

const routes: Routes = [
  { path: 'bem', component: BemComponent, children: [
    { path: 'variable-names', component: VariableNamesComponent }
  ] },
];

@NgModule({
  imports: [
    BeginnerModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class BemRoutingModule { }

export const bemRoutedComponents = [
  BemComponent
];

import { NestedSelectorsComponent } from './beginner/nested-selectors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeginnerModule } from './beginner/beginner.module';
import { BemComponent } from './bem.component';
import { StructureSassComponent } from './beginner/structure-sass.component';
import { VariableNamesComponent } from './beginner/variable-names.component';

const routes: Routes = [
  { path: 'css', component: BemComponent },
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

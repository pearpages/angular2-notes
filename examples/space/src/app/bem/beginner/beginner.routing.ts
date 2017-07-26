import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestedSelectorsComponent } from './nested-selectors.component';
import { StructureSassComponent } from './structure-sass.component';
import { VariableNamesComponent } from './variable-names.component';

const routes: Routes = [
  {
    path: 'bem/beginner', children: [
      { path: 'variable-names', component: VariableNamesComponent },
      { path: 'structure-sass', component: StructureSassComponent },
      { path: 'nested-selectors', component: NestedSelectorsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeginnerRoutingModule { }

export const beginnerRoutedComponents = [VariableNamesComponent,StructureSassComponent,NestedSelectorsComponent];

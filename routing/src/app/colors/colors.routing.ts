import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlueComponent } from './blue.component';
import { RedComponent } from './red.component';
import { OrangeComponent } from './orange.component';

const routes: Routes = [
  { path: 'blue', component: BlueComponent },
  { path: 'blue/house', component: BlueComponent },
  { path: 'blue/car', component: BlueComponent },
  { path: 'red', component: RedComponent },
  { path: 'orange', component: OrangeComponent },
  { path: 'brown', redirectTo: 'blue', pathMatch: 'full' },
  { path: 'black', redirectTo: 'blue', pathMatch: 'prefix' },
  { path: 'hero/hello', component: OrangeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ColorsRoutingModule { }

export const routedComponents = [
    BlueComponent,
    RedComponent,
    OrangeComponent
];
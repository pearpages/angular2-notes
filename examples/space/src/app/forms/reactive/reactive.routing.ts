import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsComponent } from './reactive-forms.component';

const routes: Routes = [
  { path: 'forms/reactive', component: ReactiveFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveRoutingModule { }

export const routedComponents = [ReactiveFormsComponent];

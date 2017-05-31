import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'template-driven-form', component: FirstFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFormsRoutingModule { }


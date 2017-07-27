import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenComponent } from './template-driven.component';
import { HeroFormComponent } from './hero-form.component';

const routes: Routes = [
  { path: 'forms/template-driven', component: TemplateDrivenComponent, children: [
    {path: 'hero-form', component: HeroFormComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateDrivenRoutingModule { }

export const templateDrivenRoutedComponents = [
  TemplateDrivenComponent,
  HeroFormComponent
];

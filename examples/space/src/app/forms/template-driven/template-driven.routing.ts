import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenComponent } from './template-driven.component';
import { ValidationWithAttributesComponent } from './validation-with-attributes.component';
import { ValidationWithControllerCodeComponent } from './validation-with-controller-code.component';
import { HeroFormComponent } from './hero-form.component';

const routes: Routes = [
  { path: 'forms/template-driven', component: TemplateDrivenComponent, children: [
    {path: 'hero-form', component: HeroFormComponent },
    {path: 'validation-with-attributes', component: ValidationWithAttributesComponent },
    {path: 'validation-with-controller-code', component: ValidationWithControllerCodeComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateDrivenRoutingModule { }

export const templateDrivenRoutedComponents = [
  TemplateDrivenComponent,
  HeroFormComponent,
  ValidationWithAttributesComponent,
  ValidationWithControllerCodeComponent
];

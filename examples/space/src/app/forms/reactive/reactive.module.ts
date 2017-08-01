import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsComponent } from './reactive-forms.component';
import { HeroReactiveFormComponent } from './hero-reactive-form.component';
import { ReactiveRoutingModule } from './reactive.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [ReactiveFormsComponent, HeroReactiveFormComponent],
  providers: [],
})
export class ReactiveModule { }

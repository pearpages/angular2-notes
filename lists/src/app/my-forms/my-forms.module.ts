import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFormsRoutingModule } from './my-forms-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFormComponent } from './first-form/first-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  imports: [
    CommonModule,MyFormsRoutingModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [FirstFormComponent, ReactiveFormComponent]
})
export class MyFormsModule { }

import { FormsModule } from '@angular/forms';
import { MyFormsRoutingModule } from './my-forms-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFormComponent } from './first-form/first-form.component';

@NgModule({
  imports: [
    CommonModule,MyFormsRoutingModule,FormsModule
  ],
  declarations: [FirstFormComponent]
})
export class MyFormsModule { }

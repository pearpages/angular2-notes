import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BemRoutingModule, bemRoutedComponents } from './bem.routing';
import { IntermediateModule } from './intermediate/intermediate.module';
import { BeginnerModule } from './beginner/beginner.module';

@NgModule({
  imports: [
    CommonModule,
    BemRoutingModule,
    BeginnerModule,
    IntermediateModule
  ],
  declarations: [bemRoutedComponents]
})
export class BemModule { }

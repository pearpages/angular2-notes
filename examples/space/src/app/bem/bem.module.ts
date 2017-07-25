import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BemRoutingModule, bemRoutedComponents } from './bem.routing';

@NgModule({
  imports: [
    CommonModule,
    BemRoutingModule
  ],
  declarations: [bemRoutedComponents]
})
export class BemModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { beginnerRoutedComponents, BeginnerRoutingModule } from './beginner.routing';

@NgModule({
  imports: [CommonModule, BeginnerRoutingModule],
  exports: [],
  declarations: [
    beginnerRoutedComponents
  ],
  providers: [],
})
export class BeginnerModule { }

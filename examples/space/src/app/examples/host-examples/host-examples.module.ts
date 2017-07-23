import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostExamplesComponent } from './host-examples.component';
import { HostExampleParentComponent } from './parent.component';
import { HostExampleSonComponent } from './son.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HostExamplesComponent
  ],
  declarations: [
    HostExamplesComponent,
    HostExampleParentComponent,
    HostExampleSonComponent
  ],

})
export class HostExamplesModule { }

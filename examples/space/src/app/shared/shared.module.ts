import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollWatchDirective } from './scroll-watch.directive';
import { ScrollUpOnTapDirective } from './scroll-on-tap.directive';

const exported = [
  ScrollUpOnTapDirective,
  ScrollWatchDirective
];

@NgModule({
  imports: [CommonModule],
  exports: exported,
  declarations: [
    ...exported
  ]
})
export class SharedModule { }


import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation.component';

const exportedComponents = [
  NavigationComponent
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...exportedComponents
  ],
  declarations: [
    ...exportedComponents
  ]
})
export class UiModule { }


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { CountdownTimerComponent } from './countdown-timer.component';

const exportedComponents = [
  HeroesComponent,
  CountdownTimerComponent
  ];

@NgModule({
  imports: [CommonModule],
  exports: [
    ...exportedComponents
  ],
  declarations: [
    ...exportedComponents
  ]
})
export class SharedModule { }


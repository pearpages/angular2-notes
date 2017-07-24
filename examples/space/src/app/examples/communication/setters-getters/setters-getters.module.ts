import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { SettersGettersComponent } from './setters-getters.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    SettersGettersComponent,
  ],
  declarations: [
    SettersGettersComponent,
    HeroesComponent
  ],
})
export class SettersGettersModule { }

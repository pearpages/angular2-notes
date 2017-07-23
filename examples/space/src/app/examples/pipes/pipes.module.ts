import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipesExampleComponent } from './pipes-example.component';
import { ExponentialStrengthPipe } from './exponential-strengt.pipe';
@NgModule({
  imports: [CommonModule,FormsModule],
  exports: [PipesExampleComponent],
  declarations: [PipesExampleComponent,ExponentialStrengthPipe],
})
export class PipesModule { }

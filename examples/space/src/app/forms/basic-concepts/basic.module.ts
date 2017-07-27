import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExamplesComponent } from './examples.component';
import { Example2Component } from './example2.component';
import { Example3Component } from './example3.component';
import { Example1Component } from './example1.component';
import { Example4Component } from './example4.component';
import { Example5Component } from './example5.component';

@NgModule({
  imports: [CommonModule],
  exports: [ExamplesComponent],
  declarations: [
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    ExamplesComponent
  ],
  providers: [],
})
export class BasicModule { }

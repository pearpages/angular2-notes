import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './highlight.directive';
import { AttributeExamplesComponent } from './attribute-examples.component';

@NgModule({
  imports: [CommonModule],
  exports: [AttributeExamplesComponent],
  declarations: [
    HighlightDirective,
    AttributeExamplesComponent
  ]
})
export class AttributeDirectivesModule { }

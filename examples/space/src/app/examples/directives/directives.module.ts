import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StructuralDirectivesModule } from './structural';
import { AttributeDirectivesModule } from './attribute';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives.routing';

@NgModule({
  imports: [
    RouterModule,
    DirectivesRoutingModule,
    AttributeDirectivesModule,
    StructuralDirectivesModule
  ],
  exports: [
    AttributeDirectivesModule,
    StructuralDirectivesModule
  ],
  declarations: [DirectivesComponent]
})
export class DirectivesModule { }

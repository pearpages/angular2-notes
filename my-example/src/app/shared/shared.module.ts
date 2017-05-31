import { NgModule } from '@angular/core';
import { ButtonWithActionComponent } from './button-with-action/button-with-action.component';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  imports: [],
  declarations: [ButtonWithActionComponent, ColorDirective],
  exports: [ButtonWithActionComponent,ColorDirective]
})
export class SharedModule { }

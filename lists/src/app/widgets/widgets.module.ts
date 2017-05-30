import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsPanelComponent } from './widgets-panel/widgets-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetsPanelComponent],
  exports: [WidgetsPanelComponent]
})
export class WidgetsModule { }

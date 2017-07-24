import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownTimerComponent } from './countdown-timer.component';

@NgModule({
  imports: [CommonModule],
  exports: [CountdownTimerComponent],
  declarations: [CountdownTimerComponent],
})
export class CommunicationSharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstronautComponent } from './astronaut.component';
import { CommunicationThroughServiceComponent } from './service.component';
import { MissionControlComponent } from './mission-control.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AstronautComponent,
    MissionControlComponent,
    CommunicationThroughServiceComponent
  ]
})
export class CommunicationThroughServiceModule { }

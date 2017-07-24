import { CommunicationSharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { routedComponents, CommunicationRoutingModule } from './communication.routing';

@NgModule({
  imports: [
    CommunicationRoutingModule,
    CommunicationSharedModule
  ],
  declarations: [routedComponents],
})
export class CommunicationModule { }

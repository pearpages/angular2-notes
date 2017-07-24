import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { SettersGettersModule } from './setters-getters/setters-getters.module';
import { CommunicationThroughServiceModule, CommunicationThroughServiceComponent } from './service';
import { CommunicationComponent } from './communication.component';
import { SettersGettersComponent } from './setters-getters/setters-getters.component';
import { ViewchildComponent } from './viewchild';

const routes: Routes = [
  { path: 'examples/communication', component: CommunicationComponent, children: [
    { path: 'service', component: CommunicationThroughServiceComponent},
    { path: 'viewchild', component: ViewchildComponent},
    { path: 'setter', component: SettersGettersComponent},
    { path: 'template-variables', component: TemplateVariablesComponent},
  ] },
];

@NgModule({
  imports: [
    CommunicationThroughServiceModule,
    SettersGettersModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class CommunicationRoutingModule { }

export const routedComponents = [
  CommunicationComponent,
  ViewchildComponent,
  TemplateVariablesComponent
];

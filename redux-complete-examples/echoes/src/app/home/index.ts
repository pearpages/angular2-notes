import { NgModule } from '@angular/core';
import { CoreModule } from '../core';

import { Home } from './home.component';
import { routing } from './home.routing';

@NgModule({
  imports: [
    CoreModule,
    routing
  ],
  declarations: [
    Home
  ],
  exports: [
    Home
  ],
  providers: []
})
export class HomeModule { }

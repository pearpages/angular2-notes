import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreService } from './store.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [ StoreService ]
    }
  }
}

import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

import { ActionReducer, Action, combineReducers } from '@ngrx/store';
import { compose } from "@ngrx/core/compose";

// reducers

// plugins
import { localStorageSync } from './ngrx-store-localstorage';

/**
 * we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface EchoesState {

}

const actions = [

];

const composeStore = compose(
  localStorageSync([], true),
  combineReducers
)({ });

@NgModule({
  imports: [
    StoreModule.provideStore(composeStore),
  ],
  declarations: [

  ],
  exports: [

  ],
  providers: [ ...actions ]
})
export class CoreStoreModule {};

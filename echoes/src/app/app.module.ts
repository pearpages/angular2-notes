import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Platform and Environment providers/directives/pipes
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { App } from './app.component';

// COMPONENTS
import { CORE_COMPONENTS } from "./core/components";

import { HomeModule } from './home';

import { CoreModule } from './core';
// SERVICES
import { APP_SERVICES } from './core/services';

import { NOTIFY_PROVIDERS, NOTIFY_GLOBAL_OPTIONS } from '@ngrx/notify';

import 'rxjs/Rx';

// Application wide providers
const APP_PROVIDERS = [
  APP_SERVICES,
  NOTIFY_PROVIDERS
];

// AppModule is the main entry point into Angular2's bootstraping process
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    CoreModule,

    HomeModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule { }

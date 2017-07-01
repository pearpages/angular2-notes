import { PageNotFoundComponent } from './page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeroesModule } from './heroes/heroes.module';
import { CrisisModule } from './crisis/crisis.module';
import { ColorsModule } from './colors/colors.module';
import { routedComponents, AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    CrisisModule,
    ColorsModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

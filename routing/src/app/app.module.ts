import { PageNotFoundComponent } from './page-not-found.component';
import { NavComponent } from './nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeroesModule } from './heroes/heroes.module';
import { ColorsModule } from './colors/colors.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RootComponent } from './root.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    ColorsModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

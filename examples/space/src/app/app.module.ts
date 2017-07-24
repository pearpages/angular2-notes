import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from '@space/shared';
import { ExamplesComponent } from './examples/examples.component';
import { ExamplesModule } from './examples/examples.module';
import { routedComponents, AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ExamplesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

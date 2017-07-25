import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BemModule } from './bem/bem.module';
import { ExamplesModule } from './examples/examples.module';
import { UiModule } from './ui/ui.module';
import { ExamplesComponent } from './examples/examples.component';
import { routedComponents, AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    UiModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ExamplesModule,
    BemModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BemModule } from './bem/bem.module';
import { ExamplesModule } from './examples/examples.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module';
import { ExamplesComponent } from './examples/examples.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { FormsExplainedModule } from './forms';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    UiModule,
    BrowserModule,
    FormsModule,
    LoginModule.forRoot(),
    CoreModule.forRoot(),
    HttpModule,
    FormsExplainedModule,
    ExamplesModule,
    BemModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

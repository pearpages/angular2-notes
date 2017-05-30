import { AppRoutingModule } from './app-routing.module';
import { WidgetsModule } from './widgets/widgets.module';
import { NotesModule } from './notes/notes.module';
import { CarsModule } from './cars/cars.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  // Module import order matters
  // Look at the module imports array. Notice that the AppRoutingModule is last.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule,
    NotesModule,
    WidgetsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

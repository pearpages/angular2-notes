import { AllComponent } from './main/all/all.component';
import { AppRoutingModule } from './app-routing.module';
import { WidgetsModule } from './widgets/widgets.module';
import { NotesModule } from './notes/notes.module';
import { CarsModule } from './cars/cars.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { NotFoundComponent } from './main/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, AllComponent, NotFoundComponent
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

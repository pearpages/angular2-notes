import { PageNotFoundComponent } from './page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HeroesModule } from './heroes/heroes.module';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { CrisisModule } from './crisis/crisis.module';
import { ColorsModule } from './colors/colors.module';
import { routedComponents, AppRoutingModule } from './app.routing';
import { ComposeMessageComponent } from './compose-massage.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ComposeMessageComponent,
    routedComponents
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AdminModule,
    CrisisModule,
    ColorsModule,
    LoginModule,
    HeroesModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

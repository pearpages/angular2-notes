import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { LoginPageComponent } from './login-page.component';
import { AppGuard } from './app.guard';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  { path: '', redirectTo: 'examples', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AppGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  PageNotFoundComponent,
  LoginPageComponent
];

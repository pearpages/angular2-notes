import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { LoginPageComponent } from './login-page.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  { path: '', redirectTo: 'examples', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

export const routedComponents = [
  PageNotFoundComponent,
  LoginPageComponent
];

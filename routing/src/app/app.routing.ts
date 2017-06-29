import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './root.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'root', pathMatch: 'full' },
  { path: 'root', component: RootComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
  RootComponent,
  PageNotFoundComponent
];
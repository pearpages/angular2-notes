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
    // The order of route configuration matters. The router accepts the first route that matches a navigation request path.
    RouterModule.forRoot(routes,
      { enableTracing: true } // <-- debugging purposes only),
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
  RootComponent,
  PageNotFoundComponent
];

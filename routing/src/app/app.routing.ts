import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlueComponent } from './colors/blue.component';
import { RedComponent } from './colors/red.component';
import { OrangeComponent } from './colors/orange.component';
import { HeroesListComponent } from './heroes/heroes-list.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { RootComponent } from './root.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', component: RootComponent, pathMatch: 'full' },
  { path: 'blue', component: BlueComponent },
  { path: 'red', component: RedComponent },
  { path: 'orange', component: OrangeComponent },
  { path: 'black', redirectTo: 'blue' },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesListComponent, data: { title: 'Heroes List' } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

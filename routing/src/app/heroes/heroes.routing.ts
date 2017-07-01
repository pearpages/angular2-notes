import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'hero/:id/:surname', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesListComponent, data: { title: 'Heroes List' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class HeroesRoutingModule { }

export const routedComponents = [
  HeroesListComponent,
  HeroDetailComponent
];

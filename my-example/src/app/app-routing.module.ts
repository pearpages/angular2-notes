import { NotFoundComponent } from './main/not-found/not-found.component';
import { AllComponent } from './main/all/all.component';
import { HomeComponent } from './main/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes.

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'all', component: AllComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
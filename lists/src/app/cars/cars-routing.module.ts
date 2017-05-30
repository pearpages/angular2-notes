import { CarsPanelComponent } from './components/cars-panel/cars-panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'cars', component: CarsPanelComponent },
    { path: 'cars/trick', redirectTo: '/cars' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CarsRoutingRoutingModule { }

import { CarComponent } from './components/car/car.component';
import { CarsPanelComponent } from './components/cars-panel/cars-panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'cars', component: CarsPanelComponent },
    { path: 'car/:id', component: CarComponent },
    { path: 'cars/trick', redirectTo: '/cars' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CarsRoutingRoutingModule { }

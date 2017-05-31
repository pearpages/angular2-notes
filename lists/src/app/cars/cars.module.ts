import { FormsModule } from '@angular/forms';
import { CarsRoutingRoutingModule } from './cars-routing.module';
import { CarsService } from './services/cars.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './components/driver/driver.component';
import { CarComponent } from './components/car/car.component';
import { CarsPanelComponent } from './components/cars-panel/cars-panel.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarFormComponent } from './components/car-form/car-form.component';

@NgModule({
  imports: [
    CommonModule, CarsRoutingRoutingModule, FormsModule
  ],
  declarations: [DriverComponent, CarComponent, CarsPanelComponent, CarsListComponent, CarFormComponent],
  exports: [
    CarsPanelComponent
  ],
  providers: [
    CarsService
  ]
})
export class CarsModule { }

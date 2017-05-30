import { CarsService } from './services/cars.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './components/driver/driver.component';
import { CarComponent } from './components/car/car.component';
import { CarsPanelComponent } from './components/cars-panel/cars-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DriverComponent, CarComponent, CarsPanelComponent],
  exports: [
    CarsPanelComponent
  ],
  providers: [
    CarsService
  ]
})
export class CarsModule { }

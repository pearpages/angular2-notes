import { Car } from './../../models/Car';
import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-panel',
  templateUrl: './cars-panel.component.html',
  styleUrls: ['./cars-panel.component.css']
})
export class CarsPanelComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carsList: CarsService) { }

  ngOnInit() {
    this.cars = this.carsList.getCars();
  }

}

import { Component, OnInit } from '@angular/core';
import { Car } from './../../models/Car';
import { CarsService } from './../../services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private _carsList: CarsService) { }

  ngOnInit() {
    this.cars = this._carsList.getCars();
  }

}

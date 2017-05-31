import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Car } from './../../models/Car';
import { CarsService } from './../../services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars$: Observable<Car[]>;

  constructor(private _carsList: CarsService) { }

  ngOnInit() {
    this.cars$ = this._carsList.getCars();
  }

  remove(car: Car) {
    this._carsList.removeCar(car);
  }

  getInitialList() {
    this._carsList.getInitialList();
  }
}

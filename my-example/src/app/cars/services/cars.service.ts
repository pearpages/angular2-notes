import { Http, Response } from '@angular/http';
import  * as actions from './../cars.actions';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppStore } from './../../app-store';
import { Car } from './../models/Car';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class CarsService {
  cars$: Observable<Car[]> = this._store.select('cars');
  cars: Car[];

  constructor(private _store: Store<AppStore>, private _http: Http) {
    this.cars$.subscribe((cars: Car[]) => this.cars = cars)
  }

  getCars(): Observable<Car[]> {
    this._http.get('http://localhost:3001/cars')
      .map((res: Response) => res.json())
      .subscribe((cars: Car[]) => {
        this._store.dispatch(new actions.ResetCars(cars));
      });
    return this.cars$;
  }

  addCar(car: Car) {
    this._store.dispatch(new actions.AddCar(car));
  }

  removeCar(car: Car) {
    this._store.dispatch(new actions.RemoveCar(car.id));
  }

  getInitialList() {
    this._store.dispatch(new actions.GetInitialList());
  }

  getCar(id: number): Car {
    return this.cars.find((car) => car.id === id);
  }

  updateCar(car: Car) {
    this._store.dispatch(new actions.UpdateCar(car));
  }
}
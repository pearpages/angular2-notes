import { ADD_CAR } from './../cars.reducer';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './../../app-store';
import { Car } from './../models/Car';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class CarsService {
  cars$: Observable<Car[]> = this._store.select('cars');

  constructor(private _store: Store<AppStore>) { }

  getCars(): Observable<Car[]> {
    return this.cars$;
  }

  addCar(car: Car) {
    this._store.dispatch({type: ADD_CAR, payload: car});
  }

}
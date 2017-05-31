import { ADD_CAR, REMOVE_CAR, GET_INITIAL_LIST, UPDATE_CAR } from './../cars.reducer';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './../../app-store';
import { Car } from './../models/Car';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class CarsService {
  cars$: Observable<Car[]> = this._store.select('cars');
  cars: Car[];

  constructor(private _store: Store<AppStore>) {
    this.cars$.subscribe( (cars: Car[]) => this.cars = cars )
  }

  getCars(): Observable<Car[]> {
    return this.cars$;
  }

  addCar(car: Car) {
    this._store.dispatch({type: ADD_CAR, payload: car});
  }

  removeCar(car: Car) {
    this._store.dispatch({type: REMOVE_CAR, payload: car.id});
  }

  getInitialList() {
    this._store.dispatch({type: GET_INITIAL_LIST});
  }

  getCar(id: number): Car {
    return this.cars.find( (car) => car.id === id);
  }

  updateCar(car: Car) {
    this._store.dispatch({type: UPDATE_CAR, payload: car});
  }
}
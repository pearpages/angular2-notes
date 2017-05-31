import { Http, Response } from '@angular/http';
import { ADD_CAR, REMOVE_CAR, GET_INITIAL_LIST, UPDATE_CAR, RESET_CARS } from './../cars.reducer';
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
        console.log('updating');
        this._store.dispatch({ type: RESET_CARS, payload: cars });
      });
    return this.cars$;
  }

  addCar(car: Car) {
    this._store.dispatch({ type: ADD_CAR, payload: car });
  }

  removeCar(car: Car) {
    this._store.dispatch({ type: REMOVE_CAR, payload: car.id });
  }

  getInitialList() {
    this._store.dispatch({ type: GET_INITIAL_LIST });
  }

  getCar(id: number): Car {
    return this.cars.find((car) => car.id === id);
  }

  updateCar(car: Car) {
    this._store.dispatch({ type: UPDATE_CAR, payload: car });
  }
}
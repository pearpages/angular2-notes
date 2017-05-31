import { Car } from './models/Car';
import { Action } from '@ngrx/store';

export const ADD_CAR = '[Car] Add Car';
export const REMOVE_CAR = '[Car] Remove Car';
export const GET_INITIAL_LIST = '[Car] Get Initial List';
export const UPDATE_CAR = '[Car] Update Car';
export const RESET_CARS = '[Car] Reset Cars';

export class AddCar implements Action {
    readonly type = ADD_CAR;

    constructor(public payload: Car) {}
}

export class RemoveCar implements Action {
    readonly type = REMOVE_CAR;

    constructor(public payload: number) {}
}

export class GetInitialList implements Action {
    readonly type =  GET_INITIAL_LIST;

}

export class UpdateCar implements Action {
    readonly type = UPDATE_CAR;

    constructor(public payload: Car){}
}

export class ResetCars implements Action {
    readonly type = RESET_CARS;

    constructor(public payload: Car[]) {}
}
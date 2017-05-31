import { Car } from './models/Car';
import { Action, ActionReducer } from '@ngrx/store';

export const ADD_CAR = 'ADD_CAR';

const defaultCars: Car[] = [
  { id: 1, name: 'Acura' },
  { id: 2, name: 'Alfa Romeo' },
  { id: 3, name: 'Aston Martin' },
  { id: 4, name: 'Audi', description: 'A stupid description for Audi' },
  { id: 5, name: 'Bentley' },
  { id: 6, name: 'BMW' },
  { id: 7, name: 'Bugatti' },
  { id: 8, name: 'Buick' }
];

export const cars: ActionReducer<Car[]> = (state:Car[] = defaultCars, action: Action) => {
    switch(action.type) {
        case ADD_CAR:
            return [...state, action.payload];
        default:
            return state;
    }
};
import { Car } from './models/Car';
import { Action, ActionReducer } from '@ngrx/store';

export const ADD_CAR = 'ADD_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';
export const GET_INITIAL_LIST = 'GET_INITIAL_LIST';
export const UPDATE_CAR = 'UPDATE_CAR';

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
        case REMOVE_CAR:
            const i = getIndex(state,action.payload);
            return [...state.slice(0,i),...state.slice(i+1)]
        case GET_INITIAL_LIST:
            return defaultCars.slice(0);
        case
            UPDATE_CAR:
            const j = getIndex(state,action.payload.id);
            if(j === -1) {
                action.type = ADD_CAR
                return cars(state,action);
            } else {
                return [...state.slice(0,j),action.payload,...state.slice(j+1)]
            }

        default:
            return state;
    }
};

function getIndex(state: Car[],id: number) {
    const car = state.find( car => car.id === id);
    const i = state.indexOf(car);
    return i;
}
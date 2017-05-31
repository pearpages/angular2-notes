import { Car } from './models/Car';
import { Action, ActionReducer } from '@ngrx/store';

export const ADD_CAR = 'ADD_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';
export const GET_INITIAL_LIST = 'GET_INITIAL_LIST';
export const UPDATE_CAR = 'UPDATE_CAR';
export const RESET_CARS = 'RESET_CARS';

const defaultCars: Car[] = [
  { id: 1, name: 'Acura' },
  { id: 2, name: 'Alfa Romeo' }
];

export const cars: ActionReducer<Car[]> = (state:Car[] = defaultCars, action: Action) => {
    switch(action.type) {
        case RESET_CARS:
            return action.payload.slice(0);
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
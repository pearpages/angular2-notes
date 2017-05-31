import { Car } from './models/Car';
import { Action, ActionReducer } from '@ngrx/store';
import * as actions from './cars.actions';

const defaultCars: Car[] = [
  { id: 1, name: 'Acura' },
  { id: 2, name: 'Alfa Romeo' }
];

export const cars: ActionReducer<Car[]> = (state:Car[] = defaultCars, action: Action) => {
    switch(action.type) {
        case actions.RESET_CARS:
            return action.payload.slice(0);
        case actions.ADD_CAR:
            return [...state, action.payload];
        case actions.REMOVE_CAR:
            const i = getIndex(state,action.payload);
            return [...state.slice(0,i),...state.slice(i+1)]
        case actions.GET_INITIAL_LIST:
            return defaultCars.slice(0);
        case
            actions.UPDATE_CAR:
            const j = getIndex(state,action.payload.id);
            if(j === -1) {
                action.type = actions.ADD_CAR
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
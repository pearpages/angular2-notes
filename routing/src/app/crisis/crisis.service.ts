import { Injectable } from '@angular/core';

import { Crisis } from './crisis.models';

const crises = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again')
];

@Injectable()
export class CrisisService {

    constructor() { }

    getAll(): Array<Crisis> {
        return crises;
    }

    getCrisis(id): Promise<Crisis> {
        const p = new Promise( (resolve) => {
            resolve(crises.find( crisis => {
                return crisis.id == id;
            }));
        });
        return p;

    }
}
import { Injectable } from 'angular2/core';

// the import from another file would be:
// import { Character } from './character.service'
export class Character {
	constructor(public id: number, public name: string, public color: string);
}

@Injectable()
export class CharacterService {
	getCharacters() {
		return [
			new Character(10, 'abc3d'),
			new Character(12, 'ddasd2000'),
			new Character(14, 'XZY200')
		];
	}
}
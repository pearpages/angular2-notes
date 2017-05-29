import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class CharactersService {

  private characters: Person[];

  constructor() {
    this.characters = [
      new Person(1, 'Han Solo'),
      new Person(2, 'LukeSkywalker'),
      new Person(3, 'BB-8'),
      new Person(4, 'Rey')
    ];
  }

  get (text: string = null): Person[] {
    let filter = text.toLowerCase();
    return (filter === null || filter.trim() === '' ) ? this.characters : this.characters.filter((c) => c.name.toLowerCase().includes(filter) );
  }
}

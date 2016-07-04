import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { CharacterComponent } from '../character/character.component';

@Component({
  moduleId: module.id,
  selector: 'character-list',
  templateUrl: 'character-list.component.html',
  styleUrls: ['character-list.component.css'],
  directives: [CharacterComponent]
})
export class CharacterListComponent implements OnInit {

  selectedCharacter: Person;
  characters;

  constructor() {
    console.log(Person);
    this.characters = [
      new Person(1, 'Han Solo'),
      new Person(2, 'LukeSkywalker'),
      new Person(3, 'BB-8'),
      new Person(4, 'Rey')
    ];
  }

  ngOnInit() {

  }

  select(character: Person) {
    this.selectedCharacter = character;
  }
}

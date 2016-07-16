import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';
import { CharacterComponent } from '../character/character.component';
import { CharactersService } from '../characters.service';

@Component({
  moduleId: module.id,
  selector: 'character-list',
  templateUrl: 'character-list.component.html',
  styleUrls: ['character-list.component.css'],
  directives: [CharacterComponent]
})
export class CharacterListComponent implements OnInit {

  @Output() changed = new EventEmitter<Person>();
  textToFilter: string = '';
  selectedCharacter: Person;

  constructor(private characters: CharactersService) { }

  ngOnInit() { }

  getCharacters() {
    return this.characters.get(this.textToFilter);
  }

  isSelected(p: Person):boolean {
    return this.selectedCharacter === p;
  }

  resetFilter() {
    this.textToFilter = '';
  }

  select(character: Person) {
    this.selectedCharacter = character;
    this.changed.emit(character);
  }
}

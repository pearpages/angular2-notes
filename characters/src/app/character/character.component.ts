import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  moduleId: module.id,
  selector: 'character',
  templateUrl: 'character.component.html',
  styleUrls: ['character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: Person;

  constructor() {}

  ngOnInit() {
  }

}

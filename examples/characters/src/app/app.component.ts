import { Component, ViewChild } from '@angular/core';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharactersService } from './characters.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [VehiclesComponent, CharacterListComponent],
  providers: [CharactersService, HTTP_PROVIDERS ]
})
export class AppComponent {
  title = 'app works!';

  @ViewChild(CharacterListComponent) list: CharacterListComponent;

  catchEvent(event) {
    console.log(event);
  }

  resetCharacterList() {
    this.list.resetFilter();
  }
}

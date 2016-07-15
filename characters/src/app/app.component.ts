import { Component } from '@angular/core';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharactersService } from './characters.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [VehiclesComponent, CharacterListComponent],
  providers: [CharactersService]
})
export class AppComponent {
  title = 'app works!';

  catchEvent(event) {
    console.log(event);
  }
}

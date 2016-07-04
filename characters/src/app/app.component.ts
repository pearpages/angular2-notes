import { Component } from '@angular/core';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CharacterListComponent } from './character-list/character-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [VehiclesComponent, CharacterListComponent]
})
export class AppComponent {
  title = 'app works!';
}

import { Component } from '@angular/core';
import { VehiclesComponent } from './vehicles/vehicles.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [VehiclesComponent]
})
export class AppComponent {
  title = 'app works!';
}

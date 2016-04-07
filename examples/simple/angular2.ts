import { Component } from 'angular2/core';

@Component({
	selector: 'my-story',
	template: '<h3>{{story.name}}</h3>'
})
export class StoryComponent {
	story = {id: 100, name: 'Super Cool Title'};
}

// -----------------------------

import {Injectable} from 'angular2/core';

@Injectable()
export class VehicleService {
	getVehicles = () => [
		{id:1, name="xyz" },
		{id:2, name="xyz-342" },
		{id:3, name="a2000" }
	];
}

// -----------------------------

import { VehicleService} from './vehicle.service';

@Component({
	selector: 'my-vehicles',
	templateUrl: 'app/vehicles.component.html',
	providers: [VehicleService]
})
export class VehiclesComponent {
	constructor(private _vehicleService: VehicleService) {}
	vehicles = this._vehicleService.getVehicles();
}
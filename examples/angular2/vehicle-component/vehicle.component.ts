import { VehicleService } from './vehicle.service';

@Component({
	selector: 'my-vehicles',
	templateUrl: 'app/vehicles.component.html',
	providers: [VehicleService]
})
export class VehicleListComponent {
	vehicles: Vehicle[];

	constructor(private _vehicleService: VehicleService) {
		this._vehicleService.getVehicles()
			.subscribe(vehicles => this.vehicles = vehicles);
	}
}
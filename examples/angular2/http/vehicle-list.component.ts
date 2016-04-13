import { Vehicle, VehicleService } from './vehicle/service';

class test {
	constructor(private _vehicleService: VehicleService) { }	
	ngOnInit() { this.getHeroes(); }
	getHeroes() {
		this._vehicleService.getVehicles()
			.subscribe(
				vehicles => this.vehicles = vehicles,
				error => this.errorMessage = <any>error
			);
	}
}

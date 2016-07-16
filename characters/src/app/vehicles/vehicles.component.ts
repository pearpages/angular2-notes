import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { VehicleService } from '../vehicle.service';

@Component({
  moduleId: module.id,
  selector: 'vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['vehicles.component.css'],
  providers: [VehicleService]
})
export class VehiclesComponent implements OnInit {

  vehicles;
  errorMessage;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehicles()
      .subscribe(
        vehicles => this.vehicles = vehicles,
        error => this.errorMessage = <any>error
      );
  }

}

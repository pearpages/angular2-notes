import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle-service';

@Component({
  moduleId: module.id,
  selector: 'vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['vehicles.component.css'],
  providers: [VehicleService]
})
export class VehiclesComponent implements OnInit {

  vehicles: any[];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicles = this.vehicleService.getVehicles();
  }

}

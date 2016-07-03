import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: any[];

  constructor() {}

  ngOnInit() {
    this.vehicles = [
      {id: 1,name:'X-Wing Fighter'},
      {id: 2,name:'Tie Fighter'},
      {id: 3,name:'Y-Wing Fighter'}
    ];
  }

}

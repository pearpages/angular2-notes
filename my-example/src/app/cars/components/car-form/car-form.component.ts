import { CarsService } from './../../services/cars.service';
import { Car } from './../../models/Car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  model: Car = {id:undefined,name:'',description:''};

  find: number;

  constructor(private _cars: CarsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._cars.updateCar(this.model);
    this.model = {id:undefined,name:'',description:''};
  }

  findCar() {
    let car:Car = this._cars.getCar(this.find);
    this.model = Object.assign({},car);
  }
}

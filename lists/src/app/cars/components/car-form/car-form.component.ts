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

  constructor(private _cars: CarsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._cars.addCar(this.model);
    this.model = {id:undefined,name:'',description:''};
  }
}

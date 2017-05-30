import { Car } from './../models/Car';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

  constructor() { }

  getCars(): Car[] {
    return [
      {id:1,name:'Acura'},
      {id:2,name:'Alfa Romeo'},
      {id:3,name:'Aston Martin'},
      {id:4,name:'Audi',description:'A stupid description for Audi'},
      {id:5,name:'Bentley'},
      {id:6,name:'BMW'},
      {id:7,name:'Bugatti'},
      {id:8,name:'Buick'}
    ];
  }

}

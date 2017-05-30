import { Car } from './../../models/Car';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  @Output() carClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  performClick($event) {
    this.carClick.emit($event.target.value);
  }

}

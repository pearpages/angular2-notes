import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() name: string = 'fill this field with a name!';
  @Output() performClick: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

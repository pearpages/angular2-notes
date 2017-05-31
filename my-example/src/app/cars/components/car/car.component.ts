import { Car } from './../../models/Car';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  @Output() carClick: EventEmitter<string> = new EventEmitter();
  static times = 0;
  id: number;

  get times() {
    return CarComponent.times;
  }

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe( (params: Params) => this.id = params.id);
    // example
    // this.route.params
    //   // (+) converts string 'id' to a number
    //   .switchMap((params: Params) => this.service.getHero(+params['id']))
    //   .subscribe((hero: Hero) => this.hero = hero);

    // snapshot is the nonOvserbable version
      // (+) converts string 'id' to a number
    // let id = +this.route.snapshot.params['id'];

    // The switchMap operator allows you to perform an action with the current value of the Observable, and map it to a new Observable.

    // When subscribing to an observable in a component, you almost always arrange to unsubscribe when the component is destroyed.

    // There are a few exceptional observables where this is not necessary. The ActivatedRoute observables are among the exceptions.
  }

  performClick($event) {
    console.log('event emitted from CarComponent');
    CarComponent.times++;
    this.carClick.emit($event.target.value);
  }

}

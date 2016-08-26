import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app',
    template: `
    <h1>{{message}}</h1>
    <p>Clock: {{clock | async}}</p>
    ` 
})
export class App {
    message = 'Hello, world';
    clock = Observable.interval(1000)
        .map(() => new Date()); // everytime it ticks, we give a new date
}
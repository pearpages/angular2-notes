import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app',
    template: `
    <h1>{{message}}</h1>
    <p>Clock: {{clock | async | date: 'yMMMMEEEEdjms' }}</p>

    <br/>
    <button (click)="click$.next()">Update clock2</button>
    <p>Clock 2: {{clock2 | async | date: 'jms' }}</p>
    <p>Subscription to clock 2: {{clock2Copy | date: 'jms'}}</p>
    ` 
})
export class App {
    click$ = new Subject();
    clock2;
    clock2Copy;
    message = 'Hello, world';
    clock = Observable.interval(1000)
        .map(() => new Date()); // everytime it ticks, we give a new date

    constructor() {
        this.clock2 = this.click$.map(() => new Date());
        this.click$.subscribe(
            () => this.clock2Copy = new Date()
        ) 
    }
}
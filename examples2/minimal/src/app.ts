import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import 'rxjs/add/observable/merge';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app',
    template: `
    <h1>{{message}}</h1>

    <h4>Normal Clock</h4>
    <p>Clock: {{clock | async | date: 'yMMMMEEEEdjms' }}</p>

    <br/>
    
    <h4>Clock 2</h4>
    <button (click)="click$.next()">Update clock2</button>
    <p>Clock 2: {{clock2 | async | date: 'jms' }}</p>
    <p>Subscription to clock 2: {{clock2Copy | date: 'jms'}}</p>

    <br/>

    <h4>Clock 3</h4>
    <p>This clock gets update when button 2 is being clicked or every 3000 miliseconds</p>
    <p>Clock 3: {{clock3 | date: 'jms'}}</p>

    <br/>

    <h4>Clock 4</h4>
    <p>This one gets updated every 7 seconds, but gets forwarded 10 seconds from the original date, and never gets sync with the real date/time.</p>
    <p>Clock 4: {{clock4 | date: 'jms'}}</p>
    ` 
})
export class App {
    click$ = new Subject();
    message = 'Hello, world';
    clock;
    clock2;
    clock2Copy;
    clock3;
    clock4;

    constructor() {
        this.clock = Observable.interval(1000).map(() => new Date()); // everytime it ticks, we give a new date 
        this.clock2 = this.click$.map(() => new Date());
        this.click$.subscribe(
            () => this.clock2Copy = new Date()
        )
        Observable.merge(this.click$,Observable.interval(3000)).subscribe(
            () => this.clock3 = new Date()
        );

        Observable.merge(this.click$,Observable.interval(7000))
        .startWith(new Date())
        .scan((accumulator: Date, current) => {
          const date = new Date(accumulator.getTime());
          date.setSeconds(date.getSeconds() + 10 );
          return date;  
        } )
        .subscribe(
            (data) => this.clock4 = data
        );
    }
}
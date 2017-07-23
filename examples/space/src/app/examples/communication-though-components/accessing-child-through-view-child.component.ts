import { AfterViewInit, ViewChild } from '@angular/core';
import { Component }                from '@angular/core';

import { CountdownTimerComponent } from '@space/shared';

@Component({
  selector: 'sp-communication-through-viewchild',
  template: `
  <h4>Countdown to Liftoff (via ViewChild)</h4>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <button (click)="reset()">Reset</button>
  <div class="seconds">{{ seconds() }}</div>
  <sp-countdown-timer></sp-countdown-timer>
  `
})
export class CountdownViewChildParentComponent implements AfterViewInit {

  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
  reset() { this.timerComponent.reset(); }
}

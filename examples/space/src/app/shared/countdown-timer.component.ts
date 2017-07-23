import { Component, OnDestroy } from '@angular/core';

const DEFAULT_SECONDS = 11;

@Component({
  selector: 'sp-countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnDestroy {

  intervalId = 0;
  message = '';
  seconds = DEFAULT_SECONDS;

  clearTimer() { clearInterval(this.intervalId); }

  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  reset() {
    this.seconds = DEFAULT_SECONDS;
    this.message = `T-${this.seconds} seconds and counting`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.clearTimer();
          // reset
        } else {
          this.message = `T-${this.seconds} seconds and counting`;
        }
      }
    }, 1000);
  }
}

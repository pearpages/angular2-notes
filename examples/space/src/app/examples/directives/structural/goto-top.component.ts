import { Component } from '@angular/core';

declare var require: any;
const IMAGE = require('./assets/scroll_to_top.png');

@Component({
  selector: 'sp-goto-top',
  template: `
  <div spScrollWatch class="sp-scroll-to-top">
    <img spScrollupOnTap class="sp-scroll-to-top__button" [src]="image" />
  </div>`,
  styles: [`
    .sp-scroll-to-top {
      display: none;
      text-align: right;
    }
    .sp-scroll-to-top__button {
      cursor: pointer;
      position: fixed;
      bottom: 20px;
      margin-left: 20px;
    }
    .is-scrolling-up, .is-scrolling-down {
      display: block;
    }
  `]
})

export class GotoTopComponent {
  image = IMAGE;
}

import { Component } from '@angular/core';

declare var require: any;
const IMAGE = require('./assets/scroll_to_top.png');

@Component({
  selector: 'sp-goto-top',
  template: `<div class="sp-scroll-to-top">
    <img [src]="image" />
  </div>`
})

export class GotoTopComponent {
  image = IMAGE;
}

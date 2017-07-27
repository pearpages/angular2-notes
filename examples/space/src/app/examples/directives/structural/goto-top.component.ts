import { Component } from '@angular/core';

declare var require: any;
const IMAGE = require('./assets/scroll_to_top.png');

@Component({
  selector: 'sp-goto-top',
  template: `<div class="sp-scroll-to-top">
    <img (click)="showAlert()" class="sp-goto-top__button" [src]="image" />
  </div>`,
  styles: [`
    .sp-goto-top__button {
      cursor: pointer;
    }
  `]
})

export class GotoTopComponent {
  image = IMAGE;

  showAlert() {
    alert('here!!');
  }
}

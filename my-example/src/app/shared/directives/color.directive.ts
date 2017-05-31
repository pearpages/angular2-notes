import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]',
  host: {
    '(mouseenter)':'color()',
    '(mouseleave)':'color("inherit")'
  }
})
export class ColorDirective {
  @Input() defaultColor: string = 'red';

  constructor(private _el: ElementRef) {
  }

  color(color) {
    color = color || this.defaultColor;
    this._el.nativeElement.style.background = color;
  }

}

import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[spScrollupOnTap]'
})
export class ScrollUpOnTapDirective {
  @HostListener('click', ['$event']) onTap(event): void {
    console.log(event);
    window.scrollTo(0, 0);
  }

  constructor() { }

}

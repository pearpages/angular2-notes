import { Directive, Renderer2, ElementRef, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[spScrollWatch]'
})
export class ScrollWatchDirective implements OnInit {

  @HostBinding('class.is-scrolling-up') isScrollingUp: boolean;
  @HostBinding('class.is-scrolling-down') isScrollingDown: boolean;
  private delta = 0;
  private lastScrollingCheck = 0;


  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) {
    this.renderer2.listen('window', 'scroll', this.updateScrollDirection.bind(this));
  }

  ngOnInit() {
    this.delta = this.elementRef.nativeElement.offsetHeight;
    this.lastScrollingCheck = this.delta;
  }

  updateScrollDirection(event: any): void {
    if (window.scrollY > this.delta) {
      this.isScrollingDown = (window.scrollY > this.lastScrollingCheck);
      this.isScrollingUp = !this.isScrollingDown;
    } else {
      this.isScrollingUp = false;
      this.isScrollingDown = false;
    }

    this.lastScrollingCheck = window.scrollY;
  }
}

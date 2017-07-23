import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({ selector: '[spHighlight]' })
export class HighlightDirective implements OnInit{

  constructor(private el: ElementRef) {
    this.highlight(this.spDefaultColor);
  }

  @Input('spHighlight') spDefaultColor: string;
  @Input() enterColor = 'red';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.enterColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.spDefaultColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngOnInit() {
    this.highlight(this.spDefaultColor);
  }
}

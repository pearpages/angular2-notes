import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, ComponentFactoryResolver, HostBinding } from '@angular/core';

import { GotoTopComponent } from './goto-top.component';

@Directive({ selector: '[spGotoTop]' })
export class GotoTopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef);
    const factory = this.componentFactoryResolver.resolveComponentFactory(GotoTopComponent);
    this.viewContainer.createComponent(factory);
  }
}

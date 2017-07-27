import { GotoTopComponent } from './goto-top.component';
import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, ComponentFactoryResolver } from '@angular/core';

@Directive({ selector: '[spGotoTop]' })
export class GotoTopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.addGotoTopComponentToTheView();
  }

  private addGotoTopComponentToTheView() {
    this.viewContainer.createEmbeddedView(this.templateRef);
    const factory = this.componentFactoryResolver.resolveComponentFactory(GotoTopComponent);
    this.viewContainer.createComponent(factory);
  }
}

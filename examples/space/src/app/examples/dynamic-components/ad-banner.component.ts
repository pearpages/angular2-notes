import { Component, Input, OnInit, AfterViewInit, OnDestroy, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem, AdComponent } from './ad.models';

@Component({
  selector: 'sp-ad-banner',
  template: `
    <div class="banner">
      <h3>Advertisements</h3>
      <ng-template ad-host></ng-template>
    </div>
  `,
  styles: [`
    .banner {
      width: 400px;
  }
  `]
})

export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    setTimeout(() => {this.loadComponent();
    this.getAds()}, 0);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAddIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.ViewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1000);
  }
}

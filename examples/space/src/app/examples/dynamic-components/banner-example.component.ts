import { Component, OnInit } from '@angular/core';

import { AdItem } from './ad.models';
import { AdService } from './ad.service';

@Component({
  selector: 'sp-banner-example',
  template: `
  <div>
  <h4>Dynamic Components Example</h4>
  <sp-ad-banner [ads]="ads"></sp-ad-banner>
  </div>
  `
})

export class BannerExampleComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

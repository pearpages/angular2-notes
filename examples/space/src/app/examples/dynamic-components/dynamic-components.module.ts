import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdDirective } from './ad.directive';
import { BannerExampleComponent } from './banner-example.component';
import { AdService } from './ad.service';
import { HeroProfileComponent } from './ad-templates/hero-profile.component';
import { HeroJobAdComponent } from './ad-templates/hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BannerExampleComponent
  ],
  providers: [
    AdService
  ],
  declarations: [
    AdDirective,
    BannerExampleComponent,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdBannerComponent
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ]
})
export class DynamicComponentsModule { }

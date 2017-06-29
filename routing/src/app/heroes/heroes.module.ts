import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    declarations: [
        HeroDetailComponent,
        HeroesListComponent
    ],
    imports: [ CommonModule ],
    exports: [
        HeroDetailComponent,
        HeroesListComponent
    ],
    providers: [],
})
export class HeroesModule {}

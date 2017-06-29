import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, HeroesRoutingModule } from './heroes.routing';

@NgModule({
    declarations: [
        routedComponents
    ],
    imports: [
        CommonModule,
        HeroesRoutingModule
    ],
    exports: [
        routedComponents
    ],
    providers: [],
})
export class HeroesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, ColorsRoutingModule } from './colors.routing';

@NgModule({
    declarations: [
        routedComponents
    ],
    imports: [
        CommonModule,
        ColorsRoutingModule
    ],
    exports: [
        routedComponents
    ],
    providers: [],
})
export class ColorsModule { }

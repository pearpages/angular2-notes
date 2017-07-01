import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crisisRoutedComponents, CrisisRoutingModule } from './crisis.routing';
import { CrisisService } from '.';

@NgModule({
    declarations: [
        ...crisisRoutedComponents
    ],
    imports: [
        CommonModule,
        CrisisRoutingModule
    ],
    providers: [CrisisService]
})
export class CrisisModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlueComponent } from './blue.component';
import { RedComponent } from './red.component';
import { OrangeComponent } from './orange.component';

@NgModule({
    declarations: [
        BlueComponent,
        RedComponent,
        OrangeComponent
    ],
    imports: [CommonModule],
    exports: [
        BlueComponent,
        RedComponent,
        OrangeComponent
    ],
    providers: [],
})
export class ColorsModule { }

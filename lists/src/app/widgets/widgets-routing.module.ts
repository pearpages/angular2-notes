import { WidgetsPanelComponent } from './widgets-panel/widgets-panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'widgets', component: WidgetsPanelComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WidgetsRoutingModule { }
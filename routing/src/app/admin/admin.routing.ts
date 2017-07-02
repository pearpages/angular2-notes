import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../auth/auth.guard';
import { AdminComponent, ManageCrisesComponent, ManageHeroesComponent, AdminDashboardComponent } from '.';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    {path: 'crises', component: ManageCrisesComponent},
                    {path: 'heroes', component: ManageHeroesComponent},
                    {path: '', component: AdminDashboardComponent},
                ]
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const adminRoutedComponents = [AdminComponent, ManageCrisesComponent, ManageHeroesComponent, AdminDashboardComponent];
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisesComponent }    from './manage-crises.component';
import { ManageHeroesComponent }    from './manage-heroes.component';

import { AdminRoutingModule, adminRoutedComponents }       from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    adminRoutedComponents
  ]
})
export class AdminModule {}
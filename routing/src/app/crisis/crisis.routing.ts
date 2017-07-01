import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisCenterComponent, CrisisListComponent, CrisisDetailComponent, CrisisCenterHomeComponent } from '.';

const routes: Routes = [
  { path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CrisisRoutingModule { }

export const crisisRoutedComponents = [
  CrisisCenterComponent,
  CrisisListComponent,
  CrisisDetailComponent,
  CrisisCenterHomeComponent
];

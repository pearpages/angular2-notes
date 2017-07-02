import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisCenterComponent, CrisisListComponent, CrisisDetailComponent, CrisisCenterHomeComponent, CrisisDetailResolver } from '.';

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
            component: CrisisDetailComponent,
            resolve: {
              crisis: CrisisDetailResolver
            }
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
  providers: [
    CrisisDetailResolver
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

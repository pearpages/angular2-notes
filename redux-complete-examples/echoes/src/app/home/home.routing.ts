import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: Home }
]);

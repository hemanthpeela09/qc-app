import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsPage } from './reports.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsPage
  },
  {
    path: '/reports/hse',
    loadChildren: () => import('../hse/hse.module').then( m => m.HSEPageModule)
  },
  {
    path: '/reports/quality',
    loadChildren: () => import('../quality/quality.module').then( m => m.QualityPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsPageRoutingModule {}

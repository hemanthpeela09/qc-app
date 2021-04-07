import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HSEPage } from './hse.page';

const routes: Routes = [
  {
    path: '',
    component: HSEPage
  },
  /*{
    path: '/hse',
    loadChildren: () => import('../hse/hse.module').then( m => m.HSEPageModule)
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HSEPageRoutingModule {}

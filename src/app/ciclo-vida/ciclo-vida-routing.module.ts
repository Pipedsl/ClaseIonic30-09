import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloVidaPage } from './ciclo-vida.page';

const routes: Routes = [
  {
    path: '',
    component: CicloVidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicloVidaPageRoutingModule {}

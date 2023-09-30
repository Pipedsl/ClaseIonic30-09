import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CicloVidaPageRoutingModule } from './ciclo-vida-routing.module';

import { CicloVidaPage } from './ciclo-vida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicloVidaPageRoutingModule
  ],
  declarations: [CicloVidaPage]
})
export class CicloVidaPageModule {}

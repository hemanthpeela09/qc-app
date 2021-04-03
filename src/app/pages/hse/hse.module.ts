import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HSEPageRoutingModule } from './hse-routing.module';

import { HSEPage } from './hse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HSEPageRoutingModule
  ],
  declarations: [HSEPage]
})
export class HSEPageModule {}

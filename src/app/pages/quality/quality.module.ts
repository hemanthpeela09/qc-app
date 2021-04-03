import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualityPageRoutingModule } from './quality-routing.module';

import { QualityPage } from './quality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualityPageRoutingModule
  ],
  declarations: [QualityPage]
})
export class QualityPageModule {}

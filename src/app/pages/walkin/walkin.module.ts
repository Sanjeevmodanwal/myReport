import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkinPageRoutingModule } from './walkin-routing.module';

import { WalkinPage } from './walkin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkinPageRoutingModule
  ],
  declarations: [WalkinPage]
})
export class WalkinPageModule {}

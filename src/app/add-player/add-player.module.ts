import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlayerPageRoutingModule } from './add-player-routing.module';

import { AddPlayerPage } from './add-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlayerPageRoutingModule
  ],
  declarations: [AddPlayerPage]
})
export class AddPlayerPageModule {}

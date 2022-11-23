import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTeamPageRoutingModule } from './edit-team-routing.module';

import { EditTeamPage } from './edit-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTeamPageRoutingModule
  ],
  declarations: [EditTeamPage]
})
export class EditTeamPageModule {}

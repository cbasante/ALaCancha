import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTeamPageRoutingModule } from './create-team-routing.module';

import { CreateTeamPage } from './create-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateTeamPageRoutingModule
  ],
  declarations: [CreateTeamPage]
})
export class CreateTeamPageModule {}

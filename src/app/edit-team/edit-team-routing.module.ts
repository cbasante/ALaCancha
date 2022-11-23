import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTeamPage } from './edit-team.page';

const routes: Routes = [
  {
    path: '',
    component: EditTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTeamPageRoutingModule {}

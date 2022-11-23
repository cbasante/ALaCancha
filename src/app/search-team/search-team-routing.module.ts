import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTeamPage } from './search-team.page';

const routes: Routes = [
  {
    path: '',
    component: SearchTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTeamPageRoutingModule {}

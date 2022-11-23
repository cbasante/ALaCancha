import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlayerPage } from './add-player.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPlayerPageRoutingModule {}

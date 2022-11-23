import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'create-team',
    loadChildren: () => import('./create-team/create-team.module').then( m => m.CreateTeamPageModule)
  },
  {
    path: 'manage-team',
    loadChildren: () => import('./manage-team/manage-team.module').then( m => m.ManageTeamPageModule)
  },
  {
    path: 'add-player',
    loadChildren: () => import('./add-player/add-player.module').then( m => m.AddPlayerPageModule)
  },
  {
    path: 'edit-team',
    loadChildren: () => import('./edit-team/edit-team.module').then( m => m.EditTeamPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

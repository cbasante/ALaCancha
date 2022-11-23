import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-manage-team',
  templateUrl: 'manage-team.page.html',
  styleUrls: ['manage-team.page.scss'],
})
export class ManageTeamPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  salir(){
  }

  ngOnInit() {

    this.enableMenu();
  }

  ionViewDidEnter(){

    this.enableMenu();
  }

  enableMenu(){
    this.menuCtrl.enable(true);
  }

  onClick(){
    this.menuCtrl.toggle();
  }

}
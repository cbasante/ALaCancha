import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

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

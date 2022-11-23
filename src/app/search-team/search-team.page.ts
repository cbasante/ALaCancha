import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.page.html',
  styleUrls: ['./search-team.page.scss'],
})
export class SearchTeamPage implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {

    this.disableMenu();
  }

  ionViewDidEnter(){

    this.disableMenu();
  }

  disableMenu(){
    this.menuCtrl.enable(false);
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { usuarios } from 'src/models/usuarios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public usuario: usuarios = new usuarios;

  constructor(private menuCtrl: MenuController) {
    let data: any;
    if(localStorage.getItem('user')){
      data = JSON.parse(localStorage.getItem('user'));
      this.usuario.setValues(data);
    }
  }

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
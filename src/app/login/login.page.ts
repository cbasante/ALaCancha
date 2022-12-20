import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { usuarios } from 'src/models/usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  public usuario: usuarios;
  constructor(private router: Router, private menuCtrl: MenuController, public usuariosService: UsuariosService) { }

  ngOnInit() {
    this.form = new FormGroup({
      correo: new FormControl(''),
      contrasenia: new FormControl(''),
    });
    this.disableMenu();
  }

  ionViewDidEnter(){

    this.disableMenu();
  }

  disableMenu(){
    this.menuCtrl.enable(false);
  }

  loguear(){
    this.usuario = new usuarios();
    let data = {
      correo: this.form.get('correo')?.value,
      contrasenia: this.form.get('contrasenia')?.value,
    }
    this.usuario = new usuarios();
    this.usuario.setValues(data);
    this.usuariosService.login(this.usuario);

    if(localStorage.getItem('tk') == null || localStorage.getItem('tk') == undefined || localStorage.getItem('tk') == "" || localStorage.getItem('tk').length == 0){
      console.log("NO EXISTE");
      this.router.navigate(['login'])
    }else{
      console.log("EXISTE");
      this.router.navigate(['home'])
    }
  }

}
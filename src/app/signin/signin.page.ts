import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { usuarios } from 'src/models/usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  public form: FormGroup;
  public usuario: usuarios;
  constructor(public usuariosService: UsuariosService) { }

  ngOnInit() {
    this.form = new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      celular: new FormControl(''),
      correo: new FormControl(''),
      contrasenia: new FormControl(''),

    });
  }

  onSave(){
    this.usuario = new usuarios();
    let data = {
      nombres : this.form.get('nombres')?.value,
      apellidos: this.form.get('apellidos')?.value,
      celular: this.form.get('celular')?.value,
      correo: this.form.get('correo')?.value,
      contrasenia: this.form.get('contrasenia')?.value,
    }
    this.usuario = new usuarios();
    this.usuario.setValues(data);
    this.usuariosService.create(this.usuario);
  }
}
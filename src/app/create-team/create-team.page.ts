import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { equipos } from 'src/models/equipos';
import { EquiposService } from '../services/equipos.service';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {
  public form: FormGroup;
  public equipo: equipos;
  constructor(public equiposService: EquiposService) { }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
    });
  }

  crear(){
    this.equipo = new equipos();
    let data = {
      nombre : this.form.get('nombre')?.value,
      descripcion: this.form.get('descripcion')?.value,
    }
    this.equipo = new equipos();
    this.equipo.setValues(data);
    this.equiposService.create(this.equipo);
  }

}

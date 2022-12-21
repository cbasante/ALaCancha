import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { equipos } from 'src/models/equipos';
import { EquiposService } from '../services/equipos.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.page.html',
  styleUrls: ['./edit-team.page.scss'],
})
export class EditTeamPage implements OnInit {
  public form: FormGroup;
  equipo: any = {
    nombre: "",
    descripcion: ""
  };
  constructor(private actiavtedRoute: ActivatedRoute, public equiposService: EquiposService, private router: Router) { }

  ngOnInit() {
    this.actiavtedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get("equipoId")) {
        this.equiposService
          .getEquiposById(paramMap.get("equipoId"))
          .subscribe((res) => {
            this.equipo = res;
          });
      }
    });
    this.form = new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
    });
  }
  actualizar() {
    let equipo = new equipos();
    let data = {
      nombre: this.equipo.nombre,
      descripcion:this.equipo.descripcion,
    }
    equipo.setValues(data);
    this.equiposService
      .update(this.equipo.id, equipo)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(["/team"]);
      });
  }

}

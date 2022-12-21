import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { equipos } from 'src/models/equipos';
import { EquiposService } from '../services/equipos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  public form: FormGroup;
  public equipo: Observable<equipos[]>;
  constructor(private router: Router, private menuCtrl: MenuController, public equiposService: EquiposService) { }

  salir(){
  }

  ngOnInit() {
    this.equipo = this.equiposService.get();
    this.enableMenu();
    this.form = new FormGroup({
      id: new FormControl(''),
    });
  }

  ionViewDidEnter(){
    this.ngOnInit();
    this.enableMenu();
  }

  enableMenu(){
    this.menuCtrl.enable(true);
  }

  onClick(){
    this.menuCtrl.toggle();
  }

  eliminar(id: string){
    this.equiposService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
      },
      (err) => console.log(err)
    );
  }

  irEditar(id: string){
    localStorage.setItem('idEquipo', id);
    this.router.navigate(['edit-team'])
  }



}

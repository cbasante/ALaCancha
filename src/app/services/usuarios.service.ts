import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { create } from 'domain';
import { usuarios } from 'src/models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public urlServer = environment.url + '/usuarios';
  constructor(public http: HttpClient) {}

  create(data: usuarios){
    console.log("nombre: "+ data.nombres);
    return this.http.post<usuarios>(this.urlServer, data).subscribe();
  }
}
 
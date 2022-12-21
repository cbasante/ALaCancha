import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { equipos } from 'src/models/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  public urlServer = environment.url + '/equipos';

  constructor(public http: HttpClient) { }

  create(data: equipos){
    return this.http.post<equipos>(this.urlServer, data).subscribe();
  }
  get(){
    return this.http.get<equipos[]>(this.urlServer);
  }
  delete(id: string){
    console.log(id)
    return this.http.delete(`${this.urlServer}/${id}`);
  }
  getEquiposById(id: string) {
    return this.http.get<equipos>(`${this.urlServer}/${id}`);
  }
  update(id: string, data: equipos) {
    return this.http.put(`${this.urlServer}/${id}`, data);
  }

}

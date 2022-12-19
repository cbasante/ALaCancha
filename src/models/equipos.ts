import { usuarios } from "./usuarios";

export class equipos{
    public id: string;
    public nombre: string;
    public capitan: usuarios;
    public jugadores: usuarios[] = [];
    setValues(data: any){
        this.id = data.id;
        this.nombre = data.nombre;
        this.capitan = new usuarios;
        this.capitan.setValues(data.usuarios);
        this.jugadores = data.usuarios;
    }
    
    constructor(){

    }
}
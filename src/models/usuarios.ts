export class usuarios{
    public id: string;
    public nombres: string;
    public apellidos: string;
    public celular: string;
    public correo: string;
    public contrasenia: string;
    setValues(data: any){
        this.id = data.id;
        this.nombres = data.nombres;
        this.apellidos = data.apellidos;
        this.celular = data.celular;
        this.correo = data.correo;
        this.contrasenia = data.contrasenia;
    }
    

    constructor(){

    }
}
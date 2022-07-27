import { Grupo } from "./grupo";

export class Alumno{

    id:number;
    expediente: string;
    nombre: string;
    curp:string;
    genero:string;
    correo:string;
    estatus:string;
    foto: null;
    grupo:Grupo;

}
import { Materia } from './materia';
import { Alumno } from './alumno';

export class Calificaciones{
    idCalificaciones: number;
    calUnidadUno: number;
    calUnidadDos: number;
    calUnidadTres: number;
    idAlumno: Alumno;
    idMateria: Materia;
}
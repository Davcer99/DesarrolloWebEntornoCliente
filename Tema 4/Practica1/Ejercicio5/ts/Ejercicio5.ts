import { Alumno } from "./Ejercicio4";
class Curso extends Alumno {
  private nombreCurso:string;

  constructor(nombre:string,edad:number,curso:string,nombreCurso:string){
    super(nombre,edad,curso)  
    this.nombreCurso=nombreCurso;
  }

  public mostrarDatosYCurso(): any {
   console.log(`Mi nombre es ${super.getNombre}\n Tengo ${super.getEdad} años\n Estoy en ${super.getCurso} ${this.getCurso}`)
  }
}
const al = new Curso("Juan", 23,"1CFSJ","Primer curso de grado superior de DAW")
al.mostrarDatosYCurso()
  
  
  
  
class Alumno {
  private nombre:string;
  private edad:number;
  private curso:string;

  constructor(nombre:string, edad:number, curso:string){
    this.nombre= nombre;
    this.edad = edad;
    this.curso= curso;
  }

  public mostrarDatos():string {
    let result:string = `nombre: ${this.nombre} \n edad: ${this.edad} \n curso: ${this.curso}`;
    return result;
  }

  
  
  public getNombre() : string {
    return this.nombre;
  }
  public getEdad():number{
    return this.edad;
  }
  public getCurso():string{
    return this.curso;
  }
}
class Curso extends Alumno {
  private nombreCurso:string;

  constructor(nombre:string,edad:number,curso:string,nombreCurso:string){
    super(nombre,edad,curso)  
    this.nombreCurso=nombreCurso;
  }

  public getNombreCurso():string{
    return this.nombreCurso;
  }
  public mostrarDatosYCurso(): any {
   console.log(`Mi nombre es ${this.getNombre()}\n Tengo ${this.getEdad()} años\n Estoy en ${this.getCurso()} ${this.getNombreCurso()}`)
  }
}
const al = new Curso("Juan", 23,"1CFSJ","Primer curso de grado superior de DAW")
al.mostrarDatosYCurso()
  
  
  
  
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

  
}
const al = new Alumno("Juan", 23,"1CFSJ")
console.log(al.mostrarDatos());
  
  
  
  
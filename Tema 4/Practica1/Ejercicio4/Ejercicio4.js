var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.mostrarDatos = function () {
        var result = "nombre: ".concat(this.nombre, " \n edad: ").concat(this.edad, " \n curso: ").concat(this.curso);
        return result;
    };
    return Alumno;
}());
var al = new Alumno("Juan", 23, "1CFSJ");
console.log(al.mostrarDatos());

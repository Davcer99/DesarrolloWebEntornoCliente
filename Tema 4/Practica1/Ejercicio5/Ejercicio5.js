"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Ejercicio4_1 = require("./ts/Ejercicio4");
var Curso = /** @class */ (function (_super) {
    __extends(Curso, _super);
    function Curso(nombre, edad, curso, nombreCurso) {
        var _this = _super.call(this, nombre, edad, curso) || this;
        _this.nombreCurso = nombreCurso;
        return _this;
    }
    Curso.prototype.mostrarDatosYCurso = function () {
        console.log("Mi nombre es ".concat(_super.prototype.getNombre, "\n Tengo ").concat(_super.prototype.getEdad, " a\u00F1os\n Estoy en ").concat(_super.prototype.getCurso, " ").concat(this.getCurso));
    };
    return Curso;
}(Ejercicio4_1.Alumno));
var al = new Curso("Juan", 23, "1CFSJ", "Primer curso de grado superior de DAW");
al.mostrarDatosYCurso();

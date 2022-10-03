'use strict'
function mostrarFecha() {
    alert("onclic funciona")
    const fecha = new Date();
    alert("Hoy estamos a : " + diaDeLaSemana(fecha.getDay())+ ", "+ fecha.getDate()+ " de "+ meses(fecha.getMonth()) + " de " + fecha.getFullYear());
};
function diaDeLaSemana(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
            break;
        case 2:
            return "Martes";
            break;
        case 3:
            return "Miercoles";
            break;
        case 4:
            return "Jueves";
            break;
        case 5:
            return "Viernes";
            break;
        case 6:
            return "Sabado";
            break;
        case 0:
            return "Domingo";
            break;  
    }
}
function meses(numero) {
    switch (numero) {
        case 0:
            return "Enero";
            break;
        case 1:
            return "Febrero";
            break;
        case 2:
            return "Marzo";
            break;
        case 3:
            return "Abril";
            break;
        case 4:
            return "Mayo";
            break;
        case 5:
            return "Junio";
            break;
        case 6:
            return "Julio";
            break; 
        case 7:
            return "Agosto";
            break;
        case 8:
            return "Septiembre";
            break; 
        case 9:
            return "Octubre";
            break;
        case 10:
            return "Noviembre";
            break;
        case 11:
            return "Diciembre";
            break;
    
    }
}
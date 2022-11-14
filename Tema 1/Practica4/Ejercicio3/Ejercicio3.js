'use strict'
function cambiarTamaño(event) {
    var evento = event || window.event;
    switch(evento.type) {
    case 'mouseover':
    this.style = "font-size: 16pt"
    break;
    case 'mouseout':
    this.style = "font-size: 12pt"
    break;
    }
    }
    window.onload = function() {
    document.getElementById("contenedor").onmouseover = cambiarTamaño;
    document.getElementById("contenedor").onmouseout = cambiarTamaño;
    }

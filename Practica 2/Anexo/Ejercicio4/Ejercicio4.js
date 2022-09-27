'use strict'
function tirar(){
    var contador = document.getElementById('valor').value;
    contador = parseInt(contador,10);
    var numeroAleatorio = numAleatorio(1,10);
    console.log(numeroAleatorio);
    if (contador == numeroAleatorio) {
        alert("Enhorabuena");
    }else{
        alert("Sigue probando")
    }
    
}
function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
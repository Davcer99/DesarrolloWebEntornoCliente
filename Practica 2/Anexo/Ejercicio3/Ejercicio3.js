'use strict'

function incrementar(){
    var contador = document.getElementById('valor').value;
    contador = parseInt(contador,10);
    var valor = contador + 10;
    document.getElementById('valor').value = valor;
}
function rset(){
    document.getElementById('valor').value = 0;
}
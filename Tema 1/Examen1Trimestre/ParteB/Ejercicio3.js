window.onload = function (){
   document.getElementById('formulario').addEventListener('submit', calcularPrecio) 
}
function calcularPrecio() {
    //Seleccionar con el DOM los entrantes
    let entrantes = document.getElementsByName('entrante');
    //Seleccionar segundo
    let segundos = document.getElementsByName('segundos');
    //contadores de precio y de entrantes
    let numEntrantes = 0;
    let precioTotal = 0;
    let platosSeleccionados = "";

    entrantes.forEach(entrante => {
        if(entrante.checked){
            numEntrantes++;
            precioTotal += 5;
            platosSeleccionados += (" -"+ entrante.value);
        }
    });

    segundos.forEach(segundo => {
        if(segundo.checked){
            precioTotal += 10;
            platosSeleccionados += (" -"+segundo.value)
        }
    });

    //se le suma el precio del postre
    precioTotal += 5;
    platosSeleccionados += " -PostreIncluido"

    alert('Tienes seleccionados: ' + numEntrantes + ' Entrantes y 1 Segundo.\nPrecio final: ' + precioTotal +'€'+"\nLos platos seleccionados son : " + platosSeleccionados)
}
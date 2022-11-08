window.onload = function(){
    var negrita = document.getElementById('negrita')
    negrita.addEventListener('change', hacerNegrita)
    var cursiva = document.getElementById('cursiva')
    cursiva.addEventListener('change', hacerCursiva)
}
function hacerNegrita() {
    var parrafo = document.getElementById('parrafo')
    if (this.checked){
        parrafo.style.fontWeight= "bold"
    }else{
        parrafo.style.fontWeight= ""
    }
}

function hacerCursiva() {
    var parrafo = document.getElementById('parrafo')
    if (this.checked){
        parrafo.style.fontStyle= "italic"
    }else{
        parrafo.style.fontStyle= ""
    }
}
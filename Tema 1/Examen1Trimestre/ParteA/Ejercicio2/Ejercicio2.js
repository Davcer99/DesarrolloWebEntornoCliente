window.onload = function(){
    var primerEnlace = document.getElementById('tamany')
    primerEnlace.addEventListener('mouseenter', aumentar)
    primerEnlace.addEventListener('mouseleave', disminuir)
}
function aumentar() {
    var enlaces = document.getElementsByTagName('a');
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].style.fontSize = "20pt"
    }
}

function disminuir() {
    var enlaces = document.getElementsByTagName('a');
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].style.fontSize = "12pt"
    }
}
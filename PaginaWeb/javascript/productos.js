window.onload = function(){
    var productos = document.getElementsByClassName('producto');
   for (let i = 0; i < productos.length; i++) {
        productos[i].addEventListener('mouseenter', ampliar)
        productos[i].addEventListener('mouseleave', disminuir)
   }
   
    
}

function ampliar() {
    this.style.transform = "scale(1.1)"
}

function disminuir() {
    this.style.transform = ""
}
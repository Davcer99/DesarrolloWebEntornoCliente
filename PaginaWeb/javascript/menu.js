window.onload = function(){
    let menuToogle = document.getElementById('icono');
    menuToogle.addEventListener('click',desplegar)
}

function desplegar(event) {
    let menu = document.getElementById('barra_de_navegacion');
    menu.classList.toggle('show');
}
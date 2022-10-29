window.onload = function(){
    let menuToogle = document.getElementById('icono');
    menuToogle.addEventListener('click',desplegar)
}

function desplegar(event) {
    let menu = document.getElementById('barra_de_navegacion');
    let menuToogleIcon = document.querySelector('.menu-toogle i')
    menu.classList.toggle('show');

    if(menu.classList.contains('show')){
        menuToogleIcon.setAttribute('class','fa fa-times');
    }else{
        menuToogleIcon.setAttribute('class','fa fa-bars')
    }
}
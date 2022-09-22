'use strict'
let myWindow;
if (navigator.userAgent != 'msie'){
    myWindow = window.open("", "", "width=200, height=100");
    myWindow = resizeTo(300,300);
}else{
    alert("Operación no permitida");
};
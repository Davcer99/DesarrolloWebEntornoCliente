'use strict'
let myWindow;
if (navigator.userAgent != 'msie'){
    alert("Operación no permitida");
}else{
    myWindow = window.open("", "", "width=200, height=100");
    myWindow = resizeTo(300,300);
};
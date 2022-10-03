'use strict'
let myWindow;
if (navigator.userAgent.indexOf('msie') != -1){
    myWindow = window.open("", "", "width=200, height=100");
    myWindow = resizeTo(300,300);
}else{
    alert("Operación no permitida");
};
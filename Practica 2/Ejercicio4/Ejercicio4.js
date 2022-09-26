'use strict'
let myWindow;
if (navigator.userAgent.indexOf('msie') != -1){
    alert("Operación no permitida");
}else{
    myWindow = window.open("", "", "width=200, height=100");
    myWindow = resizeTo(300,300);
};
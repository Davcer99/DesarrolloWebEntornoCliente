'use strict'
var url = window.location;
var pathname = window.location.pathname;
var protocol = window.location.protocol;
alert(url);
alert (pathname);
alert(protocol);
function redirect() {
    window.location.href = "https://www.google.com/";
}
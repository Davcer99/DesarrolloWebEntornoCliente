<?php
$usuario = $_GET["user"];
$password = $_GET["password"];
$okUsuario = false;
$okPass = false;

if ($usuario == "pepe") {
    $okUsuario = true;
}
if($password == "hola"){
    $okPass = true;
}

switch (true) {
    case $okPass && $okUsuario:
        echo ("Usuario correcto");
        break;
    case $okPass && !$okUsuario:
        echo ("Usuario incorrecto");
        break;
    case !$okPass && $okUsuario:
        echo ("Contraseña incorrecta");
        break;
    case !$okPass && !$okUsuario:
        echo ("Usuario y contraseña incorrectos");
        break;
    default:
        # code...
        break;
}
?>
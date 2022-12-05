<?php
$nombre = $_GET['nombre'];
$apellido = $_GET['apellidos'];
$edad = $_GET['edad'];

$result = "Has introducido los siguientes valores: \nNombre: $nombre \nApellidos: $apellido \nEdad: $edad";
echo($result)
?>
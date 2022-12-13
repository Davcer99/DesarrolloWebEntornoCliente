<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellidos'];
$edad = $_POST['edad'];

$result = "Has introducido los siguientes valores: \nNombre: $nombre \nApellidos: $apellido \nEdad: $edad";
echo($result)
?>
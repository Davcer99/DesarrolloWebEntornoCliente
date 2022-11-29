<meta charset="utf-8"/>
<?php
    // Rescatamos el parámetro que nos llega mediante la url que invoca xmlhttp
    $nombre=$_GET["nombreAlumno"];
    $resultadoConsulta = "";
    $msg = "";
    if ($nombre) {
        $link = mysqli_connect("127.0.0.1", "root", "sa");
        mysqli_select_db($link, "prueba1");
        $tildes = $link->query("SET NAMES 'utf8'"); //Para que se muestren las tildes correctamente
        $result = mysqli_query($link, "SELECT nombre, edad, estudios, localidad
                    FROM alumnos 
                    WHERE nombre = '".$nombre."'");

    while ($fila = mysqli_fetch_array($result)){
    $resultadoConsulta .= 'Nombre: '.$fila['nombre']."<br> Edad: ". $fila['edad']."<br> Estudios: ".$fila['estudios']. "<br> Localidad: ". $fila['localidad']. "<br>";
    }

    //Devolvemmos la cadena de respuesta
    echo $msg.$resultadoConsulta;

    mysqli_free_result($result);
    mysqli_close($link);
    } else {
        echo 'No se han recibido datos';
    }
?>
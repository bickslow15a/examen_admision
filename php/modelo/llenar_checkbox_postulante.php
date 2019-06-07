<?php

include('../conexion/conn.php');

$query = "SELECT id_postulante, nombre, apellido_paterno, apellido_materno, dni from postulante INNER JOIN datos_personales WHERE postulante.id_datos = datos_personales.id_datos";
$result = mysqli_query($connection, $query);
if(!$result) {
  die('Query Failed'. mysqli_error($connection));
}

$json = array();
while($row = mysqli_fetch_array($result)) {
  $json[] = array(
    'id_postulante' => $row['id_postulante'],
    'nombre' => $row['nombre'],
    'apellido_paterno' => $row['apellido_paterno'],
    'apellido_materno' => $row['apellido_materno'],
    'dni' => $row['dni']
  );
}

$jsonstring = json_encode($json);
echo $jsonstring;
?>

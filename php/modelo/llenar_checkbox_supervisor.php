<?php

include('../conexion/conn.php');

$query = "SELECT id_profesor, nombre, apellido_paterno, apellido_materno, dni from profesor INNER JOIN datos_personales WHERE profesor.id_datos = datos_personales.id_datos";
$result = mysqli_query($connection, $query);
if(!$result) {
  die('Query Failed'. mysqli_error($connection));
}

$json = array();
while($row = mysqli_fetch_array($result)) {
  $json[] = array(
    'id_profesor' => $row['id_profesor'],
    'nombre' => $row['nombre'],
    'apellido_paterno' => $row['apellido_paterno'],
    'apellido_materno' => $row['apellido_materno'],
    'dni' => $row['dni']
  );
}

$jsonstring = json_encode($json);
echo $jsonstring;
?>

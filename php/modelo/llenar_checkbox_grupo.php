<?php

include('../conexion/conn.php');

$query = "SELECT id_grupo, nombre, lugar_examen from grupos INNER JOIN sede_examen WHERE grupos.id_sede_examen = sede_examen.id_sede_examen";
$result = mysqli_query($connection, $query);
if(!$result) {
  die('Query Failed'. mysqli_error($connection));
}

$json = array();
while($row = mysqli_fetch_array($result)) {
  $json[] = array(
    'id_grupo' => $row['id_grupo'],
    'nombre' => $row['nombre'],
    'lugar_examen' => $row['lugar_examen']
      );
}

$jsonstring = json_encode($json);
echo $jsonstring;
?>

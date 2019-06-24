<?php

include('../conexion/conn.php');


$id_examen= $_POST['id_examen'];
$query = "SELECT id_grupo from examen_grupo WHERE '$id_examen' = id_examen";
$result = mysqli_query($connection, $query);
if(!$result) {
  die('Query Failed'. mysqli_error($connection));
}

$json = array();
while($row = mysqli_fetch_array($result)) {
  $json[] = array(
     $row['id_grupo']
      );
}

$jsonstring = json_encode($json);
echo $jsonstring;
?>

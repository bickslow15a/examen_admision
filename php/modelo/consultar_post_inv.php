<?php

include('../conexion/conn.php');


$id_examen = $_POST['pos_in'];
$query = "SELECT id_postulante from select_indiv_examen WHERE '$id_examen' = id_examen";
$result = mysqli_query($connection, $query);
if(!$result) {
  die('Query Failed'. mysqli_error($connection));
}

$json = array();
while($row = mysqli_fetch_array($result)) {
  $json[] = array(
   $row['id_postulante']
      );
}

$jsonstring = json_encode($json);
echo $jsonstring;
?>

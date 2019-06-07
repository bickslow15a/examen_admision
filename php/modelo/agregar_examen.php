<?php

include('../conexion/conn.php');



if(isset($_POST['usuario'])) {
  # echo $_POST['name'] . ', ' . $_POST['description'];

 $fecha= $_POST['fecha'];
 $array_fecha = explode("-", $fecha);
 $fecha_inicio = date("Y-m-d H:i:s", strtotime(str_replace('/', '-', $array_fecha[0]))) ;
 $fecha_fin = date("Y-m-d H:i:s", strtotime(str_replace('/', '-', $array_fecha[1]))) ;
 $nota= $_POST['min_max'];
 $array_nota = explode(",", $nota);
 $minima_nota = intval($array_nota[0]);
 $maxima_nota = intval($array_nota[1]);
 $id_profesor= intval($_POST['usuario']);
 $nom_examen= $_POST['nom_examen'];
 $porcentaje= $_POST['porcentaje'];
 $duracion= $_POST['duracion'];
 $num_preguntas= intval($_POST['num_pregunta']);
 // $publicar_nota=$_POST['r1'];
 $publicar_nota= $_POST['publicar_nota'];
 $instr_examen= $_POST['instr'];
 $value_5= $_POST['postulante'];
 $value_11= $_POST['grupo'];
 // console.log($nom_examen);  

 $query = "INSERT INTO examen VALUES (DEFAULT, '$id_profesor', '$nom_examen', '$fecha_inicio', '$fecha_fin', '$duracion', '$porcentaje', '$maxima_nota', '$minima_nota', '$num_preguntas', '$publicar_nota', '$instr_examen', DEFAULT)";
  
 $result = mysqli_query($connection, $query);
 
 //    --------------------------------- Testeo -----------------------------

 // echo $fecha;
 // echo "<br>";
 // echo  $fecha_inicio;
 // echo "<br>";
 // echo  $fecha_fin;



//  if (!$result) {
//   die('Query Failed.');
// }



}

?>

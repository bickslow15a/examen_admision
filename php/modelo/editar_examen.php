<?php

include('../conexion/conn.php');

if(isset($_POST['usuario'])) {
  # echo $_POST['name'] . ', ' . $_POST['description'];

	$fecha= $_POST['fecha'];
	$id_examen= $_POST['id_examen'];
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
	$postulante= $_POST['postulante'];
	$grupo= $_POST['grupo'];
 // console.log($nom_examen);  

	$query = "UPDATE examen SET  id_profesor = '$id_profesor', nom_examen =  '$nom_examen', fecha_inicio =  '$fecha_inicio', fecha_fin =  '$fecha_fin', duracion =  '$duracion', porcentaje =  '$porcentaje', maxima_nota =  '$maxima_nota', minima_nota =  '$minima_nota', num_preguntas =  '$num_preguntas', publicar_nota =  '$publicar_nota', instr_examen =  '$instr_examen' WHERE id_examen = '$id_examen' ";

	$result = mysqli_query($connection, $query);

	$query = "DELETE FROM select_indiv_examen WHERE id_examen = '$id_examen' ";

	$result = mysqli_query($connection, $query);
	if($postulante!="vacio"){
		$postulante = explode(',',$postulante);  
		foreach ($postulante as $row) {
			$query = "INSERT INTO select_indiv_examen(id_examen, id_postulante) VALUES('".$id_examen."', '".$row."')"; 
			$result = mysqli_query($connection, $query);
		}
	}

	$query = "DELETE FROM examen_grupo WHERE id_examen = '$id_examen' ";
	$result = mysqli_query($connection, $query);
	if($grupo!="vacio"){
		$postulante = explode(',',$grupo);  
		foreach ($postulante as $row) {
			$query = "INSERT INTO examen_grupo(id_examen, id_grupo) VALUES('".$id_examen."', '".$row."')"; 
			$result = mysqli_query($connection, $query);
		}
	}

 //    --------------------------------- Testeo -----------------------------


 // echo $nota;
 // echo "<br>";
 // echo  $fecha_inicio;
 // echo "<br>";
 // echo  $fecha_fin;


//  if (!$result) {
//   die('Query Failed.');
// }



}

?>

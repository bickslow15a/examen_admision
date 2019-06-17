<?php

include('../conexion/conn.php');


$query = "SELECT e.id_examen, e.id_profesor, p.id_datos, d.dni, CONCAT(d.nombre, ' ', d.apellido_paterno) as nombreCompleto, e.nom_examen, e.fecha_inicio, e.fecha_fin, CONCAT(e.fecha_inicio, ' - ', e.fecha_fin) as fecha, e.duracion, e.porcentaje, e.maxima_nota, e.minima_nota, CONCAT(e.maxima_nota, ',', e.minima_nota) as min_max, e.num_preguntas, e.publicar_nota, e.instr_examen  from examen e INNER JOIN profesor p ON e.id_profesor = p.id_profesor INNER JOIN datos_personales d ON p.id_datos = d.id_datos ORDER BY e.id_examen DESC";
$result = mysqli_query($connection, $query);
if(!$result) {
  die('Query Failed'. mysqli_error($connection));
}


while($data = mysqli_fetch_assoc($result)) {
  $arreglo["data"][] = array_map("utf8_encode", $data);
}

echo json_encode($arreglo);

mysqli_free_result($result);

?>

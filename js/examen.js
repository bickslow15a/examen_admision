$(document).ready(function() {




	llenar_checkbox_supervisor();
	llenar_checkbox_postulante();
  listar_examen();

	$('#formulario_examen').submit(e => {
		 //previeneque que nos lleve a otra pagina el boton submit
		 e.preventDefault();

		 const datos = {
		 	usuario: $('#usuario').val(),
		 	fecha: $('.fecha').val(),
		 	porcentaje: $('.porcentaje').val(),
		 	min_max: $('.min_max').val(),
		 	postulante: $('#postulante').val().length > 0 ? $('#postulante').val() : 'vacio',
		 	nom_examen: $('#nom_examen').val(),
		 	duracion: $('#duracion').val(),
		 	num_pregunta: $('.num_pregunta').val(),
		 	publicar_nota: $('.pub_si').prop('checked') ? $('.pub_si').val() : $('.pub_no').val(),
		 	grupo: $('#grupo').val().length > 0  ? $('#grupo').val() : 'vacio',
		 	instr: $('#instr').val()
      // id: $('#taskId').val()
    };
  // const url = edit === false ? 'task-add.php' : 'task-edit.php';
  const url = 'php/modelo/agregar_examen.php'; 
  console.log(datos, url);
  $.post(url, datos, (response) => {
  	console.log(response);
  	$('#formulario_examen').trigger('reset');
  	llenar_checkbox_supervisor();
  	llenar_checkbox_postulante();
  });
});

	function llenar_checkbox_supervisor() {
		$.ajax({
			url: 'php/modelo/llenar_checkbox_supervisor.php',
			type: 'GET',
			success: function(response) {
      	// comprobar el contenido del checkbox
  	// console.log(response);

  	const tasks = JSON.parse(response);

  	let template = '';
  	tasks.forEach(task => {
  		template += `
  		<option value="${task.id_profesor}">${task.nombre} ${task.apellido_paterno} ${task.apellido_materno} - ${task.dni}</option>
  		`
  	});
  	$('#usuario').html(template);
  }
});
	}

  function llenar_checkbox_postulante() {
    $.ajax({
     url: 'php/modelo/llenar_checkbox_postulante.php',
     type: 'GET',
     success: function(response) {
      	// comprobar el contenido del checkbox
  	// console.log(response);

  	const tasks = JSON.parse(response);

  	let template = '';
  	tasks.forEach(task => {
  		template += `
  		<option value="${task.id_postulante}">${task.nombre} ${task.apellido_paterno} ${task.apellido_materno} - ${task.dni}</option>
  		`
  	});
  	$('#postulante').html(template);
  }
});
  }

  // listar formulario_examen


function listar_examen() {
  $('#listar_examen').DataTable({
     "destroy":true,
      "ajax":{
        "method":"POST",
        "url": "php/modelo/listar_examen.php"
      },
      "columns":[
        {"data":"nombreCompleto"},
        {"data":"nom_examen"},
        {"data":"fecha_inicio"},
        {"data":"fecha_fin"},
        {"data":"duracion"},
        {"data":"porcentaje"},
        {"data":"maxima_nota"},
        {"data":"minima_nota"},
        {"data":"num_preguntas"},
        {"data":"publicar_nota"},
        {"data":"instr_examen"},
        {"defaultContent":'<button type="button" class="editar btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Editar Examen"><i class="fa fa-pencil-square-o"></i></button>  <button type="button" data-toggle="tooltip" data-placement="bottom" title="Eliminar Examen" class="eliminar btn btn-danger" data-toggle="modal" data-target="#modalEliminar" ><i class="fa fa-trash-o"></i></button>'}
      ],
    'language'    : idioma_español
  })
}


// 		function llenar_checkbox_grupos() {
// 		$.ajax({
// 			url: 'php/modelo/llenar_checkbox_grupos.php',
// 			type: 'GET',
// 			success: function(response) {
//       	// comprobar el contenido del checkbox
//   	// console.log(response);

//   	const tasks = JSON.parse(response);

//   	let template = '';
//   	tasks.forEach(task => {
//   		template += `
//   		<option value="${task.id_profesor}">${task.nombre} ${task.apellido_paterno} ${task.apellido_materno} - ${task.dni}</option>
//   		`
//   	});
//   	$('#usuario').html(template);
//   }
// });
// 	}



});

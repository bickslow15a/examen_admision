$(document).ready(function() {




	llenar_checkbox_supervisor();
	llenar_checkbox_postulante();
  llenar_checkbox_grupo();
  listar_examen();

  $('#formulario_examen').submit(e => {
		 //previeneque que nos lleve a otra pagina el boton submit
		 e.preventDefault();

		 const datos = {
		 	usuario: $('#usuario').val(),
		 	fecha: $('.fecha').val(),
		 	porcentaje: $('.porcentaje').val(),
		 	min_max: $('.min_max').val(),
		 	postulante: $('#postulante').val().length > 0 ? ($('#postulante').val()).toString() : 'vacio',
		 	nom_examen: $('#nom_examen').val(),
		 	duracion: $('#duracion').val(),
		 	num_pregunta: $('.num_pregunta').val(),
		 	publicar_nota: $('.pub_si').prop('checked') ? $('.pub_si').val() : $('.pub_no').val(),
		 	grupo: $('#grupo').val().length > 0  ? ($('#grupo').val()).toString() : 'vacio',
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
       $('#usuario').append(template);
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




  function llenar_checkbox_grupo() {
   $.ajax({
     url: 'php/modelo/llenar_checkbox_grupo.php',
     type: 'GET',
     success: function(response) {
       // comprobar el contenido del checkbox
      // console.log(response);

      const tasks = JSON.parse(response);

      let template = '';
      tasks.forEach(task => {
       template += `
       <option value="${task.id_grupo}">${task.nombre} - ${task.lugar_examen}</option>
       `
     });
      $('#grupo').html(template);
    }
  });
 }



    // listar formulario_examen


    function listar_examen() {
      var table = $('#listar_examen').DataTable({
       "destroy":true,
       "ajax":{
        "method":"POST",
        "url": "php/modelo/listar_examen.php"
      },
      "columns":[
      {"defaultContent":'<button type="button" class="editar btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Editar Examen"><i class="fa fa-pencil-square-o"></i></button>  <button type="button" data-toggle="tooltip" data-placement="bottom" title="Eliminar Examen" class="eliminar btn btn-danger" data-toggle="modal" data-target="#modalEliminar" ><i class="fa fa-trash-o"></i></button>'},
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
      {"data":"instr_examen"}
      ],
      'language'    : idioma_español
    });
      editar_examen("#listar_examen tbody", table);
    }

    function editar_examen(tbody, table){
      $(tbody).on("click", "button.editar", function(){
        var data = table.row($(this).parents("tr")).data();
        console.log(data);
        var id_examen = $("#id_examen").val(data.id_examen),
        usuario = $(`#usuario option[value=${data.id_profesor}]`).attr("selected", true),
        porcentaje = $("#porcentaje").val(data.porcentaje),
        min_max = $("#min_max").val(data.min_max),
        nom_examen = $("#nom_examen").val(data.nom_examen),
        duracion = $("#duracion").append($('<option  selected>', {value: data.duracion})),
        fecha = $("#instr").val(data.instr_examen)
        if(data.publicar_nota == 'si') { $('.pub_si').prop("checked", true);}else{$('.pub_no').prop("checked", true);};
        editar_postulantes(id_examen);
        consultar_grupo(id_examen);
      });
    }




    function editar_postulantes(id_examen) {
      $.ajax({
       url: 'php/modelo/consultar_post_inv.php',
       type: 'POST',
       data: id_examen,
       success: function(response) {
        const id_postulante = JSON.parse(response);
        let template = '';
        id_postulante.forEach(id_postulante => {
         template += `
         '${id_postulante.id_postulante}',
         `
       });
        template=template.slice(0,-1);
        $('#postulante').val([template]).trigger('change');
      }
    });
    }

        function consultar_grupo(id_examen) {
      $.ajax({
       url: 'php/modelo/consultar_grupo.php',
       type: 'POST',
       data: id_examen,
       success: function(response) {
        const grupo = JSON.parse(response);
        let template = '';
        grupo.forEach(grupo => {
         template += `
         '${grupo.id_grupo}',
         `
       });
        template=template.slice(0,-1);
        $('#grupo').val([template]).trigger('change');
      }
    });
    }




  });

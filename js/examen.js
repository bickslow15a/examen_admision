$(document).ready(function() {
 llenar_checkbox_supervisor();
 llenar_checkbox_postulante();
 llenar_checkbox_grupo();
 listar_examen();
 var b_fecha = $('.fecha').val();

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
        limpiar_formulario();
       });
      });

function limpiar_formulario() {
         $('input[type="text"]').val('');
         $('textarea').val('');
         $('.fecha').val(b_fecha);
         template = '';
          template += `
          <option value="00:30:00" selected="selected">30 minutos</option>
          <option value="01:00:00">1 hora</option>
          <option value="01:15:00">1 hora 15 minutos</option>
          <option value="01:30:00">1 hora 30 minutos</option>
          <option value="02:00:00">2 horas </option>
          <option value="02:30:00">2 horas 30 minutos</option>
          <option value="03:00:00">3 horas</option>
          `
         $('.num_pregunta').slider('setValue',100);
         $('.porcentaje').slider('setValue',65);
         $('.min_max').slider('setValue',[30, 60]);
         $('#duracion').html(template);
         $(".pub_si").iCheck('check');
         llenar_checkbox_supervisor();
         llenar_checkbox_postulante();
         llenar_checkbox_grupo();
}

 function llenar_checkbox_supervisor() {
  $.ajax({
   url: 'php/modelo/llenar_checkbox_supervisor.php',
   type: 'GET',
   success: function(response) {
        	// comprobar el contenido del checkbox
    	   // console.log(response);

        var supervisor = JSON.parse(response);

        let template = '';
        supervisor.forEach(task => {
          template += `
          <option value="${task.id_profesor}">${task.nombre} ${task.apellido_paterno} ${task.apellido_materno} - ${task.dni}</option>
          `
        });
        $('#usuario').html(template);
        return supervisor;
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
          usuario = data.id_profesor,
          nombre = data.nombreCompleto,
          dni = data.dni,
          porcentaje = parseInt(data.porcentaje),
          min = parseInt(data.minima_nota),
          max = parseInt(data.maxima_nota),
          nom_examen = $("#nom_examen").val(data.nom_examen),
          duracion = data.duracion,
          instr = $("#instr").val(data.instr_examen),
          fecha = $("#fecha").val(data.fecha),
          num_preguntas = parseInt(data.num_preguntas),
          publ_nota = data.publicar_nota
          flag=false;
          id=[usuario];
          duracion=[duracion];

          if(publ_nota=="si"){
            $(".pub_si").iCheck('check'); 
          }else{
            $(".pub_no").iCheck('check'); 
          }

          $('.num_pregunta').slider('setValue',num_preguntas);
          $('.porcentaje').slider('setValue',porcentaje);
          $('.min_max').slider('setValue',[min, max]);
            // --------------------------------------------------------------------------------------------


            $.ajax({
             url: 'php/modelo/llenar_checkbox_supervisor.php',
             type: 'GET',
             success: function(response) {
              i=0;
              template = '';
              num=id.length;
              var supervisor = JSON.parse(response);
              supervisor.forEach(task => {
                if(id[i]==task.id_profesor){
                  template += `
                  <option value="${task.id_profesor}" selected="selected">${task.nombre} ${task.apellido_paterno} ${task.apellido_materno} - ${task.dni}</option>
                  `
                }else{
                  template += `
                  <option value="${task.id_profesor}">${task.nombre} ${task.apellido_paterno} ${task.apellido_materno} - ${task.dni}</option>
                  `
                }

                if(i<num-1){
                  i=i+1;
                }

              });
              $('#usuario').html(template);

            }

          });

              // -----------------------------------------------------------------------------------------------
              $.ajax({
               url: 'php/modelo/llenar_checkbox_postulante.php',
               type: 'GET',
               success: function(response) {
                var tasks = JSON.parse(response);
                        // -------------------------------------
                const datos = {
                  pos_in: $("#id_examen").val() }
                  const url = 'php/modelo/consultar_post_inv.php'; 
                  console.log(datos, url);
                  $.post(url, datos, (response) => {

                   console.log(response);
                   const pos = JSON.parse(response);
                   i=0;
                   template = '';
                   num=pos.length;
                   tasks.forEach(task => {
                    if(pos[i]==task.id_postulante){
                      template += `
                      <option value="${task.id_postulante}" selected="selected">${task.nombre} ${task.apellido_paterno} ${task.apellido_materno} - ${task.dni}</option>
                      `
                    }else{
                     template += `
                     <option value="${task.id_postulante}">${task.nombre} ${task.apellido_paterno} ${task.apellido_materno} - ${task.dni}</option>
                     `
                   }

                   if(i<num-1){
                    i=i+1;
                  }

                });
                   $('#postulante').html(template);

                 });

                  // ---------------------------------------------------
                }
              });

              // -----------------------------------------------------------------------------------------------


             // -----------------------------------------------------------------------------------------------
              $.ajax({
               url: 'php/modelo/llenar_checkbox_grupo.php',
               type: 'GET',
               success: function(response) {
                var tasks = JSON.parse(response);
                        // -------------------------------------
                const datos = {
                  id_examen: $("#id_examen").val() }
                  const url = 'php/modelo/consultar_grupo.php'; 
                  console.log(datos, url);
                  $.post(url, datos, (response) => {

                   console.log(response);
                   const pos = JSON.parse(response);
                   i=0;
                   template = '';
                   num=pos.length;
                   tasks.forEach(task => {
                     if(pos[i]==task.id_grupo){
                      template += `
                      <option value="${task.id_grupo}" selected>${task.nombre} - ${task.lugar_examen}</option>
                      `
                    }else{
                     template += `
                     <option value="${task.id_grupo}">${task.nombre} - ${task.lugar_examen}</option>
                     `
                   }

                   if(i<num-1){
                    i=i+1;
                  }

                });
                   $('#grupo').html(template);

                 });

                  // ---------------------------------------------------
                }
              });

              // -----------------------------------------------------------------------------------------------

               var array_duracion = [{"id_dura":"00:30:00","text":"30 minutos"},{"id_dura":"01:00:00","text":"1 hora"},{"id_dura":"01:15:00","text":"1 hora 15 minutos"},{"id_dura":"01:30:00","text":"1 hora 30 minutos"},{"id_dura":"02:00:00","text":"2 horas"},{"id_dura":"02:30:00","text":"2 horas 30 minutos"},{"id_dura":"03:00:00","text":"3 horas"}];
                   i=0;
                   template = '';
                   num=duracion.length;

                   array_duracion.forEach(task => {
                     if(duracion[i]==task.id_dura){
                      template += `
                      <option value="${task.id_dura}" selected>${task.text}</option>
                      `
                    }else{
                     template += `
                     <option value="${task.id_dura}">${task.text}</option>
                     `
                   }
                   if(i<num-1){
                    i=i+1;
                  }
                });
                $('#duracion').html(template);
            });
      }


       $('#editar_examen').submit(e => {
       //previeneque que nos lleve a otra pagina el boton submit
       e.preventDefault();

       const datos = {
        usuario: $('#usuario').val(),
        id_examen: $('#id_examen').val(),
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
        const url = 'php/modelo/editar_examen.php'; 
        console.log(datos, url);
        $.post(url, datos, (response) => {
         console.log(response);
         limpiar_formulario();
         listar_examen();
       });
      });





        // function editar_postulantes(id_examen) {
        //   $.ajax({
        //    url: 'php/modelo/consultar_post_inv.php',
        //    type: 'POST',
        //    data: id_examen,
        //    success: function(response) {
        //     const id_postulante = JSON.parse(response);
        //     let template = '';
        //     id_postulante.forEach(id_postulante => {
        //      template += `
        //      '${id_postulante.id_postulante}',
        //      `
        //    });
        //     template=template.slice(0,-1);
        //     $('#postulante').val([template]).trigger('change');
        //   }
        // });
        // }

        //     function consultar_grupo(id_examen) {
        //   $.ajax({
        //    url: 'php/modelo/consultar_grupo.php',
        //    type: 'POST',
        //    data: id_examen,
        //    success: function(response) {
        //     const grupo = JSON.parse(response);
        //     let template = '';
        //     grupo.forEach(grupo => {
        //      template += `
        //      '${grupo.id_grupo}',
        //      `
        //    });
        //     template=template.slice(0,-1);
        //     $('#grupo').val([template]).trigger('change');
        //   }
        // });
        // }




      });

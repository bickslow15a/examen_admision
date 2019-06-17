<?php include ("header.php"); ?>


<?php include ("sidebar.php"); ?>



<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Main content -->
  <section class="content container-fluid">

    <div class="box box-default">
      <div class="box-header with-border">
        <h3 class="box-title">Registre Su Examen</h3>

        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
        </div>
      </div>
      <!-- /.box-header -->

        <div class="box-body" style="padding: 20px;">
          <div class="row">
            <!-- formulario -->
            <!-- action="php/modelo/agregar_examen.php" method="post" -->
            <form id="formulario_examen" >
              <div class="col-md-6">
                <!-- id_examen oculto para editar -->
                <input type="hidden" id="id_examen" name="id_examen" value="0">
                <div class="form-group">
                  <label>Supervisor:</label>
                  <select class="form-control select2" name="usuario" id="usuario" style="width: 100%;" autofocus>
                    <!-- <option selected="selected">Roberto</option> -->
                    <option></option>
                  </select>
                </div>
                <!-- /.form-group -->
                <!-- Date and time range -->
                <div class="form-group">
                  <label>Elija la Fecha Inicio y Final para el Examen:</label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-clock-o"></i>
                    </div>
                    <input type="text" name="fecha" class="datetimerange form-control pull-right fecha" id="fecha" >
                  </div> 
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>Elija el Porcentaje Aprobatorio:</label>
                  <input id="porcentaje"  name="porcentaje" class="porcentaje slider-normal" style="width: 100%;" data-slider-id='porcentaje' type="text" data-slider-min="30" data-slider-max="100" data-slider-step="1" data-slider-value="65"/>
                </div>
                <!-- /.form-group Minima nota aprobatoria-->
                <div class="form-group">
                  <label>Elija el minimo y maximo Aprobatorio:</label>
                  <span id="min" class="hidden">Ejemplo de valor minimo</span>
                  <span id="max" class="hidden">Ejemplo de valor maximo</span>
                  <input id="min_max"  name="min_max" class="min_max slider-doble" style="width: 100%;" type="text"/>
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>Elija postulantes individualmente:</label>
                  <select class="form-control select2"  name="postulante" multiple="multiple" id="postulante" data-placeholder="Seleccione un postulante por DNI o Apellido" style="width: 100%;">
                  <!-- <option>Palomino Alvarez - 72650196</option>
                    <option>Yesica Ramirez - 487231434</option> -->
                  </select>
                </div> 
                <!-- /.form-group -->
              </div>
              <!-- /.col -->
              <div class="col-md-6">
                <!-- /.form-group -->
                <div class="form-group">
                  <label for="nom_examen">Nombre de Examen:</label>
                  <input type="text" class="form-control"  name="nom_examen" id="nom_examen" placeholder="Ingrese un nombre" >
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>Duración del Examen:</label>
                  <select class="form-control select2" name="duracion" id="duracion" style="width: 100%;">
                    <option value="00:30:00" selected="selected">30 minutos</option>
                    <option value="01:00:00">1 hora</option>
                    <option value="01:15:00">1 hora 15 minutos</option>
                    <option value="01:30:00">1 hora 30 minutos</option>
                    <option value="02:00:00">2 horas </option>
                    <option value="02:30:00">2 horas 30 minutos</option>
                    <option value="03:00:00">3 horas</option>
                  </select>
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>Número de Preguntas:</label>
                  <input id="num_pregunta" class="num_pregunta slider-normal"  name="num_pregunta" style="width: 100%;" data-slider-id='num_pregunta' type="text" data-slider-min="30" data-slider-max="100" data-slider-step="1" data-slider-value="100"/>
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>Publicar Notas:</label>
                  <br>
                  <label style="margin-right: 10px; margin-left: 10px;">
                    <input type="radio" name="r1" class="minimal pub_si" checked  value="si" > Si
                  </label>
                  <label style="margin-right: 10px; margin-left: 10px;">
                    <input type="radio" name="r1" class="minimal-red pub_no" value="no"> No
                  </label>
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>Elija Grupos a Evaluar:</label>
                  <select class="form-control select2" name="grupo" id="grupo" multiple="multiple" data-placeholder="Selecione grupos" style="width: 100%;">
                  </select>
                </div>
                <!-- /.form-group -->
              </div>
              <!-- /.col -->
              <div class="col-md-12">
                <!-- /.form-group -->
                <div class="form-group">
                  <label for="instr">Instrucciones del Examen:</label>
                  <textarea class="form-control z-depth-1" name="instr" id="instr" rows="3" placeholder="Ingresa instruciones a seguir para los estudiantes..."></textarea>
                </div>
                <div class="form-group col-md-offset-11">
                  <button type="submit" class="btn btn-success">Guardar</button>
                  <!-- <button type="button" class="btn btn-danger">Danger</button> -->
                </div>
              </div>
              <!-- /.col -->
            </form>
            <!-- /.formulario -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.box-body -->
    </div>
  </section>
  <!-- /.content -->
</div>

<?php include ("footer.php"); ?>
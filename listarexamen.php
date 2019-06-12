   <?php include ("header.php"); ?>
   <?php include ("sidebar.php"); ?>
   <!-- Content Wrapper. Contains page content -->
   <div class="content-wrapper">
    <!-- Main content -->
    <section class="content container-fluid">
      <div class="box box-default">
        <div class="box-header with-border">
          <h3 class="box-title">Lista de Examenes</h3>
          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
          </div>
        </div>
        <!-- Main content -->
        <div class="box-body" style="padding: 20px;">
          <div class="row">
            <div class="col-xs-12">
              <table id="listar_examen" class="display responsive nowrap table table-bordered table-striped" style="width:100%">
                <thead>
                  <tr>
                    <th>Creado por</th>
                    <th>Nombre</th>
                    <th>Fecha de Inicio</th>
                    <th>Fecha de Fin</th>
                    <th>Duración</th>
                    <th>% Aprobación</th>
                    <th>Nota Max.</th>
                    <th>Nota Min.</th>
                    <th>N° Preguntas</th>
                    <th>Publicar</th>
                    <th>Instruciones</th>
                    <th>Opciones</th>
                  </tr>
                </thead>

              </table>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>

      </div>

    </section>
    <!-- /.content -->
  </div>
<?php include ("footer.php"); ?>
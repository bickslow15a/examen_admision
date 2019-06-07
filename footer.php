  <!-- /.content-wrapper -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
  </footer>


</div>
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery 3 -->
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="bower_components/bootstrap-slider/nueva_version/bootstrap-slider.js"></script>
<!-- SELECT -->
<script src="bower_components/select2/dist/js/select2.min.js"></script>

<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
<!-- InputMask -->
<script src="plugins/input-mask/jquery.inputmask.js"></script>
<script src="plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
<script src="plugins/input-mask/jquery.inputmask.extensions.js"></script>
<!-- icheker -->
<script src="plugins/iCheck/icheck.min.js"></script>
<!-- datepicker -->
<script src="bower_components/moment/min/moment.min.js"></script>
<script src="bower_components/bootstrap-daterangepicker/daterangepicker.js"></script>
<!-- datepicker -->
<script src="bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
<script src="js/examen.js"></script>
<script>
  $(function () {
    //Initialize Select2 Elements
    $('.select2').select2()


    //Date range picker
    // $('#reservation').daterangepicker()
    //Date range picker with time picker
    $('.datetimerange').daterangepicker({ timePicker: true, timePickerIncrement: 10, 
      locale: { format: 
        "YYYY/MM/DD HH:mm:ss",
        "separator": " - ",
        "applyLabel": "Aplicar",
        "cancelLabel": "Cancelar",
        "fromLabel": "from",
        "toLabel": "to",
        "customRangeLabel": "Custom",
        "daysOfWeek": [
        "Do",
        "Lu",
        "Ma",
        "Mi",
        "Ju",
        "Vi",
        "Sa"
        ],
        "monthNames": [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Deciembre"
        ],
        "firstDay": 1 
  } })

    //Date range as a button
//     $('#daterange-btn').daterangepicker(
//     {
//       ranges   : {
//         'Today'       : [moment(), moment()],
//         'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//         'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
//         'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//         'This Month'  : [moment().startOf('month'), moment().endOf('month')],
//         'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//       },
//       startDate: moment().subtract(29, 'days'),
//       endDate  : moment()
//     },
//     function (start, end) {
//       $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
// }
// )

    //Date picker
    $('#datepicker').datepicker({
      autoclose: true
    })

    //iCheck for checkbox and radio inputs
    $('input').iCheck();
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass   : 'iradio_minimal-blue'
    })
    //Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
      checkboxClass: 'icheckbox_minimal-red',
      radioClass   : 'iradio_minimal-red'
    })
    //Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass   : 'iradio_flat-green'
    })

    // $('#reservationtime').daterangepicker({
    //   "locale": {
    //     "format": "MM/DD/YYYY",
    //     "separator": " - ",
    //     "applyLabel": "Aplicar",
    //     "cancelLabel": "Cancelar",
    //     "fromLabel": "from",
    //     "toLabel": "to",
    //     "customRangeLabel": "Custom",
    //     "daysOfWeek": [
    //     "Do",
    //     "Lu",
    //     "Ma",
    //     "Mi",
    //     "Ju",
    //     "Vi",
    //     "Sa"
    //     ],
    //     "monthNames": [
    //     "Enero",
    //     "Febrero",
    //     "Marzo",
    //     "Abril",
    //     "Mayo",
    //     "Junio",
    //     "Julio",
    //     "Agosto",
    //     "Septiembre",
    //     "Octubre",
    //     "Noviembre",
    //     "Deciembre"
    //     ],
    //     "firstDay": 1
    //   }
    // })

  })
// slider rango para elegir un numero
$('#ex1').slider({
  formatter: function(value) {
    return 'Valor: ' + value;
  }
});
// slider rango para elegir un numero
$('#ex2').slider({
  formatter: function(value) {
    return 'Valor: ' + value;
  }
});
// minima nota aprobatoria
$("#ex18b").slider({
  min: 0,
  max: 100,
  value: [30, 60],
  labelledby: ['ex18-label-2a', 'ex18-label-2b']
});
</script>


<!-- Optionally, you can add Slimscroll and FastClick plugins.
     Both of these plugins are recommended to enhance the
     user experience. -->
   </body>
   </html>
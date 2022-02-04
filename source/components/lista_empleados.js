import {app} from "./../initialize.js";

app.controller('lista_empleados', function($scope,$http) {
  let datos = {
    "task":"getEmpleados"
  }
  //consiguiendo listado de empleados
  $http.post("dev/src/Controllers/empleados.php",datos).then(function(resp){
    let r1 = resp.data;
    r1.forEach((item) => {
      if (item.jornada_parcial == "yes"){
        item.estado = "Tiempo parcial"
      }else{
        item.estado = "Tiempo Completo"
      }
    });

    $scope.empleados = r1;
  })
});

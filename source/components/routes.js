import {app} from "./../initialize.js";
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "source/pages/listado_empleados.htm"
  })
  .when("/datos_emp", {
    templateUrl : "source/pages/datos_empleado.htm"
  })
});

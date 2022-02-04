import {app} from "./../initialize.js";
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "source/pages/listado_empleados.htm"
  })
  .when("/datos_emp", {
    templateUrl : "source/pages/dataEmployerNew.htm"
  })
  .when("/reporte", {
    templateUrl : "source/pages/reporte.htm"
  })
  .when("/datos/:identification", {
    templateUrl : "source/pages/dataEmployerCurrent.htm",
    controller:"currentEmpPage"
  })
});

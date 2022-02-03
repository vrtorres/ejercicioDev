import {app} from "./../initialize.js";
app.controller('info_empleado', function($scope,$http) {
  let datos = {
    "task":"getProvinciasList"
  }
  $scope.employer = {
    name : "",
    lastname : "",
    idn : "",
    province : "",
    birthday : "",
    mail:"",
    obsv:""
  }
  
  $http.post("dev/src/Controllers/Provincias.php",datos).then(function(resp){
    let r1 = resp.data;
    $scope.provincias = r1;
  })

  $scope.submitData = function(){
    console.log($scope.job);
    console.log($scope.employer);
  }
});

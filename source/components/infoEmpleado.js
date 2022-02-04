import {app} from "./../initialize.js";
import {toast} from "./../initialize.js";
import {toastMessage} from "./../initialize.js";

app.component('infoEmpleado',{
  templateUrl:"source/pages/datos_empleado.htm",
  bindings: {
    idep: '@'
  },
  controller : function ctEmployer($scope,$http){
    //inicializando variables
    let idep = "";
    let ctrl = this;

    ctrl.$onChanges= function(changes){
        console.log(changes);
        idep = ctrl.idep
        //para el caso de un nuevo empleado
        if(idep==0){
          $scope.employer = {
            name : "",
            lastname : "",
            idn : "",
            province : "",
            birthday : "",
            mail:"",
            obsv:""
          }
          $scope.job = {
            start : "",
            position : "",
            department : "",
            provinceJob : "",
            salary : "",
            partial:"",
            obsvjob:""
          }
          //consiguiendo listado de provincias
          let datos = {
            "task":"getProvinciasList"
          }
          $http.post("dev/src/Controllers/provincias.php",datos).then(function(resp){
            let r1 = resp.data;
            $scope.provincias = r1;
          })
        }else{

          //consiguiendo listado de provincias
          let datos = {
            "task":"getProvinciasList"
          }
          $http.post("dev/src/Controllers/provincias.php",datos).then(function(resp){
            let r1 = resp.data;
            $scope.provincias = r1;
          })

          //consiguiendo datos de persona en especifico
          let datos2 = {
            "task":"getEmpleadoInfo",
            "id":idep
          }
          $http.post("dev/src/Controllers/empleados.php",datos2).then(function(resp){
            let r1 = resp.data;
            let d1 = new Date(r1[0].fecha_nacimiento);
            let d2 = new Date(r1[0].fecha_ingreso);

            $scope.employer = {
              name : r1[0].nombre_empleado,
              lastname : r1[0].apellido_empleado,
              idn : r1[0].cedula_empleado,
              province : r1[0].provincia_empleado,
              birthday : d1,
              mail:r1[0].email_empleado,
              obsv:r1[0].observaciones_personales
            }

            $scope.job = {
              start : d2,
              position : r1[0].cargo_empleado,
              department : r1[0].departamento_empleado,
              provinceJob : r1[0].provincia_labora,
              salary : r1[0].sueldo_empleado,
              partial:r1[0].jornada_parcial,
              obsvjob:r1[0].observaciones_laborales
            }
            console.log(r1);
          })


        }
    }

    //funcion de envio de datos
    $scope.submitData = function(){

      //se procede a validar datos
      const name_form = document.getElementById("nombre");
      const cedula_form = document.getElementById("cedula");
      const email_form = document.getElementById("email");
      let valido = 1

      if (!name_form.checkValidity()) {
        valido=0;
        name_form.classList.remove("is-valid");
        name_form.classList.add("is-invalid");
      }else{
        name_form.classList.remove("is-invalid");
        name_form.classList.add("is-valid");
      }
      if (!cedula_form.checkValidity()) {
        valido=0;
        cedula_form.classList.add("is-invalid");
        cedula_form.classList.remove("is-valid");
      }else{
        cedula_form.classList.remove("is-invalid");
        cedula_form.classList.add("is-valid");
      }
      if (!email_form.checkValidity()) {
        valido=0;
        email_form.classList.add("is-invalid");
        email_form.classList.remove("is-valid");
      }else{
        email_form.classList.remove("is-invalid");
        email_form.classList.add("is-valid");
      }

      //enviando si el formulario esta correcto
      if (valido == 1){
        let datosObj = { ...$scope.employer,  ...$scope.job };
        datosObj.birthday = datosObj.birthday.toLocaleDateString();
        datosObj.start = datosObj.start.toLocaleDateString();
        if(ctrl.idep == 0){
          datosObj.task = "newEmployer";
        }else{
          datosObj.task = "updateEmployer";
          datosObj.id = ctrl.idep;
        }

        let dataEnviar = JSON.stringify(datosObj);
        //enviando dato a guardar en base de datos
        $http.post("dev/src/Controllers/empleados.php",dataEnviar).then(function(resp){
          let r1 = resp.data;
          toastMessage.innerText = r1.msg;
          toast.show();
          setTimeout(function(){
            location.reload();
          }, 800);
        })

      }
    }
  }
});

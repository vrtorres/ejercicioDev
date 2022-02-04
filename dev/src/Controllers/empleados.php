<?php
require_once __DIR__."/../../vendor/autoload.php";
use App\Models\Empleados;

//recibiendo datos desde front-end
$json = file_get_contents('php://input');
$requirement = json_decode($json);

$empleados = new Empleados();

switch ($requirement->task) {

  case 'newEmployer':
    $rp = $empleados->newEmpleado($requirement);
    if($rp==true){
      $rt = array("msg"=>"Usuario creado exitosamente");
    }else{
      $rt = array("msg"=>"Usuario no creado");
    }
    echo json_encode($rt);
  break;

  case 'getEmpleados':
    $rp = $empleados->getEmpleados();
    echo json_encode($rp);
  break;

  case 'getEmpleadoInfo':
    $rp = $empleados->getEmpleadoInfo($requirement->id);
    echo json_encode($rp);
  break;

  case 'updateEmployer':
    $rp = $empleados->updateEmpleado($requirement);
    if($rp==true){
      $rt = array("msg"=>"Usuario actualizado exitosamente");
    }else{
      $rt = array("msg"=>"Usuario no actualizado");
    }
    echo json_encode($rt);
  break;

}


 ?>

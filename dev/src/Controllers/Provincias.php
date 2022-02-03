<?php
require_once __DIR__."/../../vendor/autoload.php";

use App\Models\Provincia;

//recibiendo datos desde front-end
$json = file_get_contents('php://input');
$requirement = json_decode($json);

$prov = new Provincia();

switch ($requirement->task) {
  case 'getProvinciasList':
    $resp = $prov->get_Provincias();
    echo json_encode($resp);
  break;

  default:
    // code...
    break;
}

 ?>

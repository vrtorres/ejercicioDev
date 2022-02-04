<?php
namespace App\Models;

class Empleados{
  private $db;

  function __construct(){
    $conn = BaseDatos::getInstance();
    $this->db = $conn::$db;
  }

  function newEmpleado($datos){
    $result = $this->db->insert(array(
                'nombre_empleado' => $datos->name,
                'apellido_empleado' => $datos->lastname,
                'cedula_empleado' => $datos->idn,
                'provincia_empleado' => $datos->province,
                'fecha_nacimiento' => $datos->birthday,
                'email_empleado' => $datos->mail,
                'observaciones_personales' => $datos->obsv,
                'fecha_ingreso' => $datos->start,
                'cargo_empleado' => $datos->position,
                'departamento_empleado' => $datos->department,
                'provincia_labora' => $datos->provinceJob,
                'sueldo_empleado' => $datos->salary,
                'jornada_parcial' => $datos->partial,
                'observaciones_laborales' => $datos->obsvjob
            ))
            ->into('Empleado');
    return $result;
  }
  function getEmpleados(){
    $result = $this->db->from('Empleado')
              ->orderBy('apellido_empleado')
              ->select()
              ->fetchAssoc()
              ->all();
    return $result;
  }
  function getEmpleadoInfo($id){
    $result = $this->db->from('Empleado')
              ->where('id')->is($id)
              ->select()
              ->fetchAssoc()
              ->all();
    return $result;
  }
  function updateEmpleado($datos){
    $result = $this->db->update('Empleado')
             ->where('id')->is($datos->id)
             ->set(array(
               'nombre_empleado' => $datos->name,
               'apellido_empleado' => $datos->lastname,
               'cedula_empleado' => $datos->idn,
               'provincia_empleado' => $datos->province,
               'fecha_nacimiento' => $datos->birthday,
               'email_empleado' => $datos->mail,
               'observaciones_personales' => $datos->obsv,
               'fecha_ingreso' => $datos->start,
               'cargo_empleado' => $datos->position,
               'departamento_empleado' => $datos->department,
               'provincia_labora' => $datos->provinceJob,
               'sueldo_empleado' => $datos->salary,
               'jornada_parcial' => $datos->partial,
               'observaciones_laborales' => $datos->obsvjob
             ));
    return $result;
  }

}

 ?>

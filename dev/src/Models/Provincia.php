<?php
namespace App\Models;

class Provincia{
  private $db;

  function __construct(){
    $conn = BaseDatos::getInstance();
    $this->db = $conn::$db;
  }
  function get_Provincias(){
    $result = $this->db->from('Provincia')
              ->orderBy('nombre_provincia')
              ->select(['id','nombre_provincia'])
              ->fetchAssoc()
              ->all();
    return $result;
  }



}


 ?>

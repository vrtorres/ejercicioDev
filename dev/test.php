<?php
require "vendor/autoload.php";
use App\Models\Provincia;

$pr = new Provincia();
echo var_dump($pr->get_Provincias());


 ?>

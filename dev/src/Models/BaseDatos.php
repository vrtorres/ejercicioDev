<?php
namespace App\Models;
use Opis\Database\Database;
use Opis\Database\Connection;

class BaseDatos{

  private static $instance = null;
  public static $db;

  private function __construct()
  {

    $connection = new Connection(
        'mysql:host=localhost;dbname=ejercicioDev_db',
        'userBD',
        'Nataly280417$'
    );
    self::$db = new Database($connection);
  }

  public static function getInstance()
  {
    if (self::$instance == null)
    {
      self::$instance = new BaseDatos();
    }

    return self::$instance;
  }

}



 ?>

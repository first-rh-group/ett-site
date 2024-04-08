<?php
$usuario = "dtc_saga";
$password = "179856";
if (!isset($dbname) || $dbname == '' || $dbname == NULL) {
    $dbname = "grupofir_firstrh3";
}
$dsn = "mysql:host=10.0.0.96;port=3308;dbname={$dbname}";
try {
    $db = new PDO($dsn, $usuario, $password);
} catch (PDOException $e) {
    // var_dump2($e);
    die('Estamos tendo problemas. Confira mais tarde');
}
<?php
$usuario = "dtc_saga";
$password = "179856";
$dbname = "grupofir_departamentoRH";
$dsn = "mysql:host=10.0.0.96;port=3308;dbname={$dbname}";
try {
    $db = new PDO($dsn, $usuario, $password);
} catch (PDOException $e) {
    die('Estamos tendo problemas. Confira mais tarde');
}

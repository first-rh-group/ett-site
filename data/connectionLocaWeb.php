<?php
$host = '179.188.16.19';
$usuario = 'firstrh3';
$password = 'ett2015';
$dbname = 'firstrh3';
$dsn = "mysql:host=" . $host . ";dbname={$dbname}";
try {
    $db = new PDO($dsn, $usuario, $password);
} catch (PDOException $e) {
    print_r($e);
    die('Estamos tendo problemas. Confira mais tarde');
}
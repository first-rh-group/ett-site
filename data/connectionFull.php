<?php
$usuario = "dtc_saga";
$password = "179856";
$dbname = "grupofir_departamentorh";
$dsn = "mysql:host=10.0.0.96;port=3308;dbname={$dbname}";
try {
	$db = new PDO($dsn, $usuario, $password);
	// echo 'conexao ok';
} catch (PDOException $e) {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Estamos tendo problemas. Confira mais tarde', 'details' => $e->getMessage()]);
    exit;
}
<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$cpf = $data['cpf'];

$mysqli = new mysqli('10.0.0.96', 'dtc_saga', '179856', 'grupofir_departamentorh', 3308);

if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}

$stmt = $mysqli->prepare('SELECT nomeCompleto, email FROM usuarioscorp WHERE cpf = ?');
$stmt->bind_param('s', $cpf);
$stmt->execute();
$result = $stmt->get_result();

$user = $result->fetch_assoc();

echo json_encode($user);

$stmt->close();
$mysqli->close();
?>
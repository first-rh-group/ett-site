<?php
session_start();
session_destroy();
session_start();
/* include('/home/grupofirstrh/public_html/session_global/global_functions.php'); */
include('./session_global/global_functions.php');
$dadosEnviados = (array) json_decode($_POST['instrucoes']);
$login = apenasNumeros($dadosEnviados['usuario']);
/* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
include('./data/connectionFull_departamentoRH.php');
$query = "SELECT id FROM usuariosAdmin WHERE usuariosAdmin.cpf = ? AND usuariosAdmin.senha = PASSWORD(?) AND usuariosAdmin.status = 0 LIMIT 1";
$st = $db->prepare($query);
$st->execute([$login, $dadosEnviados['senha']]);
$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
$st = null;
$db = null;

if (count($retorno) > 0) {
    $activationCode = gerarHash('32');
    /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
    include('./data/connectionFull_departamentoRH.php');
    $query = "UPDATE usuariosAdmin SET usuariosAdmin.sessionHash = '" . $activationCode . "', usuariosAdmin.lastLogin = '" . date('Y-m-d H:i:s') . "', usuariosAdmin.ipLogin = '" . getUserIpAddr() . "' WHERE usuariosAdmin.id = '" . $retorno[0]['id'] . "' LIMIT 1";
    $st = $db->prepare($query);
    $st->execute();
    $st = null;
    $db = null;
    $_SESSION['infoUser'] = [
        'login' => $login,
        'sessionHash' => $activationCode,
    ];
    echo json_encode($activationCode);
} else {
    echo json_encode(false);
}

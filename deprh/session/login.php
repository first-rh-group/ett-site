<?php
session_start();
session_destroy();
session_start();
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
/* include('/home/grupofirstrh/public_html/session_global/global_functions.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\session_global\global_functions.php');
$dadosEnviados = (array) json_decode($_POST['instrucoes']);
$login = apenasNumeros($dadosEnviados['usuario']);
$query = "SELECT id FROM usuariosDeprh WHERE usuariosDeprh.cpf = ? AND usuariosDeprh.senha = PASSWORD(?) AND usuariosDeprh.status = 0 AND SUBSTRING(diasAutorizados,(WEEKDAY(CURRENT_DATE()) + 1),1) = 0 AND CONCAT(SUBSTRING(CURTIME(),1,2),SUBSTRING(CURTIME(),4,2)) > SUBSTRING(horarioAutorizado,1,4) AND CONCAT(SUBSTRING(CURTIME(),1,2),SUBSTRING(CURTIME(),4,2)) < SUBSTRING(horarioAutorizado,5,4) LIMIT 1";
$st = $db->prepare($query);
$st->execute([$login, $dadosEnviados['senha']]);
$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
$st = null;
$db = null;

if (count($retorno) > 0) {
    $activationCode = gerarHash('32');
    include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
    $query = "UPDATE usuariosDeprh SET usuariosDeprh.sessionHash = ?, usuariosDeprh.lastLogin = '" . date('Y-m-d H:i:s') . "', usuariosDeprh.ipLogin = '" . getUserIpAddr() . "' WHERE usuariosDeprh.cpf = '" . $login . "' LIMIT 1";
    $st = $db->prepare($query);
    $st->execute([$activationCode]);
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

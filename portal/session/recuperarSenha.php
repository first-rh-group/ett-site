<?php
session_start();
session_destroy();
session_start();
/* include('/home/grupofirstrh/public_html/session_global/global_functions.php'); */
include('./session_global/global_functions.php');
$dadosEnviados = (array) json_decode($_POST['instrucoes']);
$executePDO[] = apenasNumeros($dadosEnviados['cpf']);
$dbname = "grupofir_departamentoRH";
/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
include('./data/connectionSuperUser.php');
// $query = "SELECT id, email FROM usuariosCorp WHERE usuariosCorp.cpf = ? AND usuariosCorp.email != '' AND usuariosCorp.status = 0 LIMIT 1";
$query = "SELECT id, email FROM usuariosCorp WHERE usuariosCorp.cpf = ? AND usuariosCorp.email != '' LIMIT 1";
$st = $db->prepare($query);
$st->execute($executePDO);
$databaseErrors = $st->errorInfo();
if ($databaseErrors[0] != '00000') {
    $query = json_decode(json_encode($procura), True);
    $messageError = [
        'url' => $_SERVER["SCRIPT_NAME"],
        'linhaPagina' => __LINE__,
        'funcao' => __FUNCTION__,
        'file' => __FILE__,
        'linhaFile' => __LINE__,
        'query' => $query['queryString'],
        'erro' => $databaseErrors[2],
        'executePDO' => $executePDO,
    ];
}
$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
$st = null;
$db = null;
if (count($retorno) > 0) {
    $retorno = [
        'email' => esconderEmail($retorno[0]['email']),
        'codigo' => base64_encode(date('Y') . apenasNumeros($dadosEnviados['cpf']) . date('md')),
    ];
    echo json_encode($retorno);
} else {
    echo json_encode(false);
}

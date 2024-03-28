<?php
session_start();
session_destroy();
session_start();

include('../../session_global/global_functions.php');
$dadosRecebidos = urldecode(urldecode($_REQUEST['instrucoes']));
// file_put_contents('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\portal\session\dadosRecebidos.txt', $dadosRecebidos);

$dadosEnviados = json_decode($dadosRecebidos, true);

if (!is_array($dadosEnviados)) {
    echo json_encode(false);
    exit;
}

if (!isset($dadosEnviados['usuario']) || !isset($dadosEnviados['senha'])) {
    echo json_encode(false);
    exit;
}

$login = apenasNumeros($dadosEnviados['usuario']);
$dbname = 'grupofir_departamentoRH';
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
$senha = $dadosEnviados['senha'];
$senhaHash = hash('sha256', $senha);
$query = "SELECT * FROM usuariosCorp WHERE usuariosCorp.cpf = ? AND SHA2(usuariosCorp.senha, 256) = ? AND usuariosCorp.status = 0 LIMIT 1";
$st = $db->prepare($query);
$st->execute([$login, $senhaHash]);
$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
$st = null;
$db = null;

if (count($retorno) > 0) {
    $activationCode = gerarHash('32');
    $iniciaisArray = explode(' ', $retorno[0]['nomeCompleto']);
    $iniciais = '';
    foreach ($iniciaisArray as $key => $inicial) {
        $iniciais = $iniciais . substr($inicial, 0, 1);
    }
    $executePDO = [
        'sessionHash' => $activationCode,
        'iniciais' => $iniciais,
        'cpf' => $login,
    ];
    $dbname = 'grupofir_departamentoRH';
    include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
    $query = "UPDATE usuariosCorp SET usuariosCorp.sessionHash = :sessionHash, usuariosCorp.iniciais = :iniciais, usuariosCorp.lastLogin = '" . date('Y-m-d H:i:s') . "', usuariosCorp.ipLogin = '" . getUserIpAddr() . "' WHERE usuariosCorp.cpf = :cpf LIMIT 1";
    $st = $db->prepare($query);
    $st->execute($executePDO);
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
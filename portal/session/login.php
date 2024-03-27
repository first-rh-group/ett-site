<?php
session_start();
session_destroy();
session_start();

include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\session_global\global_functions.php');
$dadosEnviados = (array) json_decode($_POST['instrucoes']);
$login = apenasNumeros($dadosEnviados['usuario']);
$dbname = 'grupofir_departamentoRH';
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
$query = "SELECT * FROM usuariosCorp WHERE usuariosCorp.cpf = ? AND usuariosCorp.status = 0 LIMIT 1";
$st = $db->prepare($query);
$st->execute([$login]);
$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
$st = null;
$db = null;

if (count($retorno) > 0) {
    error_log("Senha fornecida: " . $dadosEnviados['senha']);
    error_log("Senha do banco de dados: " . $retorno[0]['senha']);

    if (password_verify($dadosEnviados['senha'], $retorno[0]['senha'])) {
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
} else {
    echo json_encode(false);
}
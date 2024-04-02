<?php
session_start();
/* include('/home/grupofirstrh/public_html/session_global/global_functions.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\session_global\global_functions.php');
if (checkConnection() == false) {
	session_destroy();
	header("Location: https://deprh.grupofirstrh.com.br");
	exit();
}
function checkConnection()
{
	$resposta = false;
	/* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
	include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
	$query = "SELECT usuariosDeprh.id FROM usuariosDeprh WHERE usuariosDeprh.cpf = ? AND usuariosDeprh.sessionHash = ? AND usuariosDeprh.status = 0 AND SUBSTRING(diasAutorizados,(WEEKDAY(CURRENT_DATE()) + 1),1) = 0 AND CONCAT(SUBSTRING(CURTIME(),1,2),SUBSTRING(CURTIME(),4,2)) > SUBSTRING(horarioAutorizado,1,4) AND CONCAT(SUBSTRING(CURTIME(),1,2),SUBSTRING(CURTIME(),4,2)) < SUBSTRING(horarioAutorizado,5,4) LIMIT 1";
	$st = $db->prepare($query);
	$st->execute([$_SESSION['infoUser']['login'], $_SESSION['infoUser']['sessionHash']]);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$st = null;
	$db = null;
	if (count($retorno) > 0) {
		$resposta = true;
	}
	return ($resposta);
}
function infoUser()
{
	/* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
	include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
	$query = "SELECT id, nomeCompleto, cpf, iniciais, email, telefones, DATE_FORMAT(lastLogin, '%d-%m-%Y') as lastLogin, sessionHash, ipLogin, diasAutorizados, horarioAutorizado 
    FROM usuariosDeprh 
    WHERE usuariosDeprh.cpf = ? AND usuariosDeprh.sessionHash = ? AND usuariosDeprh.status = 0 LIMIT 1";
	$st = $db->prepare($query);
	$st->execute([$_SESSION['infoUser']['login'], $_SESSION['infoUser']['sessionHash']]);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$st = null;
	$db = null;
	$retorno = array_map('utf8_encode', $retorno[0]);
	return ($retorno);
}
function folhasdePontoRecebidas($busca)
{
	$where[] = 'folhaFisica.id > ?';
	$executePDO[] = 0;
	if (isset($busca['referencia']) && $busca['referencia'] != '') {
		$where[] = 'folhaFisica.referencia >= ?';
		$executePDO[] = $busca['referencia'];
		$where[] = 'folhaFisica.referencia <= ?';
		$executePDO[] = substr($busca['referencia'], 0, 8) . date('t', strtotime($busca['referencia']));
	}
	if (isset($busca['dataEnvio']) && $busca['dataEnvio'] != '') {
		$where[] = 'folhaFisica.dataEnvio >= ?';
		$executePDO[] = $busca['dataEnvio'];
	}
	$buscaFinal = implode(' AND ', $where);
	/* include('/home/grupofirstrh/data/connectionSelect.php'); */
	include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSelect.php');
	$query = "SELECT funcionario.NOME as nomeEmpregado, folhaFisica.cpf, folhaFisica.referencia, folhaFisica.dataEnvio, folhaFisica.nomeArquivo FROM folhaFisica LEFT JOIN funcionario ON funcionario.CPF = folhaFisica.cpf WHERE $buscaFinal ORDER BY folhaFisica.referencia DESC, folhaFisica.dataEnvio DESC, nomeEmpregado ASC";
	$st = $db->prepare($query);
	$st->execute($executePDO);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	foreach ($retorno as $key => $retornado) {
		$retornado['nomeEmpregado'] = ajustaNome($retornado['nomeEmpregado']);
		$retornado['cpf'] = print_cpf($retornado['cpf']);
		$retornado['dataEnvio'] = substr($retornado['dataEnvio'], 0, 16);
		$retornado['dataEnvio'] = explode(' ', $retornado['dataEnvio']);
		$dataExplode = explode('-', $retornado['dataEnvio'][0]);
		$retornado['dataEnvio'] = $dataExplode[2] . '-' . $dataExplode[1] . '-' . $dataExplode[0] . ' ' . $retornado['dataEnvio'][1];
		$retornado['referencia'] = explode('-', $retornado['referencia']);
		$retornado['referencia'] = $retornado['referencia'][1] . '-' . $retornado['referencia'][0];
		$retorno[$key] = array_map('utf8_encode', $retornado);
	}
	$st = null;
	$db = null;
	return ($retorno);
}
function notificacoesGerais()
{
	$notificacoes = [];
	$dbname = 'grupofir_departamentoRH';
	/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
	include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
	$query = "SELECT id, nomeCompleto, cpf FROM usuariosCorp WHERE usuariosCorp.status = 3";
	$st = $db->prepare($query);
	$st->execute();
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	foreach ($retorno as $key => $retornado) {
		$retorno[$key] = array_map('utf8_encode', $retornado);
	}
	return ($retorno);
}

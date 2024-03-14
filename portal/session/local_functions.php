<?php
session_start();
/* include('/home/grupofirstrh/public_html/session_global/global_functions.php'); */
include('../session_global/global_functions.php');
// if (checkConnection() == false) {
//     session_destroy();
//     // header("Location: https://portal.grupofirstrh.com.br");
//     exit();
// }
// function checkConnection()
// {
//     $resposta = false;
//     $dbname = "grupofir_departamentoRH";
//     include('/home/grupofirstrh/data/connectionSuperUser.php');
//     $query = "SELECT usuariosCorp.cpf FROM usuariosCorp WHERE usuariosCorp.cpf = ? AND usuariosCorp.sessionHash = ? AND usuariosCorp.status = 0 LIMIT 1";
//     $st = $db->prepare($query);
//     $st->execute([$_SESSION['infoUser']['login'], $_SESSION['infoUser']['sessionHash']]);
//     $retorno = $st->fetchAll(PDO::FETCH_ASSOC);
//     $st = null;
//     $db = null;
//     if (count($retorno) > 0) {
//         $resposta = true;
//     }
//     return ($resposta);
// }
function infoUser($arrayInfo)
{
	$busca = [];
	$executePDO = [];
	if (isset($arrayInfo['cpf']) && $arrayInfo['cpf'] != '') {
		$busca[] = "grupofir_departamentoRH.usuariosCorp.cpf = ?";
		$executePDO[] = apenasNumeros($arrayInfo['cpf']);
	} else {
		$busca[] = "grupofir_departamentoRH.usuariosCorp.cpf = ?";
		$executePDO[] = apenasNumeros($_SESSION['infoUser']['login']);
	}
	if (isset($arrayInfo['chapa']) && $arrayInfo['chapa'] != '') {
		$busca[] = "grupofir_firstrh3.funcionario.CHAPA = ?";
		$executePDO[] = $arrayInfo['chapa'];
	}
	$busca = implode(' AND ', $busca);
	$dbname = "grupofir_departamentoRH";
	/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
	include('../../data/connectionSuperUser.php');
	$query = "SELECT grupofir_departamentoRH.usuariosCorp.cpf, grupofir_departamentoRH.usuariosCorp.nomeCompleto, grupofir_departamentoRH.usuariosCorp.email, grupofir_departamentoRH.usuariosCorp.telefones, grupofir_departamentoRH.usuariosCorp.status, grupofir_departamentoRH.usuariosCorp.sessionHash,
    grupofir_firstrh3.departamento.descricao as departamentoNome, grupofir_firstrh3.departamento.email as departamentoEmail,
    grupofir_firstrh3.funcionario.ID as funcionarioID,
    grupofir_firstrh3.funcionario.NOME as nomeFuncionario,
    grupofir_firstrh3.funcionario.FICHA_REGISTRO,
    grupofir_firstrh3.funcionario.COD_FUNCAO,
    grupofir_firstrh3.aux_funcao.nome_funcao as nomeFuncao,
    grupofir_firstrh3.funcionario.COD_SECAO,
    grupofir_firstrh3.aux_local_trabalho.nome_local_trab as tomador,
    grupofir_firstrh3.funcionario.COD_LOCAL_TRAB,
    DATE_FORMAT(grupofir_firstrh3.funcionario.DATA_ADMISSAO, '%d-%m-%Y') as data_admissao,
    DATE_FORMAT(grupofir_firstrh3.funcionario.DATA_NASCEMENTO, '%d-%m-%Y') as data_nascimento,
    grupofir_firstrh3.funcionario.RG,
    grupofir_firstrh3.funcionario.CPF,
    grupofir_firstrh3.funcionario.PIS,
    grupofir_firstrh3.funcionario.CTPS,
    grupofir_firstrh3.funcionario.CHAPA as chapa,
    grupofir_firstrh3.funcionario.EMAIL as emailFuncionario,
    grupofir_firstrh3.funcionario.BANCO,
    grupofir_firstrh3.funcionario.AGENCIA,
    grupofir_firstrh3.funcionario.CONTA,
    grupofir_firstrh3.funcionario.CODIGO_PROFESSOR,
    grupofir_firstrh3.funcionario.TIPO_FUNCIONARIO,
    grupofir_firstrh3.funcionario.CODIGO_CLIENTE,
    grupofir_firstrh3.funcionario.COD_DEPTO,
    grupofir_firstrh3.funcionario.FOTO,
    grupofir_firstrh3.funcionario.TIPO_LOGRADOURO,
    grupofir_firstrh3.funcionario.ENDERECO,
    grupofir_firstrh3.funcionario.NUMERO_IMOVEL,
    grupofir_firstrh3.funcionario.COMPLEMENTO,
    grupofir_firstrh3.funcionario.BAIRRO,
    grupofir_firstrh3.funcionario.CEP,
    grupofir_firstrh3.funcionario.CIDADE,
    grupofir_firstrh3.funcionario.UF,
    grupofir_firstrh3.funcionario.COD_COLIGADA as ColigadaId,
    grupofir_firstrh3.funcionario.COD_FILIAL,

	IF(grupofir_firstrh3.funcionario.COD_COLIGADA = 1,'E.T.T. First-RH-Assessoria Empresarial Ltda','Shift Gestão de Serviços Ltda') as matriz,
	grupofir_firstrh3.filiais.NOME_FILIAL as nomeFilial,
    grupofir_firstrh3.filiais.CNPJ as CNPJFilial

    FROM grupofir_departamentoRH.usuariosCorp
    LEFT JOIN grupofir_firstrh3.filial ON grupofir_firstrh3.filial.CODFILIAL = grupofir_departamentoRH.usuariosCorp.filial
    LEFT JOIN grupofir_firstrh3.departamento ON grupofir_firstrh3.departamento.Id = grupofir_departamentoRH.usuariosCorp.cod_depto
    LEFT JOIN grupofir_firstrh3.funcionario ON grupofir_firstrh3.funcionario.CPF = grupofir_departamentoRH.usuariosCorp.cpf
    LEFT JOIN grupofir_firstrh3.filiais ON grupofir_firstrh3.funcionario.COD_COLIGADA = grupofir_firstrh3.filiais.COD_COLIGADA AND grupofir_firstrh3.funcionario.COD_FILIAL = grupofir_firstrh3.filiais.COD_FILIAL
    LEFT JOIN grupofir_firstrh3.aux_funcao ON grupofir_firstrh3.funcionario.COD_COLIGADA = grupofir_firstrh3.aux_funcao.cod_coligada AND grupofir_firstrh3.funcionario.COD_FUNCAO = grupofir_firstrh3.aux_funcao.cod_funcao
    LEFT JOIN grupofir_firstrh3.aux_local_trabalho ON grupofir_firstrh3.funcionario.COD_COLIGADA = grupofir_firstrh3.aux_local_trabalho.cod_coligada AND grupofir_firstrh3.funcionario.COD_SECAO = grupofir_firstrh3.aux_local_trabalho.cod_local_trab
    WHERE " . $busca . " AND grupofir_departamentoRH.usuariosCorp.status = 0 ORDER BY grupofir_firstrh3.funcionario.DATA_ADMISSAO DESC , grupofir_firstrh3.funcionario.ID DESC LIMIT 1";
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
			'idUsuario' => $_SESSION['infoUser']['login'],
		];
		$retorno = $messageError;
	} else {
		$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
		$st = null;
		$db = null;
		if (count($retorno) > 0) {
			$retorno = array_map('utf8_encode_2', $retorno[0]);
		}
	}
	return ($retorno);
}
function pontoEletronico($busca)
{
	$where[] = 'pontoEletronico.id > ?';
	$executePDO[] = 0;
	if (isset($busca['cpf']) && $busca['cpf'] != '') {
		$where[] = 'pontoEletronico.cpf = ?';
		$executePDO[] = apenasNumeros($busca['cpf']);
	}
	/* include('/home/grupofirstrh/data/connectionSelect.php'); */
	include('../../data/connectionSelect.php');
	$query = "SELECT pontoEletronico.id, pontoEletronico.data, DATE_FORMAT(pontoEletronico.data, '%Y-%m-%d') as data2, DATE_FORMAT(pontoEletronico.data, '%H:%i:%s') as hora, pontoEletronico.tipoBatida, ipBatida
    FROM pontoEletronico
    WHERE " . implode(' AND ', $where) . "
    ORDER BY pontoEletronico.cpf ASC, data2 DESC, pontoEletronico.data ASC";
	$st = $db->prepare($query);
	$st->execute($executePDO);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$st = null;
	$db = null;
	return ($retorno);
}
function batidaEletronica($busca)
{
	$where[] = 'pontoEletronico.id > ?';
	$executePDO[] = 0;
	if (isset($busca['cpf']) && $busca['cpf'] != '') {
		$where[] = 'pontoEletronico.cpf = ?';
		$executePDO[] = apenasNumeros($busca['cpf']);
	}
	/* include('/home/grupofirstrh/data/connectionSelect.php'); */
	include('../../data/connectionSelect.php');
	$query = "SELECT pontoEletronico.id, pontoEletronico.data, DATE_FORMAT(pontoEletronico.data, '%Y-%m-%d') as data2, DATE_FORMAT(pontoEletronico.data, '%H:%i:%s') as hora, pontoEletronico.tipoBatida, ipBatida
    FROM pontoEletronico
    WHERE " . implode(' AND ', $where) . "
    ORDER BY pontoEletronico.cpf ASC, data2 DESC, pontoEletronico.data ASC";
	$st = $db->prepare($query);
	$st->execute($executePDO);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$st = null;
	$db = null;
	return ($retorno);
}
function fichasFinanceiras()
{
	/* include('/home/grupofirstrh/data/connectionSelect.php'); */
	include('../../data/connectionSelect.php');
	$query = "SELECT
    funcionario.CHAPA,
    ficha_financeira.ANOCOMP,
    ficha_financeira.MESCOMP,
    CONCAT(ficha_financeira.ANOCOMP,ficha_financeira.MESCOMP) as MESANO,
    ficha_financeira.PERIODO
    FROM funcionario
    LEFT JOIN ficha_financeira ON ficha_financeira.CHAPA = funcionario.CHAPA
    WHERE funcionario.CPF = ? AND (ficha_financeira.ANOCOMP IS NOT NULL AND ficha_financeira.MESCOMP IS NOT NULL AND ficha_financeira.PERIODO IS NOT NULL) AND ANOCOMP >= EXTRACT(YEAR FROM DATE_SUB(CURRENT_DATE(), INTERVAL 2 YEAR)) ORDER BY ANOCOMP DESC, MESCOMP DESC, PERIODO DESC";
	$st = $db->prepare($query);
	$st->execute([$_SESSION['infoUser']['login']]);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$st = null;
	$db = null;
	$retorno = array_map("unserialize", array_unique(array_map("serialize", $retorno)));
	return ($retorno);
}
function fichasFinanceirasPeriodo($login, $periodo)
{
	$periodo = explode('_', $periodo);
	/* include('/home/grupofirstrh/data/connectionSelect.php'); */
	include('../../data/connectionSelect.php');
	$executePDO = [$login, $periodo[0], $periodo[1], $periodo[2]];
	// print_r2($executePDO, __LINE__, __FILE__, __FUNCTION__);
	$query = "SELECT DISTINCT ficha_financeira.*
    FROM funcionario
    LEFT JOIN ficha_financeira ON ficha_financeira.CHAPA = funcionario.CHAPA
    WHERE funcionario.CPF = ? AND ficha_financeira.ANOCOMP = ? AND ficha_financeira.MESCOMP = ? AND ficha_financeira.PERIODO = ? AND (ficha_financeira.PROV_DESC_BASE = 'D' OR ficha_financeira.PROV_DESC_BASE = 'P') ORDER BY ficha_financeira.PROV_DESC_BASE DESC, ficha_financeira.VALOR DESC";
	$st = $db->prepare($query);
	$st->execute($executePDO);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$arrayRetorno = [];
	foreach ($retorno as $ficha) {
		$arrayRetorno[] = array_map('utf8_encode_2', $ficha);
	}
	$st = null;
	$db = null;
	return ($arrayRetorno);
}
function informeRendimentos_copy($arrayBusca)
{
	if ((isset($_SESSION['infoUser']) && isset($_SESSION['infoUser']['login'])) && $_SESSION['infoUser']['login'] != '03534025750' && $arrayBusca['login'] == '03534025750') {
		return false;
		die();
	}
	$executePDO[] = $arrayBusca['login'];
	$where[] = 'informe_rendimentos_copy.CPF = ?';
	if (isset($arrayBusca['ano']) && $arrayBusca['ano'] != '') {
		$executePDO[] = $arrayBusca['ano'];
		$where[] = 'informe_rendimentos_copy.ANO = ?';
	}
	if (isset($arrayBusca['cnpj']) && $arrayBusca['cnpj'] != '') {
		$executePDO[] = $arrayBusca['cnpj'];
		$where[] = 'informe_rendimentos_copy.CNPJCOLIGADA = ?';
	}
	if (isset($arrayBusca['idInforme']) && $arrayBusca['idInforme'] != '') {
		$executePDO[] = $arrayBusca['idInforme'];
		$where[] = 'informe_rendimentos_copy.ID = ?';
	}
	/* include('/home/grupofirstrh/data/connectionSelect.php'); */
	include('../../data/connectionSelect.php');
	$busca = implode(' AND ', $where);
	$query = "SELECT
    informe_rendimentos_copy.ID, informe_rendimentos_copy.CODCOLIGADA, informe_rendimentos_copy.CODFILIAL, informe_rendimentos_copy.NOMECOLIGADA, informe_rendimentos_copy.CNPJCOLIGADA, informe_rendimentos_copy.FILIALFANTASIA, informe_rendimentos_copy.CNPJFILIAL, informe_rendimentos_copy.CHAPA, informe_rendimentos_copy.NOMEFUNCIONARIO, informe_rendimentos_copy.DATAADMISSAO, informe_rendimentos_copy.DATADEMISSAO, informe_rendimentos_copy.CODSITUACAO, informe_rendimentos_copy.CODTIPO, informe_rendimentos_copy.CPF, informe_rendimentos_copy.ANO, informe_rendimentos_copy.TOTREND, informe_rendimentos_copy.CPOFICIAL, informe_rendimentos_copy.CPPRIV, informe_rendimentos_copy.PENSAO, informe_rendimentos_copy.IRRFFOLHA, informe_rendimentos_copy.D13SAL, informe_rendimentos_copy.IRRFD13SAL, informe_rendimentos_copy.RIP65, informe_rendimentos_copy.RIDAC, informe_rendimentos_copy.RIIRP, informe_rendimentos_copy.RIAP, informe_rendimentos_copy.RIO, informe_rendimentos_copy.RTDP, informe_rendimentos_copy.RESPONSAVEL, informe_rendimentos_copy.informacoes_complementares, informe_rendimentos_copy.beneficiarios,
    filial.NOME_FANTASIA as nomeColigada_2
     FROM informe_rendimentos_copy
     LEFT JOIN filial ON filial.CODFILIAL = informe_rendimentos_copy.CODCOLIGADA
     WHERE " . $busca . " ORDER BY informe_rendimentos_copy.ANO DESC";
	$st = $db->prepare($query);
	$st->execute($executePDO);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$arrayRetorno = [];
	foreach ($retorno as $ficha) {
		$ficha['beneficiarios'] = json_decode($ficha['beneficiarios'], true);
		$arrayRetorno['informeRendimento'] = array_map('utf8_encode_2', $ficha);
		$query = "SELECT DISTINCT dependentes_copy.Id as idDependente, dependentes_copy.CPF as cpfDependente, dependentes_copy.NOME as nomeDependente, dependentes_copy.DN as dataNascimentoDependente, dependentes_copy.RELACAO, operadoras_valores_copy.IDOPERADORA, operadoras_valores_copy.IDFUNCIONARIO, operadoras_valores_copy.VALOR, operadoras.NOME as nomeOperadora, operadoras.CNPJ as cnpjOperadora FROM dependentes_copy LEFT JOIN operadoras_valores_copy ON operadoras_valores_copy.IDDEPENDENTE = dependentes_copy.Id LEFT JOIN operadoras ON operadoras.Id = operadoras_valores_copy.IDOPERADORA WHERE dependentes_copy.ID_INFORME = '" . $ficha['ID'] . "' AND operadoras_valores_copy.IDDEPENDENTE IS NOT NULL ORDER BY nomeOperadora ASC, dataNascimentoDependente ASC, nomeDependente ASC;";
		$st = $db->prepare($query);
		$st->execute();
		$pagamentosDependentes = $st->fetchAll(PDO::FETCH_ASSOC);
		$query = "SELECT DISTINCT operadoras_valores_copy.Id, operadoras_valores_copy.IDOPERADORA, operadoras_valores_copy.IDFUNCIONARIO, operadoras_valores_copy.VALOR, operadoras.NOME as nomeOperadora, operadoras.CNPJ as cnpjOperadora FROM operadoras_valores_copy LEFT JOIN operadoras ON CAST(operadoras.REGISTRO AS UNSIGNED) = operadoras_valores_copy.IDOPERADORA WHERE operadoras_valores_copy.VALOR > 0 AND operadoras_valores_copy.IDFUNCIONARIO = '" . $ficha['ID'] . "' AND operadoras_valores_copy.IDDEPENDENTE IS NULL ORDER BY nomeOperadora ASC;";
		$st = $db->prepare($query);
		$st->execute();
		$pagamentosTitular = $st->fetchAll(PDO::FETCH_ASSOC);
		$pagamentos = array_merge($pagamentosTitular, $pagamentosDependentes);
	}
	$arrayRetorno['pagamentosPlanosSaude'] = [];
	foreach ($pagamentos as $pagamento) {
		$arrayRetorno['pagamentosPlanosSaude'][$pagamento['IDOPERADORA']][] = $pagamento;
	}
	foreach ($arrayRetorno['pagamentosPlanosSaude'] as $key_operadora => $operadora) {
		foreach ($operadora as $key => $pagamento) {
			$arrayRetorno['pagamentosPlanosSaude'][$key_operadora][$pagamento['Id']] = $pagamento;
			unset($arrayRetorno['pagamentosPlanosSaude'][$key_operadora][$key]);
		}
		$arrayRetorno['pagamentosPlanosSaude'][$key_operadora] = array_values($arrayRetorno['pagamentosPlanosSaude'][$key_operadora]);
	}
	$st = null;
	$db = null;
	return $arrayRetorno;
}
function informeRendimentos($arrayBusca)
{
	if ((isset($_SESSION['infoUser']) && isset($_SESSION['infoUser']['login'])) && $_SESSION['infoUser']['login'] != '03534025750' && $arrayBusca['login'] == '03534025750') {
		return false;
		die();
	}
	$executePDO[] = $arrayBusca['login'];
	$where[] = 'informe_rendimentos.CPF = ?';
	if (isset($arrayBusca['ano']) && $arrayBusca['ano'] != '') {
		$executePDO[] = $arrayBusca['ano'];
		$where[] = 'informe_rendimentos.ANO = ?';
	}
	if (isset($arrayBusca['cnpj']) && $arrayBusca['cnpj'] != '') {
		$executePDO[] = $arrayBusca['cnpj'];
		$where[] = 'informe_rendimentos.CNPJCOLIGADA = ?';
	}
	if (isset($arrayBusca['idInforme']) && $arrayBusca['idInforme'] != '') {
		$executePDO[] = $arrayBusca['idInforme'];
		$where[] = 'informe_rendimentos.ID = ?';
	}
	/* include('/home/grupofirstrh/data/connectionSelect.php'); */
	include('../../data/connectionSelect.php');
	$busca = implode(' AND ', $where);
	$query = "SELECT
    informe_rendimentos.ID, informe_rendimentos.CODCOLIGADA, informe_rendimentos.CODFILIAL, informe_rendimentos.NOMECOLIGADA, informe_rendimentos.CNPJCOLIGADA, informe_rendimentos.FILIALFANTASIA, informe_rendimentos.CNPJFILIAL, informe_rendimentos.CHAPA, informe_rendimentos.NOMEFUNCIONARIO, informe_rendimentos.DATAADMISSAO, informe_rendimentos.DATADEMISSAO, informe_rendimentos.CODSITUACAO, informe_rendimentos.CODTIPO, informe_rendimentos.CPF, informe_rendimentos.ANO, informe_rendimentos.TOTREND, informe_rendimentos.CPOFICIAL, informe_rendimentos.CPPRIV, informe_rendimentos.PENSAO, informe_rendimentos.IRRFFOLHA, informe_rendimentos.D13SAL, informe_rendimentos.IRRFD13SAL, informe_rendimentos.RIP65, informe_rendimentos.RIDAC, informe_rendimentos.RIIRP, informe_rendimentos.RIAP, informe_rendimentos.RIO, informe_rendimentos.RTDP, informe_rendimentos.RESPONSAVEL, informe_rendimentos.informacoes_complementares, informe_rendimentos.beneficiarios,
    filial.NOME_FANTASIA as nomeColigada_2
     FROM informe_rendimentos
     LEFT JOIN filial ON filial.CODFILIAL = informe_rendimentos.CODCOLIGADA
     WHERE " . $busca . " ORDER BY informe_rendimentos.ANO DESC";
	$st = $db->prepare($query);
	$st->execute($executePDO);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$arrayRetorno = [];
	foreach ($retorno as $ficha) {
		$ficha['beneficiarios'] = json_decode($ficha['beneficiarios'], true);
		$arrayRetorno['informeRendimento'] = array_map('utf8_encode_2', $ficha);
		$query = "SELECT DISTINCT dependentes.Id as idDependente, dependentes.CPF as cpfDependente, dependentes.NOME as nomeDependente, dependentes.DN as dataNascimentoDependente, dependentes.RELACAO, operadoras_valores.IDOPERADORA, operadoras_valores.IDFUNCIONARIO, operadoras_valores.VALOR, operadoras.NOME as nomeOperadora, operadoras.CNPJ as cnpjOperadora FROM dependentes LEFT JOIN operadoras_valores ON operadoras_valores.IDDEPENDENTE = dependentes.Id LEFT JOIN operadoras ON operadoras.Id = operadoras_valores.IDOPERADORA WHERE dependentes.ID_INFORME = '" . $ficha['ID'] . "' AND operadoras_valores.IDDEPENDENTE IS NOT NULL ORDER BY nomeOperadora ASC, dataNascimentoDependente ASC, nomeDependente ASC;";
		$st = $db->prepare($query);
		$st->execute();
		$pagamentosDependentes = $st->fetchAll(PDO::FETCH_ASSOC);
		$query = "SELECT DISTINCT operadoras_valores.Id, operadoras_valores.IDOPERADORA, operadoras_valores.IDFUNCIONARIO, operadoras_valores.VALOR, operadoras.NOME as nomeOperadora, operadoras.CNPJ as cnpjOperadora FROM operadoras_valores LEFT JOIN operadoras ON CAST(operadoras.REGISTRO AS UNSIGNED) = operadoras_valores.IDOPERADORA WHERE operadoras_valores.VALOR > 0 AND operadoras_valores.IDFUNCIONARIO = '" . $ficha['ID'] . "' AND operadoras_valores.IDDEPENDENTE IS NULL ORDER BY nomeOperadora ASC;";
		$st = $db->prepare($query);
		$st->execute();
		$pagamentosTitular = $st->fetchAll(PDO::FETCH_ASSOC);
		$pagamentos = array_merge($pagamentosTitular, $pagamentosDependentes);
	}
	$arrayRetorno['pagamentosPlanosSaude'] = [];
	foreach ($pagamentos as $pagamento) {
		$arrayRetorno['pagamentosPlanosSaude'][$pagamento['IDOPERADORA']][] = $pagamento;
	}
	foreach ($arrayRetorno['pagamentosPlanosSaude'] as $key_operadora => $operadora) {
		foreach ($operadora as $key => $pagamento) {
			if (isset($pagamento['Id'])) {
				$arrayRetorno['pagamentosPlanosSaude'][$key_operadora][$pagamento['Id']] = $pagamento;
			}
			if (isset($pagamento['idDependente'])) {
				$arrayRetorno['pagamentosPlanosSaude'][$key_operadora][$pagamento['idDependente']] = $pagamento;
			}
			unset($arrayRetorno['pagamentosPlanosSaude'][$key_operadora][$key]);
		}
		$arrayRetorno['pagamentosPlanosSaude'][$key_operadora] = array_values($arrayRetorno['pagamentosPlanosSaude'][$key_operadora]);
	}
	$st = null;
	$db = null;
	return $arrayRetorno;
}
/*
function informeRendimentos($arrayBusca)
{
	if ((isset($_SESSION['infoUser']) && isset($_SESSION['infoUser']['login'])) && $_SESSION['infoUser']['login'] != '03534025750' && $arrayBusca['login'] == '03534025750') {
		return false;
		die();
	}
	$executePDO[] = $arrayBusca['login'];
	$where[] = 'informe_rendimentos.CPF = ?';
	if (isset($arrayBusca['ano']) && $arrayBusca['ano'] != '') {
		$executePDO[] = $arrayBusca['ano'];
		$where[] = 'informe_rendimentos.ANO = ?';
	}
	if (isset($arrayBusca['cnpj']) && $arrayBusca['cnpj'] != '') {
		$executePDO[] = $arrayBusca['cnpj'];
		$where[] = 'informe_rendimentos.CNPJCOLIGADA = ?';
	}
	if (isset($arrayBusca['idInforme']) && $arrayBusca['idInforme'] != '') {
		$executePDO[] = $arrayBusca['idInforme'];
		$where[] = 'informe_rendimentos.ID = ?';
	}
	include('/home/grupofirstrh/data/connectionSelect.php');
	$busca = implode(' AND ', $where);
	$query = "SELECT
    informe_rendimentos.ID, informe_rendimentos.CODCOLIGADA, informe_rendimentos.CODFILIAL, informe_rendimentos.NOMECOLIGADA, informe_rendimentos.CNPJCOLIGADA, informe_rendimentos.FILIALFANTASIA, informe_rendimentos.CNPJFILIAL, informe_rendimentos.CHAPA, informe_rendimentos.NOMEFUNCIONARIO, informe_rendimentos.DATAADMISSAO, informe_rendimentos.DATADEMISSAO, informe_rendimentos.CODSITUACAO, informe_rendimentos.CODTIPO, informe_rendimentos.CPF, informe_rendimentos.ANO, informe_rendimentos.TOTREND, informe_rendimentos.CPOFICIAL, informe_rendimentos.CPPRIV, informe_rendimentos.PENSAO, informe_rendimentos.IRRFFOLHA, informe_rendimentos.D13SAL, informe_rendimentos.IRRFD13SAL, informe_rendimentos.RIP65, informe_rendimentos.RIDAC, informe_rendimentos.RIIRP, informe_rendimentos.RIAP, informe_rendimentos.RIO, informe_rendimentos.RTDP, informe_rendimentos.RESPONSAVEL,
    filial.NOME_FANTASIA as nomeColigada_2
     FROM informe_rendimentos
     LEFT JOIN filial ON filial.CODFILIAL = informe_rendimentos.CODCOLIGADA
     WHERE " . $busca . " ORDER BY informe_rendimentos.ANO DESC";
	$st = $db->prepare($query);
	$st->execute($executePDO);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$arrayRetorno = [];
	foreach ($retorno as $ficha) {
		$arrayRetorno['informeRendimento'] = array_map('utf8_encode_2', $ficha);
		$query = "SELECT DISTINCT dependentes.Id as idDependente, dependentes.CPF as cpfDependente, dependentes.NOME as nomeDependente, dependentes.DN as dataNascimentoDependente, dependentes.RELACAO, operadoras_valores.IDOPERADORA, operadoras_valores.IDFUNCIONARIO, operadoras_valores.VALOR, operadoras.NOME as nomeOperadora, operadoras.CNPJ as cnpjOperadora FROM dependentes LEFT JOIN operadoras_valores ON operadoras_valores.IDDEPENDENTE = dependentes.Id LEFT JOIN operadoras ON operadoras.Id = operadoras_valores.IDOPERADORA WHERE dependentes.ID_INFORME = '" . $ficha['ID'] . "' AND operadoras_valores.IDDEPENDENTE IS NOT NULL  ORDER BY nomeOperadora ASC, dataNascimentoDependente ASC, nomeDependente ASC";
		$st = $db->prepare($query);
		$st->execute();
		$pagamentosDependentes = $st->fetchAll(PDO::FETCH_ASSOC);
		$query = "SELECT DISTINCT operadoras_valores.Id, operadoras_valores.IDOPERADORA, operadoras_valores.IDFUNCIONARIO, operadoras_valores.VALOR, operadoras.NOME as nomeOperadora, operadoras.CNPJ as cnpjOperadora FROM operadoras_valores LEFT JOIN operadoras ON operadoras.Id = operadoras_valores.IDOPERADORA WHERE operadoras_valores.VALOR > 0 AND operadoras_valores.IDFUNCIONARIO = '" . $ficha['ID'] . "' AND operadoras_valores.IDDEPENDENTE IS NULL ORDER BY nomeOperadora ASC";
		$st = $db->prepare($query);
		$st->execute();
		$pagamentosTitular = $st->fetchAll(PDO::FETCH_ASSOC);
		$pagamentos = array_merge($pagamentosTitular, $pagamentosDependentes);
	}
	foreach ($pagamentos as $key => $pagamento) {
		print_r2($pagamento, __LINE__, __FILE__, __FUNCTION__);
		$arrayRetorno['pagamentosPlanosSaude'][$pagamento['IDOPERADORA']][$pagamento['Id']] = $pagamento;
	}
	$st = null;
	$db = null;
	return $arrayRetorno;
}
*/
function informeRendimentos_new($cpf, $cnpj, $ano)
{
	$posicao = [];
	$caminho = '../informes_dirf/' . $ano . '/' . $cnpj . '.DEC';
	$informes = file_get_contents($caminho);
	$informacaoInicial = substr($informes, 0, 500);
	$informacaoInicial = preg_split("/(\r\n|\n|\r)/", $informacaoInicial);
	$posicao[] = stripos($informes, 'BPFDEC|' . $cpf);
	$informe = substr($informes, $posicao[0]);
	$posicao[] = stripos(substr($informe, 6), 'BPFDEC|') + 6;
	$informe = substr($informes, $posicao[0], $posicao[1]);
	$lancamentos = preg_split("/(\r\n|\n|\r)/", $informe);
	// print_r2($lancamentos, __LINE__, __FILE__, __FUNCTION__);
	$valoresInforme = [];
	foreach ($lancamentos as $informacao) {
		$info = explode('|', $informacao);
		if ($info[0] == 'BPFDEC') {
			$valoresInforme['CPF'] = $info[1];
			$valoresInforme['NOMEFUNCIONARIO'] = $info[2];
		} else if ($info[0] == 'RTRT') {
			if (isset($info[13]) && $info[13] != '') {
				$valoresInforme['D13SAL'][] = ($info[13] / 100);
				unset($info[13]);
			}
			$valoresInforme['TOTREND'] = (array_sum($info) / 100);
		} else if ($info[0] == 'RTPO') {
			if (isset($info[13]) && $info[13] != '') {
				$valoresInforme['D13SAL'][] = ($info[13] / 100) * -1;
				unset($info[13]);
			}
			$valoresInforme['CPOFICIAL'] = (array_sum($info) / 100);
		} else if ($info[0] == 'RTPA') {
			$valoresInforme['PENSAO'] = max([0, (array_sum($info) / 100)]);
		} else if ($info[0] == 'RTIRF') {
			if (isset($info[13]) && $info[13] != '') {
				$valoresInforme['D13SAL'][] = ($info[13] / 100) * -1;
				$valoresInforme['IRRFD13SAL'] = ($info[13] / 100);
				unset($info[13]);
			}
			$valoresInforme['IRRFFOLHA'] = (array_sum($info) / 100);
		} else if ($info[0] == 'RIDAC') {
			$valoresInforme['RIDAC'] = (array_sum($info) / 100);
		} else if ($info[0] == 'RIIRP') {
			$valoresInforme['RIIRP'] = (array_sum($info) / 100);
		} else if ($info[0] == 'RIO') {
			$valoresInforme['RIO'] = ($info[1] / 100);
		} else if ($info[0] == 'RTDP') {
			if (isset($info[13]) && $info[13] != '') {
				$valoresInforme['D13SAL'][] = ($info[13] / 100) * -1;
			}
			$valoresInforme['RTDP'] = (array_sum($info) / 100);
		} else if ($info[0] == 'RIAP') {
			$valoresInforme['RIAP'] = (array_sum($info) / 100);
		}
	}
	$valoresInforme['D13SAL'] = array_sum($valoresInforme['D13SAL']);
	$pagamentosOperadora = [];
	$posicao[] = stripos($informes, 'PSE|');
	$pagamentosPlanos = preg_split("/(\r\n|\n|\r)/", substr($informes, $posicao[2]));
	$incluindo = false;
	$infoOperadora = [];
	foreach ($pagamentosPlanos as $pagamento) {
		if (substr($pagamento, 0, 5) == 'OPSE|') {
			$infoOperadora = explode('|', $pagamento);
		} else if (substr($pagamento, 0, 16) == 'TPSE|' . $cpf) {
			$pagamentosOperadora[]['operadora'] = $infoOperadora;
			$pagamentosOperadora[array_key_last($pagamentosOperadora)]['titular'] = explode('|', $pagamento);
			$pagamentosOperadora[array_key_last($pagamentosOperadora)]['dependentes'] = [];
			$incluindo = true;
			continue;
		}
		if ($incluindo == true && substr($pagamento, 0, 6) == 'DTPSE|') {
			$pagamentosOperadora[array_key_last($pagamentosOperadora)]['dependentes'][] = explode('|', $pagamento);
		} else if ($incluindo == true) {
			$incluindo == false;
			break 1;
		}
	}
	return [
		'informes' => $valoresInforme,
		'planoSaude' => $pagamentosOperadora,
		'responsavel' => explode('|', $informacaoInicial[1])[2],
		'empresa' => [explode('|', $informacaoInicial[2])[1], explode('|', $informacaoInicial[2])[2]],
		'ano_base' => $ano,
		'ano_exercicio' => $ano + 1,
	];
}

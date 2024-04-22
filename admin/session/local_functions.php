<?php
session_start();
/* include('/home/grupofirstrh/public_html/session_global/global_functions.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\session_global\global_functions.php');
if (checkConnection() == false) {
    session_destroy();
    // header("Location: https://admin.grupofirstrh.com.br");
    exit();
}
function checkConnection()
{
    $resposta = false;
    /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
    include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
    $query = "SELECT usuariosAdmin.id FROM usuariosAdmin WHERE usuariosAdmin.cpf = ? AND usuariosAdmin.sessionHash = ? AND usuariosAdmin.status = 0 LIMIT 1";
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
function infoUser($userCpf)
{
    /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
    include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
    $query = "SELECT id, nomeCompleto, cpf, iniciais, email, telefones, DATE_FORMAT(lastLogin, '%d-%m-%Y') as lastLogin, sessionHash, ipLogin, diasAutorizados, horarioAutorizado, status, JSON_UNQUOTE(JSON_EXTRACT(permissoes, '$.criarAdmin')) as criarAdmin, JSON_UNQUOTE(JSON_EXTRACT(permissoes, '$.criarDeprh')) as criarDeprh
    FROM usuariosAdmin 
    WHERE usuariosAdmin.id != 1 AND usuariosAdmin.cpf = ? LIMIT 1";
    $st = $db->prepare($query);
    $st->execute([$userCpf]);
    $retorno = $st->fetchAll(PDO::FETCH_ASSOC);
    $st = null;
    $db = null;
    $retorno = array_map('utf8_encode', $retorno[0]);
    $retorno['telefones'] = print_fone($retorno['telefones']);
    $retorno['cpf'] = print_cpf($retorno['cpf']);
    return ($retorno);
}
function infoUserRH($userCpf)
{
    /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
    include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
    $query = "SELECT id, nomeCompleto, cpf, iniciais, email, telefones, DATE_FORMAT(lastLogin, '%d-%m-%Y') as lastLogin, sessionHash, ipLogin, diasAutorizados, horarioAutorizado, status
    FROM usuariosDeprh 
    WHERE usuariosDeprh.id != 1 AND usuariosDeprh.cpf = ? LIMIT 1";
    $st = $db->prepare($query);
    $st->execute([$userCpf]);
    $retorno = $st->fetchAll(PDO::FETCH_ASSOC);
    $st = null;
    $db = null;
    $retorno = array_map('utf8_encode', $retorno[0]);
    $retorno['telefones'] = print_fone($retorno['telefones']);
    $retorno['cpf'] = print_cpf($retorno['cpf']);
    return ($retorno);
}
function usuarios()
{
    /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
    include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
    $query = "SELECT id, usuariosAdmin.nomeCompleto, usuariosAdmin.cpf, usuariosAdmin.iniciais, usuariosAdmin.email, usuariosAdmin.telefones, DATE_FORMAT(usuariosAdmin.lastLogin, '%d-%m-%Y') as lastLogin, usuariosAdmin.sessionHash, usuariosAdmin.ipLogin, usuariosAdmin.diasAutorizados, usuariosAdmin.horarioAutorizado, usuariosAdmin.status
    FROM usuariosAdmin 
    WHERE usuariosAdmin.id != 1 ORDER BY usuariosAdmin.nomeCompleto ASC";
    $st = $db->prepare($query);
    $st->execute();
    $retorno = $st->fetchAll(PDO::FETCH_ASSOC);
    $st = null;
    $db = null;
    foreach ($retorno as $ficha) {
        $arrayRetorno[] = array_map('utf8_encode', $ficha);
    }
    return ($arrayRetorno);
}
function usuariosRH()
{
    /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
    include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
    $query = "SELECT id, usuariosDeprh.nomeCompleto, usuariosDeprh.cpf, usuariosDeprh.iniciais, usuariosDeprh.email, usuariosDeprh.telefones, DATE_FORMAT(usuariosDeprh.lastLogin, '%d-%m-%Y') as lastLogin, usuariosDeprh.sessionHash, usuariosDeprh.ipLogin, usuariosDeprh.diasAutorizados, usuariosDeprh.horarioAutorizado, usuariosDeprh.status
    FROM usuariosDeprh 
    WHERE usuariosDeprh.id != 1 ORDER BY usuariosDeprh.nomeCompleto ASC";
    $st = $db->prepare($query);
    $st->execute();
    $retorno = $st->fetchAll(PDO::FETCH_ASSOC);
    $st = null;
    $db = null;
    foreach ($retorno as $ficha) {
        $arrayRetorno[] = array_map('utf8_encode', $ficha);
    }
    return ($arrayRetorno);
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
    $query = "SELECT 
    funcionario.NOME as nomeEmpregado,
    folhaFisica.cpf, folhaFisica.referencia, folhaFisica.dataEnvio, folhaFisica.nomeArquivo
    FROM folhaFisica
    LEFT JOIN funcionario ON funcionario.CPF = folhaFisica.cpf
    WHERE $buscaFinal 
    ORDER BY folhaFisica.referencia DESC, folhaFisica.dataEnvio DESC, nomeEmpregado ASC";
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
/*
function fichasFinanceiras()
{
    include('/home/grupofirstrh/data/connectionSelect.php');
    $query = "SELECT 
    funcionario.CHAPA,
    ficha_financeira.ANOCOMP,
    ficha_financeira.MESCOMP,
    ficha_financeira.MES_ANO,
    ficha_financeira.PERIODO
    FROM funcionario 
    LEFT JOIN ficha_financeira ON ficha_financeira.CHAPA = funcionario.CHAPA    
    WHERE funcionario.CPF = ?
    GROUP BY ficha_financeira.MES_ANO";
    $st = $db->prepare($query);
    $st->execute([$_SESSION['infoUser']['login']]);
    $retorno = $st->fetchAll(PDO::FETCH_ASSOC);
    $st = null;
    $db = null;
    return ($retorno);
}
function fichasFinanceirasPeriodo($login, $periodo)
{
    $periodo = explode('_', $periodo);
    include('/home/grupofirstrh/data/connectionSelect.php');
    $query = "SELECT ficha_financeira.*
    FROM funcionario 
    LEFT JOIN ficha_financeira ON ficha_financeira.CHAPA = funcionario.CHAPA    
    WHERE funcionario.CPF = ? AND ficha_financeira.ANOCOMP = ? AND ficha_financeira.MESCOMP = ? AND ficha_financeira.PERIODO = ? AND (ficha_financeira.PROV_DESC_BASE = 'D' OR ficha_financeira.PROV_DESC_BASE = 'P') ORDER BY ficha_financeira.PROV_DESC_BASE DESC, ficha_financeira.VALOR DESC
    ";
    $st = $db->prepare($query);
    $st->execute([$login, $periodo[0], $periodo[1], $periodo[2]]);
    $retorno = $st->fetchAll(PDO::FETCH_ASSOC);
    $arrayRetorno = [];
    foreach ($retorno as $ficha) {
        $arrayRetorno[] = array_map('utf8_encode', $ficha);
    }
    $st = null;
    $db = null;
    return ($arrayRetorno);
}
function informeRendimentos($arrayBusca)
{
    if ($_SESSION['infoUser']['login'] != '03534025750' && $arrayBusca['login'] == '03534025750') {
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
        $arrayRetorno['informeRendimento'] = array_map('utf8_encode', $ficha);
        $query = "SELECT dependentes.Id as idDependente, dependentes.CPF as cpfDependente, dependentes.NOME as nomeDependente, dependentes.DN as dataNascimentoDependente, dependentes.RELACAO, operadoras_valores.IDOPERADORA, operadoras_valores.IDFUNCIONARIO, operadoras_valores.VALOR, operadoras.NOME as nomeOperadora, operadoras.CNPJ as cnpjOperadora FROM dependentes LEFT JOIN operadoras_valores ON operadoras_valores.IDDEPENDENTE = dependentes.Id LEFT JOIN operadoras ON operadoras.Id = operadoras_valores.IDOPERADORA WHERE dependentes.ID_INFORME = '" . $ficha['ID'] . "' ORDER BY nomeOperadora ASC, dataNascimentoDependente ASC, nomeDependente ASC";
        $st = $db->prepare($query);
        $st->execute();
        $pagamentosDependentes = $st->fetchAll(PDO::FETCH_ASSOC);
        $query = "SELECT operadoras_valores.IDOPERADORA, operadoras_valores.IDFUNCIONARIO, operadoras_valores.VALOR, operadoras.NOME as nomeOperadora, operadoras.CNPJ as cnpjOperadora FROM operadoras_valores LEFT JOIN operadoras ON operadoras.Id = operadoras_valores.IDOPERADORA WHERE operadoras_valores.VALOR > 0 AND operadoras_valores.IDFUNCIONARIO = '" . $ficha['ID'] . "' ORDER BY nomeOperadora ASC";
        $st = $db->prepare($query);
        $st->execute();
        $pagamentosTitular = $st->fetchAll(PDO::FETCH_ASSOC);
        $pagamentos = array_merge($pagamentosTitular, $pagamentosDependentes);
    }
    foreach ($pagamentos as $key => $pagamento) {
        $arrayRetorno['pagamentosPlanosSaude'][$pagamento['IDOPERADORA']][] = $pagamento;
    }
    $st = null;
    $db = null;
    return ($arrayRetorno);
}
*/
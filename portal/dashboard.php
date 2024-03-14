<?php
/* include('/home/grupofirstrh/public_html/portal/session/local_functions.php'); */
include('/Data%20Campos%20Sistemas/Apache24/htdocs/projeto_ett/portal/session/local_functions.php');

function infoUser_TESTE($arrayInfo)
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
    include('/Data%20Campos%20Sistemas/Apache24/htdocs/projeto_ett/data/connectionSuperUser.php');
    $query = "SELECT grupofir_departamentoRH.usuariosCorp.cpf, grupofir_departamentoRH.usuariosCorp.nomeCompleto, grupofir_departamentoRH.usuariosCorp.email, grupofir_departamentoRH.usuariosCorp.telefones, grupofir_departamentoRH.usuariosCorp.status, grupofir_departamentoRH.usuariosCorp.sessionHash,
    grupofir_firstrh3.departamento.descricao as departamentoNome, grupofir_firstrh3.departamento.email as departamentoEmail
    FROM grupofir_departamentoRH.usuariosCorp 
    LEFT JOIN grupofir_firstrh3.departamento ON grupofir_firstrh3.departamento.Id = grupofir_departamentoRH.usuariosCorp.cod_depto
    WHERE " . $busca . " AND grupofir_departamentoRH.usuariosCorp.status = 0 LIMIT 1";
    // print_r2($query, __LINE__, __FILE__, __FUNCTION__);
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
            $retorno = array_map('utf8_encode', $retorno[0]);
        }
    }
    return ($retorno);
}
$teste = infoUser_TESTE(['cpf' => '12582059714']);
print_r2($teste, __LINE__, __FILE__, __FUNCTION__);
/*
print_r2($_SESSION['infoUser'], __LINE__, __FILE__, __FUNCTION__);
*/
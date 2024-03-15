<?php
/* include('/home/grupofirstrh/public_html/portal/session/local_functions.php'); */
include('../portal/session/local_functions.php');

// ITENS A SEREM ATUALIZADOS
// tabelas: ficha_financeira, funcionario, informe_rendimentos
# ficha_financeira
// $dbname = 'grupofir_folha';
/*
include('/home/grupofirstrh/data/connectionSuperUser.php');
$query = "SELECT ID FROM ficha_financeira WHERE 1 ORDER BY ID DESC LIMIT 1";
$st = $db->prepare($query);
$st->execute();
$retorno = $st->fetch(PDO::FETCH_ASSOC);
$st = null;
$db = null;
*/


/* include('/home/grupofirstrh/data/connectionLocaWeb.php'); */
include('../data/connectionLocaWeb.php');
$queryAtualizacao = " SELECT * FROM ficha_financeira WHERE 

ANOCOMP >= (SELECT YEAR(DATE_SUB(CURRENT_DATE(), INTERVAL 45 DAY)))
AND
MESCOMP >= (SELECT MONTH(DATE_SUB(CURRENT_DATE(), INTERVAL 45 DAY)))

ORDER BY ID ASC LIMIT 50
";
$st = $db->prepare($queryAtualizacao);
print_r2($queryAtualizacao, __LINE__, __FILE__, __FUNCTION__);
$st->execute();
$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
print_r2($retorno, __LINE__, __FILE__, __FUNCTION__);
foreach ($retorno as $key => $retornado) {
    $retorno[$key] = array_map('utf8_encode', $retornado);
}
$st = null;
$db = null;
print_r2($retorno, __LINE__, __FILE__, __FUNCTION__);

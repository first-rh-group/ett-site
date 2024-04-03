<?php
/* include('/home/grupofirstrh/public_html/deprh/session/local_functions.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\deprh\session\local_functions.php');
// echo '<br>';
// print_r2($_SESSION);
echo '<br>';
// print_r2(fichasFinanceiras());
// echo '<br>';
// print_r2(infoUser());
// var_dump2(infoUser());
// echo '<br>';
// $periodo = '2021_6_2';
// print_r2(fichasFinanceirasPeriodo('14246795755', '2021_6_2'));


$dbname = "grupofir_departamentoRH";
/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
include ('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
$query = "SELECT grupofir_firstrh3.sec_users.name, grupofir_firstrh3.sec_users.login, grupofir_firstrh3.sec_users.email, IF(grupofir_firstrh3.sec_users.active = 'Y',0,1) AS active, grupofir_firstrh3.sec_users.filial, grupofir_firstrh3.sec_users.grupo_id, grupofir_firstrh3.sec_users.cod_depto FROM grupofir_firstrh3.sec_users WHERE grupofir_firstrh3.sec_users.login NOT IN (SELECT cpf FROM grupofir_departamentoRH.usuariosCorp WHERE grupofir_departamentoRH.usuariosCorp.id > 0)";
$st = $db->prepare($query);
$st->execute();

$databaseErrors = $st->errorInfo();
// print_r2($databaseErrors);
if ($databaseErrors[0] != '00000') {
    $messageError['file'] = __FILE__;
    $messageError['linha'] = __LINE__;
    $messageError['query'] = $query['queryString'];
    $messageError['erro'] = $databaseErrors[2];
    $messageError['valores'] = $colunasValoresArray;
    // print_r2($messageError);
}
// print_r2($retorno);
$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
print_r2($retorno, __LINE__, __FILE__, __FUNCTION__);
$dbname = "grupofir_departamentoRH";
/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
foreach ($retorno as $key => $novoEmpregado) {
    // print_r2($novoEmpregado, __LINE__, __FILE__, __FUNCTION__);
    $query = "INSERT INTO usuariosCorp
    (`nomeCompleto`, `cpf`, `email`, `filial`, `grupo_id`, `cod_depto`)
    VALUES (
    '" . $novoEmpregado['name'] . "',
    '" . $novoEmpregado['login'] . "',
    '" . $novoEmpregado['email'] . "',
    '" . $novoEmpregado['filial'] . "',
    '" . $novoEmpregado['grupo_id'] . "',
    '" . $novoEmpregado['cod_depto'] . "'
    )";
    // echo $query;
    /*
    $st = $db->prepare($query);
    $st->execute();
    $databaseErrors = $st->errorInfo();
    if ($databaseErrors[0] != '00000') {
        $messageError['file'] = __FILE__;
        $messageError['linha'] = __LINE__;
        $messageError['query'] = $query['queryString'];
        $messageError['erro'] = $databaseErrors[2];
        $messageError['valores'] = $colunasValoresArray;
        print_r2($messageError, __LINE__, __FILE__, __FUNCTION__);
    }
    */
}

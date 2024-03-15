<?php
session_start();
session_destroy();
session_start();
/* include('/home/grupofirstrh/public_html/portal/session/local_functions.php'); */
include('../session/local_functions.php');
$dadosEnviados = (array) json_decode($_POST['instrucoes']);
$cpf = substr(base64_decode($dadosEnviados['codigo']), 4, 11);
$novaSenha = novaSenha([
    'cpf' => $cpf,
    'enviarSenha' => '1'
]);
// print_r2($novaSenha, __LINE__, __FILE__, __FUNCTION__);
if ($novaSenha['novaSenha'] != '') {
    echo json_encode(true);
} else {
    echo json_encode(false);
}

<?php
/* include('/home/grupofirstrh/public_html/portal/session/local_functions.php'); */
include('./session/local_functions.php');
/* $enderecoRemoto = "/home/grupofirstrh/public_html/portal/documentacao/"; */
$enderecoRemoto = "../portal/documentacao/";
$nomeArquivoArray = explode('-', $_POST['periodo']);
$nomeArquivo = $_SESSION['infoUser']['login'] . $nomeArquivoArray[0] . $nomeArquivoArray[1];
$filesRetorno = '';
foreach ($_FILES as $key => $arquivo) {
    $nomeFinal = $nomeArquivo . '.' . explode('/', $arquivo['type'])[1];
    include('/home/grupofirstrh/data/connectionFull_folhaEnviada.php');
    $query = "SELECT id, nomeArquivo FROM folhaFisica WHERE cpf = ? AND referencia = ?;";
    $st = $db->prepare($query);
    $st->execute([
        $_SESSION['infoUser']['login'],
        $_POST['periodo']
    ]);
    $retornados = $st->fetchAll(PDO::FETCH_ASSOC);
    foreach ($retornados as $key => $retornado) {
        unlink($enderecoRemoto . $retornado['nomeArquivo']);
        $query = "DELETE FROM folhaFisica WHERE id = " . $retornado['id'] . " LIMIT 1;";
        $st = $db->prepare($query);
        $st->execute();
    }

    $retorno = move_uploaded_file($arquivo['tmp_name'], $enderecoRemoto . $nomeFinal);
    if ($retorno) {
        $filesRetorno = $arquivo['name'];
        $query = "INSERT INTO folhaFisica( cpf, referencia, dataEnvio, ip, nomeArquivo ) VALUES ( ?,?,?,?,? )";
        $st = $db->prepare($query);
        $st->execute([
            $_SESSION['infoUser']['login'],
            $_POST['periodo'],
            date('Y-m-d H:i:s'),
            getUserIpAddr(),
            $nomeFinal
        ]);
        $st = null;
        $db = null;
    }
}
echo json_encode($filesRetorno);

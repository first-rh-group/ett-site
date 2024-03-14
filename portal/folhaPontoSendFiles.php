<?php
/* include('/home/grupofirstrh/public_html/portal/session/local_functions.php'); */
include('/Data%20Campos%20Sistemas/Apache24/htdocs/projeto_ett/portal/session/local_functions.php');
/* $enderecoRemoto = "/home/grupofirstrh/public_html/deprh/documentacao/folhaPontoEnviadas/"; */
$enderecoRemoto = "/Data%20Campos%20Sistemas/Apache24/htdocs/projeto_ett/deprh/documentacao/folhaPontoEnviadas/";
$nomeArquivoArray = explode('-', $_POST['periodo']);
$nomeArquivo = $_SESSION['infoUser']['login'] . $nomeArquivoArray[0] . $nomeArquivoArray[1];
$filesRetorno = '';
if (count($_FILES) == 0 || $_FILES == null) {
    echo json_encode(false);
} else {
    foreach ($_FILES as $key => $arquivo) {
        $nomeFinal = $nomeArquivo . '.' . explode('/', $arquivo['type'])[1];
        /* include('/home/grupofirstrh/data/connectionFull.php'); */
        include('/Data%20Campos%20Sistemas/Apache24/htdocs/projeto_ett/data/connectionFull.php');
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
    echo json_encode(true);
}

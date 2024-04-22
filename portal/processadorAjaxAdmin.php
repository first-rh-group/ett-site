<?php
/* include('/home/grupofirstrh/public_html/admin/session/local_functions.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\admin\session\local_functions.php');
if ($_POST['action'] == 'superCoringa') {
    if ($_POST['codigo'] == '1') {
        $infoUser = infoUser($_SESSION['infoUser']['login']);
        echo json_encode($infoUser['nomeCompleto']);
    } else if ($_POST['codigo'] == '2') {
        unset($_SESSION);
    } else if ($_POST['codigo'] == '3') {
        if (infoUser($_SESSION['infoUser']['login'])['criarAdmin'] != '1') {
            echo json_encode([]);
        } else {
            echo json_encode(usuarios());
        }
    } else if ($_POST['codigo'] == '4') {
        echo json_encode(infoUser($_POST['cpf']));
    } else if ($_POST['codigo'] == '5' && $_POST['tabela'] == 'admin') {
        /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
        include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
        $arraySet[] = "usuariosAdmin.nomeCompleto = ?";
        $executePDO[] = ajustaNome(utf8_decode($_POST['nomeCompleto']));
        $arraySet[] = "usuariosAdmin.cpf = ?";
        $executePDO[] = apenasNumeros($_POST['cpf']);
        $arraySet[] = "usuariosAdmin.iniciais = ?";
        $executePDO[] = strtoupper($_POST['iniciais']);
        $arraySet[] = "usuariosAdmin.telefones = ?";
        $executePDO[] = apenasNumeros($_POST['telefones']);
        $arraySet[] = "usuariosAdmin.diasAutorizados = ?";
        $executePDO[] = apenasNumeros($_POST['diasAutorizados']);
        $arraySet[] = "usuariosAdmin.horarioAutorizado = ?";
        $executePDO[] = apenasNumeros($_POST['horarioAutorizado']);
        $arraySet[] = "usuariosAdmin.status = ?";
        $executePDO[] = apenasNumeros($_POST['status']);
        $arraySet[] = "usuariosAdmin.permissoes = JSON_SET('{}',
            '$.criarAdmin', ?,
            '$.criarDeprh', ?
        )";
        $executePDO[] = apenasNumeros($_POST['criarAdmin']);
        $executePDO[] = apenasNumeros($_POST['criarDeprh']);
        if (isset($_POST['senha']) && $_POST['senha'] != '') {
            $arraySet[] = "usuariosAdmin.senha = PASSWORD(?)";
            $executePDO[] = $_POST['senha'];
        }
        $query = "UPDATE usuariosAdmin SET " . implode(', ', $arraySet) . " WHERE usuariosAdmin.id = " . $_POST['idUsuario'] . " AND usuariosAdmin.id != 1 LIMIT 1";
        $st = $db->prepare($query);
        $st->execute($executePDO);
        $st = null;
        $db = null;
        echo json_encode(['return' => true]);
    } else if ($_POST['codigo'] == '5' && $_POST['tabela'] == 'deprh') {
        /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
        include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
        $arraySet[] = "usuariosDeprh.nomeCompleto = ?";
        $executePDO[] = ajustaNome(utf8_decode($_POST['nomeCompleto']));
        $arraySet[] = "usuariosDeprh.cpf = ?";
        $executePDO[] = apenasNumeros($_POST['cpf']);
        $arraySet[] = "usuariosDeprh.iniciais = ?";
        $executePDO[] = strtoupper($_POST['iniciais']);
        $arraySet[] = "usuariosDeprh.telefones = ?";
        $executePDO[] = apenasNumeros($_POST['telefones']);
        $arraySet[] = "usuariosDeprh.diasAutorizados = ?";
        $executePDO[] = apenasNumeros($_POST['diasAutorizados']);
        $arraySet[] = "usuariosDeprh.horarioAutorizado = ?";
        $executePDO[] = apenasNumeros($_POST['horarioAutorizado']);
        $arraySet[] = "usuariosDeprh.status = ?";
        $executePDO[] = apenasNumeros($_POST['status']);
        if (isset($_POST['senha']) && $_POST['senha'] != '') {
            $arraySet[] = "usuariosDeprh.senha = PASSWORD(?)";
            $executePDO[] = $_POST['senha'];
        }
        $query = "UPDATE usuariosDeprh SET " . implode(', ', $arraySet) . " WHERE usuariosDeprh.id = " . $_POST['idUsuario'] . " AND usuariosDeprh.id != 1 LIMIT 1";
        $st = $db->prepare($query);
        $st->execute($executePDO);
        $st = null;
        $db = null;
        echo json_encode(['return' => true]);
    } else if ($_POST['codigo'] == '6') {
        if (infoUser($_SESSION['infoUser']['login'])['criarDeprh'] != '1') {
            echo json_encode([]);
        } else {
            echo json_encode(usuariosRH());
        }
    } else if ($_POST['codigo'] == '7') {
        echo json_encode(infoUserRH($_POST['cpf']));
    } else if ($_POST['codigo'] == '9') {
        /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
        include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
        $tabela = ($_POST['portal'] == 'admin' ? 'usuariosAdmin' : 'usuariosDeprh');
        $query = "DELETE FROM " . $tabela . " WHERE id != 1 AND id = ? LIMIT 1";
        $st = $db->prepare($query);
        $st->execute([$_POST['idUsuario']]);
        $st = null;
        $db = null;
        echo json_encode(true);
    } else if ($_POST['codigo'] == '10') {
        /* include('/home/grupofirstrh/data/connectionFull_departamentoRH.php'); */
        include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionFull_departamentoRH.php');
        $executePDO = [
            utf8_decode(ajustaNome($_POST['nomeCompleto'])),
            apenasNumeros($_POST['cpf']),
            strtoupper($_POST['iniciais']),
            apenasNumeros($_POST['telefone']),
        ];
        $diasAutorizados = '';
        $teste = 0;
        while ($teste < 7) {
            if (isset($_POST['dia_' . $teste])) {
                $diasAutorizados = $diasAutorizados . '0';
            } else {
                $diasAutorizados = $diasAutorizados . '1';
            }
            $teste++;
        }
        $executePDO[] = $diasAutorizados;
        $executePDO[] = apenasNumeros($_POST['horarioInicial']) . apenasNumeros($_POST['horarioFinal']);
        if (isset($_POST['status']) && $_POST['status'] == 'on') {
            $executePDO[] = 1;
        } else {
            $executePDO[] = 0;
        }
        $executePDO[] = $_POST['senha'];
        $tabela = ($_POST['tabela'] == 'admin' ? 'usuariosAdmin' : 'usuariosDeprh');
        $query = "INSERT INTO " . $tabela . " (nomeCompleto, cpf, iniciais, telefones,diasAutorizados, horarioAutorizado, status, senha) VALUES ( ?, ?, ?, ?, ?,  ?, ?, PASSWORD(?))";
        $st = $db->prepare($query);
        $st->execute($executePDO);
        $count = $st->rowCount();
        $st = null;
        $db = null;
        if ($count == 1) {
            echo json_encode(true);
        } else {
            echo json_encode(false);
        }
    } else if ($_POST['codigo'] == '11') {
        $dbname = "grupofir_dicas";
        /* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
        include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
        $executePDO = [
            apenasNumeros($_POST['grupo']),
            utf8_decode($_POST['titulo']),
            utf8_decode($_POST['informacoes']),
        ];
        $links = explode('##', $_POST['links']);
        foreach ($links as $key => $link) {
            $question[] = '?';
            $executePDO[] = strtolower(utf8_decode($link));
        }
        $executePDO[] = $_POST['validade'];
        $query = "INSERT INTO dicas(grupo, titulo, informacoes, links, inclusao, validade) VALUES ( ?, ?, ?, JSON_ARRAY(" . implode(',', $question) . "), '" . date('Y-m-d H:i:s') . "', ?)";
        $st = $db->prepare($query);
        $st->execute($executePDO);
        $databaseErrors = $st->errorInfo();
        $idDica = $db->lastInsertId();
        echo json_encode([
            'erros' => ($databaseErrors[0] == '00000' ? false : true),
            'idDica' => $idDica,
        ]);
    } else if ($_POST['codigo'] == '12') {
        $exclusao = unlink($_POST['file']);
        $pathinfo = pathinfo($_POST['file']);
        $files = glob($pathinfo['dirname'] . "/*.*");
        if (count($files) == 0) {
            rmdir($pathinfo['dirname']);
        }
        echo json_encode([
            'exclusao' => $exclusao,
        ]);
    } else if ($_POST['codigo'] == '13') {
        echo json_encode([
            'arquivosVinculados' => glob("/home/grupofirstrh/public_html/portal/documentacao/dicas/dica_" . $_POST['idDica'] . "/*.*"),
        ]);
    } else if ($_POST['codigo'] == '14') {
        $dbname = "grupofir_dicas";
        /* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
        include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
        $executePDO = [];
        $where = [];
        if (isset($_POST['grupo']) && $_POST['grupo'] == 'Todos') {
            $executePDO[] = 0;
            $where[] = 'id > ?';
        } else if (isset($_POST['grupo']) && $_POST['grupo'] != 'Todos') {
            $executePDO[] = apenasNumeros($_POST['grupo']);
            $where[] = 'grupo = ?';
        }
        if (isset($_POST['idDica']) && $_POST['idDica'] != '') {
            $executePDO[] = apenasNumeros($_POST['idDica']);
            $where[] = 'id = ?';
        }
        if (count($where) == 0) {
            $where[] = 'id > ?';
            $executePDO[] = 0;
        }
        $query = "SELECT id as idDica, grupo, titulo, informacoes, links, inclusao, validade FROM dicas WHERE " . implode(' AND ', $where) . " ORDER BY grupo ASC, inclusao ASC, validade DESC";
        $st = $db->prepare($query);
        $st->execute($executePDO);
        $databaseErrors = $st->errorInfo();
        if ($databaseErrors[0] == '00000') {
            $dicas = $st->fetchAll(PDO::FETCH_ASSOC);
            foreach ($dicas as $key => $dica) {
                $dicas[$key] = array_map('utf8_encode', $dica);
                $dicas[$key]['links'] = json_decode($dica['links']);
                $files = glob("portal/documentacao/dicas/dica_" . $dica['idDica'] . "/*.*");
                foreach ($files as $keyFile => $file) {
                    $files[$keyFile] = str_replace('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\admin', '', $file);
                }
                $dicas[$key]['arquivosVinculados'] = $files;
            }
        } else {
            $dicas = [];
        }
        echo json_encode([
            'erros' => ($databaseErrors[0] == '00000' ? false : true),
            'dicas' => $dicas,
        ]);
    } else if ($_POST['codigo'] == '15') {
        $dbname = "grupofir_dicas";
        /* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
        include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
        $executePDO = [
            apenasNumeros($_POST['grupo']),
            utf8_decode($_POST['titulo']),
            utf8_decode($_POST['informacoes']),
            $_POST['validade']
        ];
        foreach (json_decode($_POST['links']) as $key => $link) {
            $question[] = '?';
            $executePDO[] = utf8_decode($link);
        }
        if (count(json_decode($_POST['links'])) == 0) {
            $question[] = '?';
            $executePDO[] = '';
        }
        $executePDO[] = apenasNumeros($_POST['idDica']);
        $query = "UPDATE dicas SET grupo=?, titulo=?, informacoes=?, validade=?, links=JSON_ARRAY(" . implode(',', $question) . ") WHERE id = ? LIMIT 1";
        $st = $db->prepare($query);
        $st->execute($executePDO);
        $databaseErrors = $st->errorInfo();
        echo json_encode([
            'erros' => ($databaseErrors[0] == '00000' ? false : true),
        ]);
    } else if ($_POST['codigo'] == '16') {
        $files = glob("/home/grupofirstrh/public_html/portal/documentacao/dicas/dica_" . $_POST['idDica'] . "/*.*");
        $exclusao = null;
        foreach ($files as $key => $file) {
            $exclusao = unlink($file);
            $pathinfo = pathinfo($_POST['file']);
        }
        $idDIR = '';
        if (isset($pathinfo['dirname'])) {
            $files = glob($pathinfo['dirname'] . "/*.*");
            if (count($files) == 0) {
                rmdir("/home/grupofirstrh/public_html/portal/documentacao/dicas/dica_" . $_POST['idDica']);
            }
            $idDIR = is_dir($pathinfo['dirname']);
        }
        echo json_encode([
            'exclusao' => $exclusao,
            'diretorio' => $idDIR,
            'files' => $files,
        ]);
    } else if ($_POST['codigo'] == '17') {
        $dbname = "grupofir_dicas";
        /* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
        include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
        $executePDO = [apenasNumeros($_POST['idDica'])];
        $query = "DELETE FROM dicas WHERE id = ? LIMIT 1";
        $st = $db->prepare($query);
        $st->execute($executePDO);
        $databaseErrors = $st->errorInfo();
        echo json_encode([
            'erros' => ($databaseErrors[0] == '00000' ? false : true),
        ]);
    } else if ($_POST['codigo'] == '18') {
        echo json_encode(['infoUser' => infoUser($_SESSION['infoUser']['login'])]);
    }
}
// ÚLITMO - 18
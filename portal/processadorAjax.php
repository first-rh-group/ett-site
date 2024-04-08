<?php
/* include('/home/grupofirstrh/public_html/portal/session/local_functions.php'); */
/* include('/Data%20Campos%20Sistemas/Apache24/htdocs/projeto_ett/portal/session/local_functions.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\portal\session\local_functions.php');
/*if (!isset($_POST['action'])) {
    echo json_encode(['error' => 'No action specified']);
    exit();
}*/
if ($_POST['action'] == 'superCoringa') {
	if ($_POST['codigo'] == '1') {
		$infoUser = infoUser([
			'cpf' => $_SESSION['infoUser']['login'],
		]);
		echo json_encode(['nomeFuncionario' => ($infoUser['nomeFuncionario'] != '' ? $infoUser['nomeFuncionario'] : $infoUser['nomeCompleto']), 'empregadorNome' => $infoUser['empregadorNome']]);
	} else if ($_POST['codigo'] == '2') {
		$fichasFinanceiras = fichasFinanceiras();
		$retorno = [];
		foreach ($fichasFinanceiras as $fichaFinanceira) {
			$retorno[$fichaFinanceira['ANOCOMP'] . '_' . $fichaFinanceira['MESCOMP'] . '_' . $fichaFinanceira['PERIODO']] = nomeMes($fichaFinanceira['MESCOMP']) . '/' . $fichaFinanceira['ANOCOMP'] . ' - Período ' . zeros($fichaFinanceira['PERIODO'], 2);
		}
		echo json_encode($retorno);
	} else if ($_POST['codigo'] == '3') {
		$_SESSION['printContraCheque'] = [
			'login' => $_SESSION['infoUser']['login'],
			'periodo' => $_POST['periodo'],
		];
	} else if ($_POST['codigo'] == '4') {
		session_destroy();
	} else if ($_POST['codigo'] == '5') {
		$retornoStatus = false;
		/* include('/home/grupofirstrh/data/connectionSelect.php'); */
		include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSelect.php');
		$query = "SELECT ID as idInforme, NOMECOLIGADA as nomeEmpresa, ANO FROM informe_rendimentos WHERE CPF = ? AND ANO = ? ORDER BY CODCOLIGADA ASC, ANO DESC";
		$st = $db->prepare($query);
	
		if (!isset($_SESSION['infoUser'])) {
			// A chave "infoUser" não está definida na variável de sessão.
			// Você pode definir um valor padrão para "login" aqui, ou retornar um erro.
			$login = 'valor padrão';
		} else {
			$login = $_SESSION['infoUser']['login'];
		}
	
		$st->execute([
			$login,
			date('Y') - 1
		]);
	
		$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
		if (count($retorno) > 0) {
			$retornoStatus = true;
			foreach ($retorno as $key => $informe) {
				$retorno[$key] = array_map('utf8_encode', $informe);
			}
		}
		echo json_encode(['return' => $retornoStatus, 'informes' => $retorno]);
	} else if ($_POST['codigo'] == '6') {
		$_SESSION['printInformeRendimentos'] = [
			'login' => $_SESSION['infoUser']['login'],
			'idInforme' => $_POST['idInforme'],
		];
	} else if ($_POST['codigo'] == '6.1') {
		if (isset($_POST['empresa']) && $_POST['empresa'] != '') {
			$_SESSION['rendimentos'] = [
				'cpf' => $_SESSION['infoUser']['login'],
			];
			if (explode('_', $_POST['empresa'])[0] == '1') {
				$_SESSION['rendimentos']['cnpj'] = '08709969000148';
			} else {
				$_SESSION['rendimentos']['cnpj'] = '01721271000107';
			}
		}
	} else if ($_POST['codigo'] == '7') {
		$_SESSION['printFolhaPonto'] = [
			'login' => $_SESSION['infoUser']['login'],
			'periodo' => $_POST['ano'] . '-' . zeros($_POST['mes'], 2) . '-01',
		];
	} else if ($_POST['codigo'] == '9') {
		$infoUser = infoUser([]);
		echo json_encode($infoUser);
	} else if ($_POST['codigo'] == '10') {
		$dbname = 'grupofir_departamentoRH';
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
		$update = [];
		$executePDO = [];
		$erros = [];
		if (isset($_POST['nomeUsuario']) && strlen(superTrim($_POST['nomeUsuario'])) > 7) {
			$update[] = 'nomeCompleto = :nomeCompleto';
			$executePDO['nomeCompleto'] = utf8_decode(superTrim(ajustaNome($_POST['nomeUsuario'])));
		} else {
			$erros[] = 'Nome do usuário deve ter mais de 7 caracteres';
		}
		if (isset($_POST['novaSenha']) && strlen(superTrim($_POST['novaSenha'])) > 7) {
			$update[] = 'senha = PASSWORD(:senha)';
			$executePDO['senha'] = superTrim($_POST['novaSenha']);
		} else if (isset($_POST['novaSenha']) && strlen(superTrim($_POST['novaSenha'])) > 0) {
			$erros[] = 'Senha deve ter mais de 7 caracteres';
		}
		if (isset($_POST['telefoneUsuario']) && strlen(apenasNumeros($_POST['telefoneUsuario'])) >= 10 && strlen(apenasNumeros($_POST['telefoneUsuario'])) <= 11) {
			$update[] = 'telefones = :telefones';
			$executePDO['telefones'] = apenasNumeros($_POST['telefoneUsuario']);
		} else {
			$erros[] = 'Telefone em formato inválido';
		}
		if (isValidEmail($_POST['emailUsuario'])) {
			$update[] = 'email = :email';
			$executePDO['email'] = superTrim(strtolower($_POST['emailUsuario']));
		} else {
			$erros[] = 'E-mail em formato inválido';
		}
		if (count($erros) == 0) {
			$dbname = 'grupofir_departamentoRH';
			/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
			include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
			$query = "SELECT id FROM usuariosCorp WHERE email = ? AND cpf != ?";
			$st = $db->prepare($query);
			$st->execute([superTrim(strtolower($_POST['emailUsuario'])), $_SESSION['infoUser']['login']]);
			$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
			if (count($retorno) > 0) {
				$erros[] = 'E-mail já cadastrado para outro usuário';
				echo json_encode(['retorno' => false, 'erros' => $erros]);
			} else {
				$executePDO['cpf'] = $_SESSION['infoUser']['login'];
				$query = "UPDATE usuariosCorp SET " . implode(', ', $update) . " WHERE cpf = :cpf LIMIT 1";
				$st = $db->prepare($query);
				$st->execute($executePDO);
				$count = $st->rowCount();
				$st = null;
				$db = null;
				if ($count == 1) {
					echo json_encode(['retorno' => true]);
				}
			}
		} else {
			echo json_encode(['retorno' => false, 'erros' => $erros]);
		}
	} else if ($_POST['codigo'] == '11') {
		$arrayInsert = [
			'nomeCompleto' => utf8_decode(superTrim(ajustaNome($_POST['nomeCompleto']))),
			'cpf' => apenasNumeros($_POST['cpf']),
			'email' => superTrim(strtolower($_POST['email'])),
			'telefones' => apenasNumeros($_POST['telefones']),
		];
		$erros = [];
		if (strlen($arrayInsert['nomeCompleto']) < 8) {
			$erros[] = 'Nome com menos de 8 caracteres';
		}
		if (validaCPF($arrayInsert['cpf']) == 0) {
			$erros[] = 'CPF inválido';
		}
		if (!isValidEmail($arrayInsert['email'])) {
			$erros[] = 'E-mail inválido';
		}
		if (strlen($arrayInsert['telefones']) < 10 || strlen($arrayInsert['telefones']) > 11) {
			$erros[] = 'Telefone inválido';
		}
		if (count($erros) == 0) {
			$dbname = 'grupofir_departamentoRH';
			/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
			include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
			$query = "SELECT id,email,cpf FROM usuariosCorp WHERE email = ? OR cpf = ?";
			$st = $db->prepare($query);
			$st->execute([$arrayInsert['email'], $arrayInsert['cpf']]);
			$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
			if (count($retorno) > 0) {
				if ($retorno[0]['email'] == $arrayInsert['email']) {
					$erros[] = 'E-mail já cadastrado';
				}
				if ($retorno[0]['cpf'] == $arrayInsert['cpf']) {
					$erros[] = 'CPF já cadastrado';
				}
			}
		}
		if (count($erros) > 0) {
			echo json_encode(['retorno' => false, 'erros' => $erros]);
		} else {
			$arrayInsert['iniciais'] = iniciaisNome($arrayInsert['nomeCompleto']);
			$arrayInsert['senha'] = gerarHash('8');
			$dbname = 'grupofir_departamentoRH';
			/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
			include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
			$query = "INSERT INTO usuariosCorp(nomeCompleto, cpf, email, telefones, iniciais, senha, status) VALUES (:nomeCompleto,:cpf,:email,:telefones,:iniciais,PASSWORD(:senha),3)";
			$st = $db->prepare($query);
			$st->execute($arrayInsert);
			$count = $st->rowCount();
			if ($count > 0) {
				$arrayInfoEmail['destinatarios'] = [[
					'nome' => $arrayInsert['nomeCompleto'],
					'email' => $arrayInsert['email']
				]];
				/* include('/home/grupofirstrh/public_html/includes/mailPrimeiroAcesso.php'); */
				include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\includes\mailPrimeiroAcesso.php');
				echo json_encode(['retorno' => true]);
			} else {
				echo json_encode(['retorno' => false, 'erros' => ['Não foi possível concluir o cadastro']]);
			}
		}
	} else if ($_POST['codigo'] == '12') {
		$usuarioExistente = false;
		$dbname = 'grupofir_departamentoRH';
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
		$query = "SELECT id FROM usuariosCorp WHERE cpf = ? AND cpf != ''";
		$st = $db->prepare($query);
		$st->execute([apenasNumeros($_POST['cpf'])]);
		$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
		if (count($retorno) > 0) {
			$usuarioExistente = true;
		} else {
			$dbname = 'grupofir_firstrh3';
			/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
			include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
			$query = "SELECT NOME as nomeCompleto, CPF as cpf, EMAIL as email, COD_FILIAL as grupo_id, COD_COLIGADA as filial FROM funcionario WHERE cpf = ? AND cpf != '' LIMIT 1";
			$st = $db->prepare($query);
			$st->execute([apenasNumeros($_POST['cpf'])]);
			$retornado = $st->fetchAll(PDO::FETCH_ASSOC);
			if (count($retornado) > 0) {
				$usuarioExistente = true;
				$dbname = 'grupofir_departamentoRH';
				/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
				include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
				$query = "INSERT INTO usuariosCorp(nomeCompleto, cpf, iniciais, email, filial, grupo_id) VALUES (?,?,?,?,?,?)";
				$executePDO = [
					ajustaNome($retornado[0]['nomeCompleto']),
					$retornado[0]['cpf'],
					iniciaisNome($retornado[0]['nomeCompleto']),
					strtolower($retornado[0]['email']),
					$retornado[0]['filial'],
					$retornado[0]['grupo_id']
				];
				$st = $db->prepare($query);
				$st->execute($executePDO);
			}
		}
		echo json_encode(['retorno' => $usuarioExistente]);
	} else if ($_POST['codigo'] == '13') {
		$dbname = "grupofir_dicas";
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
		$query = "SELECT grupo, COUNT(*) as quantos FROM dicas WHERE STR_TO_DATE(validade, '%Y-%m-%d') IS NULL OR STR_TO_DATE(validade, '%Y-%m-%d') >= CURRENT_DATE() GROUP BY grupo ORDER BY grupo ASC";
		$st = $db->prepare($query);
		$st->execute();
		$dicas = $st->fetchAll(PDO::FETCH_ASSOC);
		if ($dicas == '') {
			$dicas = [];
		}
		echo json_encode([
			'dicas' => $dicas,
		]);
	} else if ($_POST['codigo'] == '14') {
		$dbname = "grupofir_dicas";
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\data\connectionSuperUser.php');
		$executePDO = [];
		$where = [];
		if ($_POST['grupo'] == 'Todos') {
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
		$query = "SELECT id as idDica, grupo, titulo, informacoes, links, inclusao, validade FROM dicas WHERE " . implode(' AND ', $where) . " AND (STR_TO_DATE(validade, '%Y-%m-%d') IS NULL OR STR_TO_DATE(validade, '%Y-%m-%d') >= CURRENT_DATE()) ORDER BY grupo ASC, inclusao DESC, validade DESC";
		$st = $db->prepare($query);
		$st->execute($executePDO);
		$databaseErrors = $st->errorInfo();
		if ($databaseErrors[0] == '00000') {
			$dicas = $st->fetchAll(PDO::FETCH_ASSOC);
			foreach ($dicas as $key => $dica) {
				$dicas[$key] = array_map('utf8_encode', $dica);
				if (json_decode($dica['links'])[0] != '') {
					$dicas[$key]['links'] = json_decode($dica['links']);
				} else {
					$dicas[$key]['links'] = '';
				}
				$files = glob("/home/grupofirstrh/public_html/portal/documentacao/dicas/dica_" . $dica['idDica'] . "/*.*");
				foreach ($files as $keyFile => $file) {
					$path = pathinfo($file);
					$files[$keyFile] = $path['filename'] . '.' . $path['extension'];
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
	}
}
// ULTIMO - 14
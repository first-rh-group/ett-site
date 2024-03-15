<?php
// ULTIMO 16
/* include('/home/grupofirstrh/public_html/deprh/session/local_functions.php'); */
include('./deprh/session/local_functions.php');
if ($_POST['action'] == 'superCoringa') {
	if ($_POST['codigo'] == '1') {
		$infoUser = infoUser();
		echo json_encode($infoUser['nomeCompleto']);
	} else if ($_POST['codigo'] == '2') {
		unset($_SESSION);
	} else if ($_POST['codigo'] == '3') {
		$_POST['referencia'] = $_POST['referencia'] . '-01';
		$busca = [
			'dataEnvio' => $_POST['dataEnvio'],
			'referencia' => $_POST['referencia'],
		];
		if (isValidDate(['data' => $_POST['referencia'], 'formato' => 'sql']) == false) {
			unset($busca['referencia']);
		}
		if (isValidDate(['data' => $_POST['dataEnvio'], 'formato' => 'sql']) == false) {
			unset($busca['dataEnvio']);
		}
		echo json_encode(folhasdePontoRecebidas($busca));
	} else if ($_POST['codigo'] == '9') {
		$dbname = 'grupofir_departamentoRH';
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('./data/connectionSuperUser.php');
		$update = [];
		$executePDO = [];
		if (isset($_POST['nomeUsuario']) && strlen(superTrim($_POST['nomeUsuario'])) > 7) {
			$update[] = 'nomeCompleto = :nomeCompleto';
			$executePDO['nomeCompleto'] = utf8_decode(superTrim(ajustaNome($_POST['nomeUsuario'])));
		}
		if (isset($_POST['novaSenha']) && strlen(superTrim($_POST['novaSenha'])) > 7) {
			$update[] = 'senha = PASSWORD(:senha)';
			$executePDO['senha'] = superTrim($_POST['novaSenha']);
		}
		if (isset($_POST['telefoneUsuario']) && strlen(apenasNumeros($_POST['telefoneUsuario'])) >= 10 && strlen(apenasNumeros($_POST['telefoneUsuario'])) <= 11) {
			$update[] = 'telefones = :telefones';
			$executePDO['telefones'] = apenasNumeros($_POST['telefoneUsuario']);
		}
		if (isValidEmail($_POST['emailUsuario'])) {
			$update[] = 'email = :email';
			$executePDO['email'] = superTrim(strtolower($_POST['emailUsuario']));
		}
		$executePDO['cpf'] = $_SESSION['infoUser']['login'];
		$query = "UPDATE usuariosDeprh SET " . implode(', ', $update) . " WHERE id != 1 AND cpf = :cpf LIMIT 1";
		$st = $db->prepare($query);
		$st->execute($executePDO);
		$count = $st->rowCount();
		$st = null;
		$db = null;
		echo json_encode($count);
	} else if ($_POST['codigo'] == '10') {
		$dbname = 'grupofir_departamentoRH';
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('./data/connectionSuperUser.php');
		$query = "SELECT nomeCompleto, email, status FROM usuariosCorp WHERE cpf = ?";
		$st = $db->prepare($query);
		$st->execute([apenasNumeros($_POST['cpf'])]);
		$retorno = $st->fetch(PDO::FETCH_ASSOC);
		$st = null;
		$db = null;
		if ($retorno != '') {
			$retorno['nomeCompleto'] = ajustaNome(utf8_encode($retorno['nomeCompleto']));
		}
		echo json_encode($retorno);
	} else if ($_POST['codigo'] == '11') {
		// print_r2($_POST, __LINE__, __FILE__, __FUNCTION__);
		$erros = [];
		if (isValidEmail($_POST['emailEmpregado'])) {
			$update[] = 'email = :email';
			$executePDO['email'] = $_POST['emailEmpregado'];
		} else {
			$erros[] = 'e-mail inválido;';
		}
		if (isset($_POST['nomeEmpregado']) && strlen($_POST['nomeEmpregado']) > 2) {
			$update[] = "nomeCompleto = :nomeCompleto";
			$executePDO['nomeCompleto'] = utf8_decode(superTrim(ajustaNome($_POST['nomeEmpregado'])));
		} else {
			$erros[] = 'nome do empregado precisar ter mais do que dois caracteres;';
		}
		if (!empty($_POST['suspenderEmpregado'])  && $_POST['suspenderEmpregado'] == 'on') {
			$update[] = 'status = 1';
		} else {
			$update[] = 'status = 0';
		}
		$executePDO['cpf'] = apenasNumeros($_POST['cpfEmpregado']);
		$dbname = 'grupofir_departamentoRH';
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('./data/connectionSuperUser.php');
		$query = "UPDATE usuariosCorp SET " . implode(', ', $update) . " WHERE cpf = :cpf LIMIT 1";
		$st = $db->prepare($query);
		$st->execute($executePDO);
		$st = null;
		$db = null;
		$novaSenha = [
			'nomeCompleto' => $_POST['nomeEmpregado'],
			'senhaEnviada' => 'N',
			'email' => $_POST['emailEmpregado']
		];
		if ($_POST['gerarSenha'] == 1 && (!empty($_POST['suspenderEmpregado']) && $_POST['suspenderEmpregado'] != 'on')) {
			$novaSenha = novaSenha([
				'cpf' => $executePDO['cpf'],
				'enviarSenha' => '1'
			]);
		} else if ($_POST['gerarSenha'] == 1 && (!empty($_POST['suspenderEmpregado']) && $_POST['suspenderEmpregado'] == 'on')) {
			$erros[] = 'Não é possível gerar senha para empregado com acesso suspenso;';
		}
		$novaSenha['erros'] = $erros;
		// print_r2($novaSenha, __LINE__, __FILE__, __FUNCTION__);
		echo json_encode($novaSenha);
	} else if ($_POST['codigo'] == '12') {
		$infoUser = infoUser();
		echo json_encode($infoUser);
	} else if ($_POST['codigo'] == '13') {
		$notificacoes = notificacoesGerais();
		echo json_encode($notificacoes);
	} else if ($_POST['codigo'] == '14') {
		$dbname = 'grupofir_departamentoRH';
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('./data/connectionSuperUser.php');
		$query = "DELETE FROM usuariosCorp WHERE id = ? LIMIT 1";
		$st = $db->prepare($query);
		$st->execute([$_POST['idUsuario']]);
		echo $_POST['idUsuario'];
	} else if ($_POST['codigo'] == '15') {
		$senha = gerarHash('8');
		$dbname = 'grupofir_departamentoRH';
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('./data/connectionSuperUser.php');
		$query = "UPDATE usuariosCorp SET usuariosCorp.status = 0, usuariosCorp.senha = PASSWORD(:senha) WHERE usuariosCorp.id != 1 AND usuariosCorp.id = :idUsuario LIMIT 1";
		$st = $db->prepare($query);
		$st->execute([
			'senha' => $senha,
			'idUsuario' => $_POST['idUsuario'],
		]);
		$count = $st->rowCount();
		if ($count > 0) {
			$query = "SELECT nomeCompleto, email FROM usuariosCorp WHERE id = ? LIMIT 1";
			$st = $db->prepare($query);
			$st->execute([$_POST['idUsuario']]);
			$retorno = $st->fetch(PDO::FETCH_ASSOC);
			$arrayInfoEmail['destinatarios'] = [[
				'nome' => $retorno['nomeCompleto'],
				'email' => $retorno['email']
			]];
			/* include('/home/grupofirstrh/public_html/includes/mailAcessoLiberado.php'); */
			include('./includes/mailAcessoLiberado.php');
			echo json_encode(['retorno' => true, 'idUsuario' => $_POST['idUsuario']]);
		} else {
			echo json_encode(['retorno' => false]);
		}
	} else if ($_POST['codigo'] == '16') {
		$usuarioExistente = false;
		$dbname = 'grupofir_departamentoRH';
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('./data/connectionSuperUser.php');
		$query = "SELECT id FROM usuariosCorp WHERE cpf = ? AND cpf != ''";
		$st = $db->prepare($query);
		$st->execute([apenasNumeros($_POST['cpf'])]);
		$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
		if (count($retorno) > 0) {
			$usuarioExistente = true;
		} else {
			$dbname = 'grupofir_firstrh3';
			/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
			include('./data/connectionSuperUser.php');
			$query = "SELECT NOME as nomeCompleto, CPF as cpf, EMAIL as email, COD_FILIAL as grupo_id, COD_COLIGADA as filial FROM funcionario WHERE cpf = ? AND cpf != '' LIMIT 1";
			$st = $db->prepare($query);
			$st->execute([apenasNumeros($_POST['cpf'])]);
			$retornado = $st->fetchAll(PDO::FETCH_ASSOC);
			if (count($retornado) > 0) {
				$usuarioExistente = true;
				$dbname = 'grupofir_departamentoRH';
				/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
				include('./data/connectionSuperUser.php');
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
	} else if ($_POST['codigo'] == '17') {
		$search[] = 'funcionario.CPF != ?';
		$executePDO[] = '03534025750';
		// $search[] = 'sec_users.active = ?';
		// $executePDO[] = 'Y';
		if (validaCPF($_POST['cpfEmpregado'])) {
			$search[] = 'funcionario.CPF = ?';
			$executePDO[] = apenasNumeros($_POST['cpfEmpregado']);
		}
		if (isset($_POST['nomeEmpregado']) && $_POST['nomeEmpregado'] != '') {
			$search[] = "funcionario.NOME LIKE ?";
			$executePDO[] = "%" . $_POST['nomeEmpregado'] . "%";
		}
		if (isset($_POST['chapaEmpregado']) && $_POST['chapaEmpregado'] != '') {
			$search[] = "funcionario.CHAPA LIKE ?";
			$executePDO[] = "%" . $_POST['chapaEmpregado'] . "%";
		}
		if (count($search) == 1) {
			$search[] = 'funcionario.CPF = ?';
			$executePDO[] = null;
		}
		$dbname = 'grupofir_firstrh3';
		/* include('/home/grupofirstrh/data/connectionSuperUser.php'); */
		include('./data/connectionSuperUser.php');
		$query = "SELECT
		funcionario.NOME as NOME_COMPLETO
		, funcionario.CHAPA
		, funcionario.CPF
		, funcionario.RG
		, funcionario.PIS
		, funcionario.CTPS
		, funcionario.EMAIL
		, funcionario.FICHA_REGISTRO as REGISTRO
		, DATE_FORMAT(funcionario.DATA_ADMISSAO,'%d-%m-%Y') as ADMISSAO
		, DATE_FORMAT(funcionario.DATA_NASCEMENTO,'%d-%m-%Y') as NASCIMENTO
		, CONCAT('Banco ',funcionario.BANCO,', Agencia ',funcionario.AGENCIA,', C/C ',funcionario.CONTA) as DADOS_BANCARIOS
		, funcionario.FILIAL
		,CONCAT(funcionario.TIPO_LOGRADOURO,' ',funcionario.ENDERECO,', ',funcionario.NUMERO_IMOVEL,', bairro ',funcionario.BAIRRO,', ',funcionario.CIDADE,', CEP ',funcionario.CEP,', ',funcionario.CIDADE,'-',funcionario.UF) as ENDERECO
		, IF(sec_users.active = 'Y','ATIVO','INATIVO') as SITUACAO
		, CONCAT(aux_local_trabalho.nome_local_trab,' - (',IF(aux_funcao.nome_funcao != '',aux_funcao.nome_funcao,'SEM INFORMAÇÃO DA FUNÇÃO'),')') as LOCAL_DE_TRABALHO
		FROM funcionario 
		LEFT JOIN sec_users ON sec_users.login = funcionario.CPF
		LEFT JOIN aux_local_trabalho ON aux_local_trabalho.cod_local_trab = funcionario.COD_LOCAL_TRAB
		LEFT JOIN aux_funcao ON aux_funcao.cod_funcao = funcionario.COD_FUNCAO
		WHERE " . implode(' AND ', $search) . " ORDER BY funcionario.DATA_ADMISSAO DESC LIMIT 1";
		$st = $db->prepare($query);
		$st->execute($executePDO);
		$retornado = $st->fetchAll(PDO::FETCH_ASSOC);
		if ($retornado[0] && $retornado[0] != '' && substr($retornado[0]['LOCAL_DE_TRABALHO'], 0, 7) != 'INTERNO') {
			$retornado[0]['CPF'] = print_cpf($retornado[0]['CPF']);
			$query = "SELECT ficha_financeira.SALARIO_BASE FROM ficha_financeira WHERE ficha_financeira.CHAPA = ? ORDER BY ficha_financeira.ANOCOMP DESC , ficha_financeira.MESCOMP DESC LIMIT 1";
			$st = $db->prepare($query);
			$st->execute([$retornado[0]['CHAPA']]);
			$financeiro = $st->fetchAll(PDO::FETCH_ASSOC);
			$retornado[0]['ULTIMO_SALARIO_BASE'] = "R$ " . printValor($financeiro[0]['SALARIO_BASE']);
		}
		if (!is_array($retornado[0])) {
			$retornado[0] = [];
		}
		echo json_encode(['retorno' => array_map('utf8_encode', ($retornado[0]))]);
	}
}
// ULTIMO 16
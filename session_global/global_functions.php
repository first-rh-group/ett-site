<?php
function firstGroupInfo($info)
{
	$codigo = [
		'1' => [
			'nome' => 'E.T.T. First-Rh-Assessoria Empresarial Ltda',
			'cnpj' => '01.721.271/0001-07',
		],
		'6' => [
			'nome' => 'Shift Gestão de Serviços Ltda',
			'cnpj' => '08.709.969/0001-48',
		],
	];
	return ($codigo[$info]);
}
function print_r2($val, $line, $file, $function)
{
	echo "<pre style=\"background-color: white; z-index: 1000; margin-top: 10px; margin-bottom: 10px; padding-right:10px; max-width:100vw; color: black;\" >";
	print_r($val);
	echo  "</pre>" . ($function != "" ? "Função \"" . $function . "\", " : "") . "linha: " . $line . " do arquivo \"" . $file . "\"";
}
function var_dump2($val)
{
	echo "<pre style=\"background-color: white; color:black; z-index: 1000; margin-top: 10px; margin-bottom: 10px; padding-right:10px; max-width:100vw;\" >";
	var_dump($val);
	echo  "</pre>";
}
function zeros($valor, $max)
{
	$zeros = '';
	$x = ($max - strlen($valor));
	for ($i = 0; $i < $x; $i++) {
		$zeros .= '0';
	}
	return $zeros . $valor;
}
// FUNÇÃO QUE RETIRA QUALQUER CARACTERE QUE NÃO SEJA NÚMERO
function apenasNumeros($string)
{
	$string = trim($string);
	$string = preg_replace("([^0-9])", "", $string);
	return ($string);
}
function gerarHash($num_chars)
{
	$consoantes = "bcdfghjklmnpqrstvwxyzbcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZBCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyzbcdfghjklmnpqrstvwxyz";
	$vogais = "aeiouAEIOUaeiou";
	$a = strlen($consoantes) - 1; // Vê quantas consoantes existem
	$b = strlen($vogais) - 1; // Vê quantas vogais existem
	for ($x = 0; $x <= $num_chars; $x++) {
		$teste = ($x / 2);
		$rand = rand(0, $a); // Escolhe uma consoante aleatória
		$numero = rand(1, 9);
		$numero = rand(1, 9);
		$rand1 = rand(0, $b); // Escolhe uma vogal aleatória
		$str = substr($consoantes, $rand, 1); // Pega a consoante escolhida e coloca em $str
		$str1 = substr($vogais, $rand1, 1); // Pega a vogal escolhida e coloca em $str1
		$senha[] = $str . $numero . $str1; // Coloca a vogal $str1 e a consoante $str1 em $senha
	}
	return (substr(implode('', $senha), 0, $num_chars));
}
function nomeMes($mes)
{
	$mes = $mes * 1;
	if ($mes == 1) {
		$mes = "Janeiro";
	};
	if ($mes == 2) {
		$mes = "Fevereiro";
	};
	if ($mes == 3) {
		$mes = "Março";
	};
	if ($mes == 4) {
		$mes = "Abril";
	};
	if ($mes == 5) {
		$mes = "Maio";
	};
	if ($mes == 6) {
		$mes = "Junho";
	};
	if ($mes == 7) {
		$mes = "Julho";
	};
	if ($mes == 8) {
		$mes = "Agosto";
	};
	if ($mes == 9) {
		$mes = "Setembro";
	};
	if ($mes == 10) {
		$mes = "Outubro";
	};
	if ($mes == 11) {
		$mes = "Novembro";
	};
	if ($mes == 12) {
		$mes = "Dezembro";
	};
	return ($mes);
}
// IMPRIME FONE CORRETAMENTE
function print_fone($numeroTelefone)
{
	// retiro o zero da frente do número, se tiver
	if ($numeroTelefone[0] == "0") {
		$numeroTelefone = substr($numeroTelefone, 1);
	}
	// repito para ter certeza de que não são dois!!
	if ($numeroTelefone[0] == "0") {
		$numeroTelefone = substr($numeroTelefone, 1);
	}
	$fone = $numeroTelefone;
	$fone = apenasNumeros($fone);
	$tamanho = strlen($fone);
	if ($tamanho == 8) {
		$fone = substr($fone, -8, 8);
	}
	if ($tamanho == 9) {
		$fone = substr($fone, -9, 9);
	}
	if ($tamanho == 10) {
		$fone = substr($fone, -8, 8);
	}
	if ($tamanho == 11) {
		$fone = substr($fone, -9, 9);
	}
	$tamanhoDoTelefone = strlen($fone);
	if ($tamanhoDoTelefone < 2) {
		$fone = "";
		return ('');
	}
	if ($tamanho > 8 && $tamanho < 11) {
		$ddd = $numeroTelefone;
		$ddd = apenasNumeros($ddd);
		$limite = $tamanho - $tamanhoDoTelefone;
		$ddd = substr($ddd, 0, $limite);
		$primeira_parte = substr($fone, 0, 4);
		$segunda_parte = substr($fone, 4);
		$telefoneCompleto = $primeira_parte . "-" . $segunda_parte;
		$telefoneCompleto = "(" . $ddd . ") " . $telefoneCompleto;
		return ($telefoneCompleto);
	} elseif ($tamanho == 11) {
		$ddd = $numeroTelefone;
		$ddd = apenasNumeros($ddd);
		$limite = $tamanho - $tamanhoDoTelefone;
		$ddd = substr($ddd, 0, $limite);
		$primeira_parte = substr($fone, 0, 3);
		$segunda_parte = substr($fone, 3, 3);
		$terceira_parte = substr($fone, 6);
		$telefoneCompleto = $primeira_parte . "-" . $segunda_parte . "-" . $terceira_parte;
		$telefoneCompleto = "(" . $ddd . ") " . $telefoneCompleto;
		return ($telefoneCompleto);
	} else if ($tamanho > 11) {
		$ddd = $numeroTelefone;
		$ddd = apenasNumeros($ddd);
		$limite = $tamanho - $tamanhoDoTelefone;
		$ddd = substr($ddd, 0, $limite);
		$primeira_parte = substr($fone, 0, 4);
		$segunda_parte = substr($fone, 4);
		$telefoneCompleto = $primeira_parte . "-" . $segunda_parte;
		$telefoneCompleto = trim($fone);
		return ($telefoneCompleto);
	} else if ($tamanho < 9) {
		$primeira_parte = substr($fone, 0, 4);
		$segunda_parte = substr($fone, 4);
		$telefoneCompleto = "(xx) " . $primeira_parte . "-" . $segunda_parte;
		return ($telefoneCompleto);
	}
}
function print_cpf($cpf)
{
	if ($cpf == "") {
		$cpf = "";
	} elseif ($cpf != "") {
		$cpf = apenasNumeros($cpf);
		$cpf1 = substr($cpf, 0, 3);        // 653
		$cpf2 = substr($cpf, 3, 3);        // 156
		$cpf3 = substr($cpf, 6, 3);        // 560
		$cpf4 = substr($cpf, 9, 2);        // 53
		$cpf = $cpf1 . "." . $cpf2 . "." . $cpf3 . "-" . $cpf4;
	}
	return ($cpf);
}
// imprime na tela o cnpj corretamente com os pontos
function print_cnpj($cnpj)
{
	$cnpj = trim($cnpj);
	if ($cnpj == "") {
		$cnpj = "";
	} else {
		$cnpj = apenasNumeros($cnpj);
		$cnpj1 = substr($cnpj, 0, 2);     // 02
		$cnpj2 = substr($cnpj, 2, 3);     // 046
		$cnpj3 = substr($cnpj, 5, 3);     // 667
		$cnpj4 = substr($cnpj, 8, 4);     // 0001
		$cnpj5 = substr($cnpj, 12, 2);     // 50
		$cnpj = $cnpj1 . "." . $cnpj2 . "." . $cnpj3 . "/" . $cnpj4 . "-" . $cnpj5;
	}
	return ($cnpj);
}
function print_cnpj_cpf($numero)
{
	$numero = apenasNumeros($numero);
	if (strlen($numero) > 11) {
		$numero = print_cnpj($numero);
	} else {
		$numero = print_cpf($numero);
	}
	return $numero;
}
function ajustaNome($nome)
{
	$nome = superTrim($nome);
	$value = trim(mb_convert_case($nome, MB_CASE_TITLE, 'UTF-8'));
	$value = str_replace(' De ', ' de ', $value);
	$value = str_replace(' DE ', ' de ', $value);
	$value = str_replace(' DA ', ' da ', $value);
	$value = str_replace(' Da ', ' da ', $value);
	$value = str_replace(' DO ', ' do ', $value);
	$value = str_replace(' Do ', ' do ', $value);
	$value = str_replace(' Dos ', ' dos ', $value);
	$value = str_replace(' DOS ', ' dos ', $value);
	$value = str_replace(' DAS ', ' das ', $value);
	$value = str_replace(' Das ', ' das ', $value);
	$value = str_replace(' E ', ' e ', $value);
	$value = str_replace(' Em ', ' em ', $value);
	return ($value);
}
function superTrim($valor)
{
	$valor = preg_replace("/( ){2,}/", " ", $valor);
	$valor = trim($valor);
	return ($valor);
}
function printValor($valor)
{
	// $valor = round($valor, 2);
	$real = number_format($valor, 2, ',', '.');
	return ($real);
}
function floatValor($var)
{
	$negativo = false;
	preg_match('/^-/', $var, $match);
	if (count($match) > 0) {
		$negativo = true;
	}
	$valor = preg_replace("(\s)", "", $var);
	$valor = preg_replace("([^0-9])", "", $valor);
	$resto = 0;
	$var = preg_replace("(\s)", "", $var);
	$separado = explode(',', $var);
	$separado_2 = explode('.', $var);
	if (count($separado) > 1) {
		$resto = $separado[array_key_last($separado)];
		unset($separado[array_key_last($separado)]);
		$resto = preg_replace("([^0-9])", "", $resto);
		$valor = implode('', $separado);
		$valor = preg_replace("([^0-9])", "", $valor);
	} else if (count($separado_2) > 1) {
		$resto = $separado_2[array_key_last($separado_2)];
		unset($separado_2[array_key_last($separado_2)]);
		$resto = preg_replace("([^0-9])", "", $resto);
		$valor = implode('', $separado_2);
		$valor = preg_replace("([^0-9])", "", $valor);
	}
	$var = $valor . '.' . $resto;
	settype($var, 'float');
	if ($negativo && $var != 0) {
		$var = $var * -1;
	}
	return $var;
}
function getUserIpAddr()
{
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
		//ip from share internet
		$ip = $_SERVER['HTTP_CLIENT_IP'];
	} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		//ip pass from proxy
		$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
	} else {
		$ip = $_SERVER['REMOTE_ADDR'];
	}
	return $ip;
}
function diaSemana2($weekday)
{
	if ($weekday == 1) {
		$dia_semana = "segunda-feira";
	};
	if ($weekday == 2) {
		$dia_semana = "terça-feira";
	};
	if ($weekday == 3) {
		$dia_semana = "quarta-feira";
	};
	if ($weekday == 4) {
		$dia_semana = "quinta-feira";
	};
	if ($weekday == 5) {
		$dia_semana = "sexta-feira";
	};
	if ($weekday == 6) {
		$dia_semana = "sábado";
	};
	if ($weekday == 7) {
		$dia_semana = "domingo";
	};
	return ($dia_semana);
}
function isValidEmail($email)
{
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		return true;
	} else {
		return false;
	}
}
function isValidDate($array)
{
	if ($array['formato'] == 'normal') {
		$array['data'] = apenasNumeros($array['data']);
		$retorno = checkdate(substr($array['data'], 2, 2), substr($array['data'], 0, 2), substr($array['data'], 4, 4));
		return ($retorno);
	} else {
		$array['data'] = apenasNumeros($array['data']);
		$retorno = checkdate(substr($array['data'], 4, 2), substr($array['data'], 6, 2), substr($array['data'], 0, 4));
		return ($retorno);
	}
}
function esconderEmail($email)
{
	if (!isValidEmail($email)) {
		return $email;
	} else {
		$fracao = explode('@', $email);
		$fracoes = intval(strlen($fracao[0]) / 4);
		$estrelas = '';
		$i = 0;
		while ($i < max([$fracoes, 1])) {
			$estrelas = $estrelas . '*';
			$i++;
		}
		$parte[] = substr($fracao[0], 0, $fracoes) . $estrelas . substr($fracao[0], ($fracoes * 2), $fracoes) . $estrelas . substr($fracao[0], ($fracoes * 4));
		$parte[] = '@';
		$parteFinal = explode('.', $fracao[1]);
		$dominio = $parteFinal[0];
		$fracoes = intval(strlen($dominio) / 3);
		$estrelas = '';
		$i = 0;
		while ($i < max([$fracoes, 1])) {
			$estrelas = $estrelas . '*';
			$i++;
		}
		$parteFinal[0] = implode('.', [substr($dominio, 0, $fracoes) . $estrelas . substr($dominio, ($fracoes * 2))]);
		$parte[] = implode('.', $parteFinal);
		return (implode('', $parte));
	}
}
function novaSenha($arrayInfo)
{
	// print_r2($arrayInfo, __LINE__, __FILE__, __FUNCTION__);
	$novaSenha = gerarHash('8');
	$executePDO['senha'] = $novaSenha;
	$arrayRetorno = [
		'novaSenha' => $novaSenha,
		'senhaEnviada' => 'N',
	];
	$alteraEmail = '';
	if (isset($arrayInfo['novoEmail']) && isValidEmail($arrayInfo['novoEmail'])) {
		$alteraEmail = ", email = :email ";
		$executePDO['email'] = $arrayInfo['novoEmail'];
	}
	$executePDO['cpf'] = $arrayInfo['cpf'];
	$dbname = "grupofir_departamentoRH";
	include('/home/grupofirstrh/data/connectionSuperUser.php');
	$query = "UPDATE usuariosCorp SET senha = PASSWORD(:senha) " . $alteraEmail . "WHERE cpf = :cpf";
	// print_r2($query, __LINE__, __FILE__, __FUNCTION__);
	$st = $db->prepare($query);
	$st->execute($executePDO);
	if ($arrayInfo['enviarSenha'] == '1') {
		$usuario = infoEmpregado(['cpf' => $arrayInfo['cpf']]);
		// print_r2($usuario, __LINE__, __FILE__, __FUNCTION__);
		if (count($usuario) > 0) {
			$arrayInfoEmail['destinatarios'] = [[
				'nome' => $usuario['nomeCompleto'],
				'email' => $usuario['email']
			]];
			include('/home/grupofirstrh/public_html/includes/mailRecuperacaoSenha.php');
		}
		$arrayRetorno['email'] = (is_null($usuario['email']) || $usuario['email'] == '' ? '' : $usuario['email']);
		$arrayRetorno['nomeCompleto'] = (is_null($usuario['nomeCompleto']) || $usuario['nomeCompleto'] == '' ? '' : $usuario['nomeCompleto']);
		$arrayRetorno['senhaEnviada'] = ($retorno['return'] == '1' ? 'S' : 'N');
	}
	// print_r2($arrayRetorno, __LINE__, __FILE__, __FUNCTION__);
	return ($arrayRetorno);
}
function infoEmpregado($arrayBusca)
{
	$where[] = "usuariosCorp.cpf = ?";
	$executePDO[] = apenasNumeros($arrayBusca['cpf']);
	if (!isset($arrayBusca['status']) || $arrayBusca['status'] == '') {
		$where[] = "usuariosCorp.status = 0";
	} else {
		$where[] = "usuariosCorp.status = ?";
		$executePDO[] = apenasNumeros($arrayBusca['status']);
	}
	$dbname = "grupofir_departamentoRH";
	include('/home/grupofirstrh/data/connectionSuperUser.php');
	$query = "SELECT id, nomeCompleto, cpf, iniciais, email, telefones, DATE_FORMAT(lastLogin, '%d-%m-%Y') as lastLogin, sessionHash, ipLogin, diasAutorizados, horarioAutorizado FROM usuariosCorp WHERE " . implode(' AND ', $where) . " LIMIT 1";
	$st = $db->prepare($query);
	$st->execute($executePDO);
	$retorno = $st->fetchAll(PDO::FETCH_ASSOC);
	$st = null;
	$db = null;
	if (count($retorno) > 0) {
		$retorno = array_map('utf8_encode', $retorno[0]);
	}
	return ($retorno);
}
function validaCPF($cpf)
{
	$nulos = array(
		"12345678909", "11111111111", "22222222222", "33333333333",
		"44444444444", "55555555555", "66666666666", "77777777777",
		"88888888888", "99999999999", "00000000000"
	);
	/* Retira todos os caracteres que nao sejam 0-9 */
	$cpf = apenasNumeros(trim($cpf));
	$cpf = preg_replace("/( ){1,}/", "", $cpf);
	/* Retorna falso se o cpf for nulo */
	if (in_array($cpf, $nulos) || strlen($cpf) != 11) {
		return 0;
	} else {
		/*Calcula o penúltimo dígito verificador*/
		$acum = 0;
		for ($i = 0; $i < 9; $i++) {
			$acum += $cpf[$i] * (10 - $i);
		}
		$x = $acum % 11;
		$acum = ($x > 1) ? (11 - $x) : 0;
		/* Retorna falso se o digito calculado é diferente do passado na string */
		if ($acum != $cpf[9]) {
			return 0;
		} else {
			/*Calcula o último dígito verificador*/
			$acum = 0;
			for ($i = 0; $i < 10; $i++) {
				$acum += $cpf[$i] * (11 - $i);
			}
			$x = $acum % 11;
			$acum = ($x > 1) ? (11 - $x) : 0;
			/* Retorna falso se o digito calculado é diferente do passado na string */
			if ($acum != $cpf[10]) {
				return 0;
			} else {
				/* Retorna verdadeiro se o cpf é valido */
				return 1;
			}
		}
	}
}
function iniciaisNome($nome)
{
	$iniciaisArray = explode(' ', $nome);
	$iniciais = '';
	foreach ($iniciaisArray as $inicial) {
		if (in_array($inicial, ['de', 'De', 'dos', 'Dos', 'da', 'Da', 'das', 'Das'])) {
			continue;
		}
		$iniciais = $iniciais . substr($inicial, 0, 1);
	}
	return (strtoupper($iniciais));
}
function infoColigada($codigos)
{
	$busca = [];
	$executePDO = [];
	if (isset($codigos['coligada']) && $codigos['coligada'] != '') {
		$busca[] = 'COD_COLIGADA = ?';
		$executePDO[] = $codigos['coligada'];
	}
	if (isset($codigos['filial']) && $codigos['filial'] != '') {
		$busca[] = 'COD_FILIAL = ?';
		$executePDO[] = $codigos['filial'];
	}
	if (count($busca) == 0) {
		return;
	} else {
		$busca = implode(' AND ', $busca);
		$dbname = "grupofir_firstrh3";
		include('/home/grupofirstrh/data/connectionSuperUser.php');
		$query = "SELECT IF(COD_COLIGADA = 1,'E.T.T. First-RH-Assessoria Empresarial Ltda','Shift Gestão de Serviços Ltda') as matriz, NOME_FILIAL as filial, CNPJ, TELEFONE, ENDERECO, NUMERO, COMPLEMENTO, BAIRRO, CIDADE, CEP, ESTADO FROM filiais WHERE " . $busca . " LIMIT 1";
		$st = $db->prepare($query);
		$st->execute($executePDO);
		$retorno = $st->fetch(PDO::FETCH_ASSOC);
		return ($retorno);
	}
}
function utf8_encode_2($string)
{
	if ($string == null)
		return '';
	return mb_convert_encoding($string, 'UTF-8', 'ISO-8859-1');
}
function utf8_decode_2($string)
{
	if ($string == null)
		return '';
	return mb_convert_encoding($string, 'ISO-8859-1', 'UTF-8');
}

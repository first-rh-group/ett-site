<?php
session_start();

// Conecte-se ao banco de dados
$mysqli = new mysqli('10.0.0.96', 'dtc_saga', '179856', 'grupofir_dicas', 3308);

// Verifique a conexão
if ($mysqli->connect_error) {
    die("Erro de conexão: " . $mysqli->connect_error);
}

// Verifique se a variável de sessão 'id' existe
if (!isset($_SESSION['id'])) {
    // Se não existir, inicialize-a com 104
    $_SESSION['id'] = 104;
}

// Prepare os dados do formulário para inserção no banco de dados
$grupo = $mysqli->real_escape_string($_POST['grupo']);
$titulo = $mysqli->real_escape_string($_POST['titulo']);
$informacoes = $mysqli->real_escape_string($_POST['informacoes']);
$posicao = $mysqli->real_escape_string($_POST['posicao']); // Novo campo

// Trate os links como uma string normal
$links = $_POST['links'];

// Remova os caracteres [ e ] do início e do fim da string
$links = trim($links, '[]');

// Divida a string em um array usando a vírgula como delimitador
$links = explode(',', $links);

// Percorra cada link no array
foreach ($links as $key => $link) {
    // Remova os caracteres " do início e do fim de cada link
    $links[$key] = trim($link, '"');
}

// Codifique o array de links como JSON
$links = json_encode($links);

$validade = $mysqli->real_escape_string($_POST['validade']);

// Verifique se um arquivo foi enviado
if (is_uploaded_file($_FILES['imagem']['tmp_name'])) {
    // O arquivo foi enviado, então leia o arquivo e converta-o em base64
    $imageData = base64_encode(file_get_contents($_FILES['imagem']['tmp_name']));
} else {
    // Nenhum arquivo foi enviado
    $imageData = null;
}

// Obtenha a data e hora atual
$inclusao = date('Y-m-d H:i:s');

// Imprima o valor de $inclusao para depuração
echo "Inclusao: $inclusao<br>";

// Prepare a consulta SQL para inserir os dados do formulário no banco de dados
$sql = "INSERT INTO dicas (id, grupo, titulo, informacoes, links, validade, imagem, inclusao, posicao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"; // Adicionado posicao

// Prepare a declaração
$stmt = $mysqli->prepare($sql);

// Vincule os parâmetros
$stmt->bind_param('iissssssi', $_SESSION['id'], $grupo, $titulo, $informacoes, $links, $validade, $imageData, $inclusao, $posicao); // Adicionado posicao

// Execute a declaração
if ($stmt->execute()) {
    echo "Dica adicionada com sucesso!";
    $_SESSION['id']++; // Incrementa o valor de $id
} else {
    echo "Erro: " . $stmt->error;
}

// Feche a declaração e a conexão
$stmt->close();
$mysqli->close();
?>
<?php

// Conecta-se ao banco de dados
$host = '10.0.0.96';
$db   = 'grupofir_dicas';
$user = 'dtc_saga';
$pass = '179856';
$charset = 'utf8mb4';
$port = 3308;

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);

// Código para excluir a dica
if (isset($_POST['action']) && $_POST['action'] == 'delete') {
    $id = $_POST['id']; // Definindo $id antes de usá-la na consulta
    $stmt = $pdo->prepare('DELETE FROM dicas WHERE id = :id');
    $stmt->execute(['id' => $id]);
    echo 'Dica excluída com sucesso.';
    exit;
}


// Verifica se os dados POST necessários estão presentes
if (!isset($_POST['id'], $_POST['titulo'], $_POST['informacoes'], $_POST['links'], $_POST['validade'], $_POST['posicao'])) {
    echo 'Erro: todos os campos são obrigatórios.';
    exit;
}

// Adiciona instruções de depuração
echo "Dados POST recebidos: ";
print_r($_POST);

// Recebe os dados do formulário
$id = $_POST['id'];
$titulo = $_POST['titulo'];
$informacoes = $_POST['informacoes'];
$links = json_encode(['link' => $_POST['links']]); // Modificado para tratar como JSON
$validade = $_POST['validade'];
$posicao = $_POST['posicao'];

// Verifica se uma imagem foi enviada
if (is_uploaded_file($_FILES['imagem']['tmp_name'])) {
    // O arquivo foi enviado, então leia o arquivo e converta-o em base64
    $imagem = base64_encode(file_get_contents($_FILES['imagem']['tmp_name']));
} else {
    // Se nenhuma imagem foi enviada, mantém a imagem atual
    $stmt = $pdo->prepare('SELECT imagem FROM dicas WHERE id = :id');
    $stmt->execute(['id' => $id]);
    $imagem = $stmt->fetchColumn();
}

// Valida os dados (este é apenas um exemplo básico, você deve adicionar mais validações conforme necessário)
if (empty($id) || empty($titulo) || empty($informacoes) || empty($links) || empty($validade) || empty($posicao)) {
    echo 'Erro: todos os campos são obrigatórios.';
    exit;
}

// Atualiza os dados no banco de dados
$stmt = $pdo->prepare('UPDATE dicas SET titulo = :titulo, informacoes = :informacoes, links = :links, validade = :validade, imagem = :imagem, posicao = :posicao WHERE id = :id');
$stmt->execute(['titulo' => $titulo, 'informacoes' => $informacoes, 'links' => $links, 'validade' => $validade, 'imagem' => $imagem, 'posicao' => $posicao, 'id' => $id]);

echo 'Dica atualizada com sucesso.';

?>
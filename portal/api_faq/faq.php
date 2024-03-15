<?php 
include_once './api_faq/database.php';

$database = new Database();
$db = $database->getConnection();

$tipo = $_GET['tipo'] ?? 'candidato'; // Use 'candidato' como padrão

if ($tipo === 'empresa') {
    $tabela = 'faq_empresa';
} else {
    $tabela = 'faq_candidato';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && (!isset($_SERVER['HTTP_CACHE_CONTROL']) || $_SERVER['HTTP_CACHE_CONTROL'] !== 'max-age=0')) {
    if (!isset($_POST['csrf']) || $_POST['csrf'] !== $_SESSION['csrf']) {
        die('Invalid CSRF token');
    }

    // Se a solicitação é para inserir uma nova pergunta
    if (isset($_POST['pergunta']) && isset($_POST['resposta']) && isset($_POST['posicao']) && !empty($_POST['pergunta']) && !empty($_POST['resposta']) && !empty($_POST['posicao'])) {
        $pergunta = $_POST['pergunta'];
        $resposta = $_POST['resposta'];
        $posicao = $_POST['posicao'];
    
        $query = "INSERT INTO $tabela (pergunta, resposta, posicao) VALUES (:pergunta, :resposta, :posicao)";
        $stmt = $db->prepare($query);
    
        $stmt->bindParam(":pergunta", $pergunta);
        $stmt->bindParam(":resposta", $resposta);
        $stmt->bindParam(":posicao", $posicao);
    
        $stmt->execute();
    
        header("Location: gerenciar_faq.php?tipo=$tipo");
        exit;
    }
}

$csrfToken = bin2hex(random_bytes(32));
$_SESSION['csrf'] = $csrfToken;
?>
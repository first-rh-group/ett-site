<?php
session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once 'database.php';

$database = new Database();
$db = $database->getConnection();

$tipo = $_GET['tipo'] ?? 'candidato'; // Use 'candidato' como padrão

$tabela = $tipo === 'empresa' ? 'faq_empresa' : 'faq_candidato';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM $tabela ORDER BY posicao ASC";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $faqs = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($faqs);
    $stmt = null;
} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_SESSION['csrf'])) {
        $_SESSION['csrf'] = 'default_csrf';
    }

    if (!isset($_POST['csrf']) || $_POST['csrf'] !== $_SESSION['csrf']) {
        die('Invalid CSRF token');
    }

    if (isset($_POST['action']) && $_POST['action'] === 'delete') {
        if (isset($_POST['delete']) && is_array($_POST['delete'])) {
            foreach ($_POST['delete'] as $id) {
                $query = "DELETE FROM $tabela WHERE id = :id";
                $stmt = $db->prepare($query);
                $stmt->bindParam(":id", $id);
                $stmt->execute();
                if ($stmt->rowCount() > 0) {
                    $_SESSION['message'] = "Pronto! FAQ deletada com sucesso.";
                } else {
                    $_SESSION['error'] = "Erro ao deletar FAQ $id. Nenhuma linha afetada.";
                }
            }
        } else {
            $_SESSION['error'] = 'Nenhuma FAQ selecionada para deletar';
        }
        header("Location: ../gerenciar_faq.php?tipo=$tipo");
        exit;
    }

    if (isset($_POST['pergunta']) && isset($_POST['resposta']) && isset($_POST['posicao']) && !empty($_POST['pergunta']) && !empty($_POST['resposta']) && !empty($_POST['posicao'])) {
        $pergunta = $_POST['pergunta'];
        $resposta = $_POST['resposta'];
        $posicao = $_POST['posicao'];

        $query = "UPDATE $tabela SET posicao = posicao + 1 WHERE posicao >= :posicao";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":posicao", $posicao);
        $stmt->execute();

        $query = "INSERT INTO $tabela (pergunta, resposta, posicao) VALUES (:pergunta, :resposta, :posicao)";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":pergunta", $pergunta);
        $stmt->bindParam(":resposta", $resposta);
        $stmt->bindParam(":posicao", $posicao);

        if ($stmt->execute()) {
            $_SESSION['message'] = "Pronto! FAQ adicionado com sucesso.";
        } else {
            $_SESSION['error'] = 'Erro ao inserir dados: ' . implode(", ", $stmt->errorInfo());
        }
    } else {
        $_SESSION['error'] = 'Algum campo do formulário está faltando';
    }
    header("Location: ../gerenciar_faq.php?tipo=$tipo");
    exit;
}

if (!isset($_SESSION['csrf'])) {
    $csrfToken = bin2hex(random_bytes(32));
    $_SESSION['csrf'] = $csrfToken;
}
?>
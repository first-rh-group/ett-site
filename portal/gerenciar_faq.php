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

$query = "SELECT * FROM $tabela ORDER BY posicao ASC";
$stmt = $db->prepare($query);
$stmt->execute();

$faqs = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Dúvidas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        form {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-top: 10px;
        }
        input[type="text"], textarea, input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
        }
        button {
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .faq-item {
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
<div class="selection">
        <button onclick="location.href='gerenciar_faq.php?tipo=candidato'">Candidato</button>
        <button onclick="location.href='gerenciar_faq.php?tipo=empresa'">Empresa</button>
    </div>
    <h1>Dúvidas</h1>

    <form method="POST">
        <label for="pergunta">Pergunta:</label>
        <input type="text" id="pergunta" name="pergunta" required>

        <label for="resposta">Resposta:</label>
        <textarea id="resposta" name="resposta" required></textarea>

        <label for="posicao">Posição:</label>
        <input type="number" id="posicao" name="posicao" required>

        <button type="submit">Adicionar</button>
    </form>

    <h2>Perguntas existentes</h2>
    <form method="POST">
        <?php foreach ($faqs as $faq): ?>
            <div class="faq-item">
                <input type="checkbox" name="delete[]" value="<?php echo $faq['id']; ?>">
                <h3><?php echo $faq['pergunta']; ?></h3>
                <p><?php echo $faq['resposta']; ?></p>
                <p>Posição: <?php echo $faq['posicao']; ?></p>
            </div>
        <?php endforeach; ?>

        <button type="submit" name="action" value="delete">Deletar selecionados</button>
    </form>
</body>
</html>
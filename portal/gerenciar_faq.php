<?php
session_start();

if (isset($_SESSION['error'])) {
    echo "<p style='color: red;'>".$_SESSION['error']."</p>";
    unset($_SESSION['error']);
}

if (isset($_SESSION['message'])) {
    echo "<p style='color: green;'>".$_SESSION['message']."</p>";
    unset($_SESSION['message']);
}

$tipo = $_GET['tipo'] ?? 'candidato'; // Use 'candidato' como padrão

$db = new PDO('mysql:host=10.0.0.86;dbname=grupofir_firstrh3', 'dtc_saga', '179856');
$tabela = $tipo === 'candidato' ? 'faq_candidato' : 'faq_empresa';

$query = $db->prepare("SELECT * FROM $tabela ORDER BY posicao ASC");
$query->execute();
$faqs = $query->fetchAll(PDO::FETCH_ASSOC)
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
<h1>Gerenciar FAQs</h1>

<a href="gerenciar_faq.php?tipo=candidato"><button type="button">Candidato</button></a>
<a href="gerenciar_faq.php?tipo=empresa"><button type="button">Empresa</button></a>
<form method="POST" action="../portal/api_faq/faq.php?tipo=<?php echo $tipo; ?>">
    <input type="hidden" name="csrf" value="<?php echo isset($_SESSION['csrf']) ? $_SESSION['csrf'] : 'default_csrf'; ?>">

    <label for="pergunta">Pergunta:</label>
    <input type="text" id="pergunta" name="pergunta" required>

    <label for="resposta">Resposta:</label>
    <textarea id="resposta" name="resposta" required></textarea>

    <label for="posicao">Posição:</label>
    <input type="number" id="posicao" name="posicao" required>

    <button type="submit">Adicionar</button>
</form>

    <h2>Perguntas Existentes</h2>
    <form method="POST" action="../portal/api_faq/faq.php?tipo=<?php echo $tipo; ?>">
    <input type="hidden" name="csrf" value="<?php echo isset($_SESSION['csrf']) ? $_SESSION['csrf'] : 'default_csrf'; ?>">
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
<?php
header('Content-Type: application/json');

try {
    // Conecta ao banco de dados
    $db = new PDO('mysql:host=10.0.0.96;port=3308;dbname=grupofir_departamentorh', 'dtc_saga', '179856');

    // Obtém o CPF do GET
    $cpf = $_GET['cpf'];

    // Prepara a consulta SQL
    $stmt = $db->prepare('SELECT nomeCompleto FROM usuarioscorp WHERE cpf = :cpf');
    $stmt->bindParam(':cpf', $cpf);

    // Executa a consulta
    $stmt->execute();

    // Obtém o resultado
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        echo json_encode(['status' => 'success', 'nomeCompleto' => $result['nomeCompleto']]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Usuário não encontrado']);
    }
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
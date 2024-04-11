<?php
header('Content-Type: application/json');

try {
    $db = new PDO('mysql:host=10.0.0.96;port=3308;dbname=grupofir_departamentorh', 'dtc_saga', '179856');

    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data) {
        throw new Exception('Nenhum dado foi enviado na solicitação');
    }
    $nomeCompleto = $data['nomeCompleto'];
    $email = $data['email'];

    $stmt = $db->prepare('UPDATE usuarioscorp SET nomeCompleto = :nomeCompleto, email = :email WHERE grupo_id = :id'); // Modificado esta linha
    $stmt->bindParam(':nomeCompleto', $nomeCompleto);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':id', $data['grupo_id']); // Modificado esta linha

    if ($stmt->execute()) {
        if ($stmt->rowCount() > 0) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Nenhuma linha foi atualizada. Verifique o ID do usuário.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Não foi possível atualizar o usuário']);
    }
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
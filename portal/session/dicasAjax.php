<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['action'] === 'superCoringa') {
        $grupoId = $_POST['grupoId'];

        // Conecta ao banco de dados
        $mysqli = new mysqli('10.0.0.96', 'dtc_saga', '179856', 'grupofir_dicas');

        if ($mysqli->connect_error) {
            die('Erro de conexão: ' . $mysqli->connect_error);
        }

        // Busca as dicas do grupo
        $stmt = $mysqli->prepare('SELECT id, grupo, titulo, informacoes, links, inclusao, validade, imagem FROM dicas WHERE grupo = ? AND validade >= CURDATE()');
        $stmt->bind_param('i', $grupoId);
        $stmt->execute();
        $result = $stmt->get_result();

        // Cria um array para armazenar as dicas
        $dicas = array();

        while ($row = $result->fetch_assoc()) {
            $dicas[] = $row;
        }

        // Fecha a conexão
        $stmt->close();
        $mysqli->close();

        // Retorna as dicas como JSON
        header('Content-Type: application/json');
        echo json_encode(array('dicas' => $dicas));
    }
}
?>
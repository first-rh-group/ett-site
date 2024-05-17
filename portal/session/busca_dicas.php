<?php
    $host = '10.0.0.96';
    $db   = 'grupofir_dicas';
    $user = 'dtc_saga';
    $pass = '179856';
    $charset = 'utf8mb4';
    $port = 3308;

    $dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
    $pdo = new PDO($dsn, $user, $pass);

    $grupoId = isset($_GET['grupoId']) ? $_GET['grupoId'] : null;

    if ($grupoId) {
        $sql = "SELECT dicas.*, dicas_grupos.grupo as nome_grupo FROM dicas INNER JOIN dicas_grupos ON dicas.grupo = dicas_grupos.id_grupo WHERE dicas.grupo = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$grupoId]);
    } else {
        $sql = "SELECT dicas.*, dicas_grupos.grupo as nome_grupo FROM dicas INNER JOIN dicas_grupos ON dicas.grupo = dicas_grupos.id_grupo";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    }

    $dicas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($dicas);
?>
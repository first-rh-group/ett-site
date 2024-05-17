<?php
    $host = '10.0.0.96';
    $db   = 'grupofir_dicas';
    $user = 'dtc_saga';
    $pass = '179856';
    $charset = 'utf8mb4';
    $port = 3308;

    $dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
    $pdo = new PDO($dsn, $user, $pass);

    $sql = "SELECT * FROM dicas_grupos";
    $stmt = $pdo->query($sql);

    $grupos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($grupos);
?>
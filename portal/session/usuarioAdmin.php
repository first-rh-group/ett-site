<?php
$host = '10.0.0.96';
$port = 3308;
$db   = 'grupofir_departamentorh';
$user = 'dtc_saga';
$pass = '179856';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);
if (!$pdo) {
    die("Erro ao conectar ao banco de dados");
}

$action = isset($_POST['action']) ? $_POST['action'] : 'fetch';

if ($action == 'update' && isset($_POST['nomeCompleto'], $_POST['cpf'], $_POST['iniciais'], $_POST['telefones'])) {
    $stmt = $pdo->prepare('UPDATE usuariosadmin_backup SET nomeCompleto = ?, iniciais = ?, telefones = ? WHERE cpf = ?');
    $stmt->execute([$_POST['nomeCompleto'], $_POST['iniciais'], $_POST['telefones'], $_POST['cpf']]);
    echo 'Usuário atualizado com sucesso!';
} else if ($action == 'delete' && isset($_POST['cpf'])) {
    $stmt = $pdo->prepare('DELETE FROM usuariosadmin_backup WHERE cpf = ?');
    $stmt->execute([$_POST['cpf']]);
    echo 'Usuário excluído com sucesso!';
} else if ($action == 'fetch') {
    $stmt = $pdo->query("SHOW TABLES LIKE 'usuariosadmin_backup'");
    $tableExists = $stmt->rowCount() > 0;

    if (!$tableExists) {
        die("A tabela 'usuariosadmin_backup' não existe");
    }

    $stmt2 = $pdo->query('SELECT * FROM usuariosadmin_backup');
    $usuarios = $stmt2->fetchAll();
    echo json_encode($usuarios);
}
?>
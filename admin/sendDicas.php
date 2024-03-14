<?php
$success = 0;
$fail = 0;
$trymove = [];
$tmp_name = [];
if (count($_FILES) == 0 || $_FILES == null) {
    echo json_encode(false);
} else {
    if (!file_exists('../portal/documentacao/dicas/dica_' . $_POST['idDica'])) {
        mkdir('../portal/documentacao/dicas/dica_' . $_POST['idDica'], 0753, true);
    }
    foreach ($_FILES as $key => $arquivo) {
        if ($arquivo['error'] == 0) {
            $tmp_file_path = '../portal/documentacao/dicas/dica_' . $_POST['idDica'] . '/' . $arquivo['name'];
            $tmp_name[] = $arquivo['tmp_name'];
            $trymove[] = move_uploaded_file(end($tmp_name), $tmp_file_path);
            if (end($trymove)) {
                $success++;
            } else {
                $fail++;
            }
        } else {
            $fail++;
        }
    }
}
echo json_encode([
    'fail' => $fail,
    'success' => $success,
    'arquivosVinculados' => glob("../portal/documentacao/dicas/dica_" . $_POST['idDica'] . "/*.*"),
    'idDica' => $_POST['idDica'],
]);

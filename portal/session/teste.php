<?php
$senha = 'senha123';
$hash = password_hash($senha, PASSWORD_DEFAULT);

if (password_verify($senha, $hash)) {
    echo 'Senha é válida!';
} else {
    echo 'Senha inválida.';
}
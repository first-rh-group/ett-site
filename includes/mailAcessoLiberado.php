<?php
$arrayInfoEmail['setFrom'] = ['nome' => utf8_decode('First RH Group - Primeiro Acesso'), 'email' => 'recuperacao_senha@grupofirstrh.com.br'];
$arrayInfoEmail['replyTo'] = ['nome' => utf8_decode('First RH Group - Área de Contato'), 'email' => 'contato@firstrhgroup.com'];
$arrayInfoEmail['Subject'] = utf8_decode("Grupo First RH - Primeiro Acesso ao Portal Corporativo");
$arrayInfoEmail['Body'] = utf8_decode("<p><b>ATENÇÃO:</b> ESSA É UMA MENSAGEM AUTOMÁTICA.</b></p><p>Seu Acesso ao Portal Corporativo do Grupo First RH foi AUTORIZADO!</p><p>Seja muito bem-vindo(a)!</p><p>Sua senha de acesso ao Portal Corporativo do Grupo First RH é <b>" . $senha . "</b></p><p>Mensagem enviada em " . date('d-m-Y') . " às " . date('H:i:s') . "</p>");
$arrayInfoEmail['AltBody'] = utf8_decode("ATENÇÃO: ESSA É UMA MENSAGEM AUTOMÁTICA. Seu Acesso ao Portal Corporativo do Grupo First RH foi AUTORIZADO! Seja muito bem-vindo(a)! Sua senha de acesso ao Portal Corporativo do Grupo First RH é " . $senha . ". Mensagem enviada em " . date('d-m-Y') . " às " . date('H:i:s') . ".");

/* include('/home/grupofirstrh/public_html/includes/mailConfig.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\includes\mailConfig.php');

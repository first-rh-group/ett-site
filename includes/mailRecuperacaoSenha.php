<?php
$arrayInfoEmail['setFrom'] = ['nome' => utf8_decode('First RH Group - Serviço de Recuperação de Senha'), 'email' => 'recuperacao_senha@grupofirstrh.com.br'];
$arrayInfoEmail['replyTo'] = ['nome' => utf8_decode('First RH Group - Área de Contato'), 'email' => 'recuperacao_senha@grupofirstrh.com.br'];
$arrayInfoEmail['Subject'] = utf8_decode("RECUPERAÇÃO DE SENHA");
$arrayInfoEmail['Body'] = utf8_decode("<p><b>ATENÇÃO:</b> ESSA É UMA MENSAGEM AUTOMÁTICA. <p>NÃO RESPONDA ESSA MENSAGEM.</p></b></p><p>Sua nova senha de acesso ao Portal Corporativo do Grupo First RH é <b>" . $novaSenha . "</b></p><p>Acesse o Portal pelo seguinte endereço <a href=\"https://portal.grupofirstrh.com.br/\">portal.grupofirstrh.com.br/</a>.</p><p>Mensagem enviada em " . date('d-m-Y') . " às " . date('H:i:s') . "</p>");
$arrayInfoEmail['AltBody'] = utf8_decode("ATENÇÃO: ESSA É UMA MENSAGEM AUTOMÁTICA. NÃO RESPONDA ESSA MENSAGEM. Sua nova senha de acesso ao Portal Corporativo do Grupo First RH é " . $novaSenha . ". Acesse o Portal pelo seguinte endereço https://portal.grupofirstrh.com.br. Mensagem enviada em " . date('d-m-Y') . " às " . date('H:i:s'));
/* include('/home/grupofirstrh/public_html/includes/mailConfig.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\includes\mailConfig.php');

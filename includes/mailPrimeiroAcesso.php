<?php
$arrayInfoEmail['setFrom'] = ['nome' => utf8_decode('First RH Group - Primeiro Acesso'), 'email' => 'recuperacao_senha@grupofirstrh.com.br'];
$arrayInfoEmail['replyTo'] = ['nome' => utf8_decode('First RH Group - Área de Contato'), 'email' => 'contato@firstrhgroup.com'];
$arrayInfoEmail['Subject'] = utf8_decode("Grupo First RH - Primeiro Acesso ao Portal Corporativo");
$arrayInfoEmail['Body'] = utf8_decode("<p><b>ATENÇÃO:</b> ESSA É UMA MENSAGEM AUTOMÁTICA.</b></p><p>Nossa equipe irá examinar seu pedido de acesso e, uma vez aprovado, entraremos em contato para avisá-lo. Até a aprovação, <b>seu acesso não está liberado</b>.</p><p>Mensagem enviada em " . date('d-m-Y') . " às " . date('H:i:s') . "</p>");
$arrayInfoEmail['AltBody'] = utf8_decode("ATENÇÃO: ESSA É UMA MENSAGEM AUTOMÁTICA. Sua nova senha de acesso ao Portal Corporativo do Grupo First RH é " . $novaSenha . ". Nossa equipe irá examinar seu pedido de acesso e, uma vez aprovado, entraremos em contato para avisá-lo. Até a aprovação, seu acesso não está liberado. Mensagem enviada em " . date('d-m-Y') . " às " . date('H:i:s'));

include('/home/grupofirstrh/public_html/includes/mailConfig.php');

$nomeNovoUsuario = $arrayInfoEmail['destinatarios']['nome'];

$arrayInfoEmail['destinatarios'] = [[
    'nome' => 'Operacional First RH',
    'email' => 'operacional@firstrh.com.br'
]];
$arrayInfoEmail['setFrom'] = ['nome' => utf8_decode('First RH Group - Primeiro Acesso'), 'email' => 'recuperacao_senha@grupofirstrh.com.br'];
$arrayInfoEmail['replyTo'] = ['nome' => utf8_decode('First RH Group - Área de Contato'), 'email' => 'contato@firstrhgroup.com'];
$arrayInfoEmail['Subject'] = utf8_decode("Grupo First RH - Pedido de Liberação do Primeiro Acesso ao Portal Corporativo");
$arrayInfoEmail['Body'] = utf8_decode("<p><b>ATENÇÃO:</b> ESSA É UMA MENSAGEM AUTOMÁTICA.</b></p><p>O usuário <b>" . $nomeNovoUsuario . "</b> pediu autorização de primeiro acesso ao Portal. <b>VERIFIQUE</b> se ele é de fato nosso empregado e, se for, autorize pelo Portal DepRH.</p><p>Mensagem enviada em " . date('d-m-Y') . " às " . date('H:i:s') . "</p>");
$arrayInfoEmail['AltBody'] = utf8_decode("ATENÇÃO: ESSA É UMA MENSAGEM AUTOMÁTICA. O usuário " . $nomeNovoUsuario . " pediu autorização de primeiro acesso ao Portal. VERIFIQUE se ele é de fato nosso empregado e, se for, autorize pelo Portal DepRH. Mensagem enviada em " . date('d-m-Y') . " às " . date('H:i:s'));

include('/home/grupofirstrh/public_html/includes/mailConfig.php');

<!DOCTYPE html>
<html lang="pt-BR">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script charset="utf-8" src="https://grupofirstrh.com.br/js_global/global.js?versao=2023.2"></script>
	<script charset="utf-8" src="js/coringa.js?versao=2023.2"></script>
	<script charset="utf-8" defer src="js/listener.js?versao=2023.2"></script>
	<script charset="utf-8" defer src="js/novolistener.js"></script>
	<!-- <script src="js/novocoringa.js"></script> -->
	<script defer charset="utf-8" src="js/defer.js?versao=2023.2"></script>
	<script charset="utf-8" src="js/form.js"></script>
	<script defer charset="utf-8" src="https://grupofirstrh.com.br/js_global/formValidation.js"></script>
	<link type="text/css" rel="stylesheet" href="https://grupofirstrh.com.br/css_global/styles.css?versao=2023.2">
	<link type="text/css" rel="stylesheet" href="css/layoutRodape.css?versao=2023.2">
	<link type="text/css" rel="stylesheet" href="css/layoutPortal.css?versao=2023.2">
	<link defer type="text/css" rel="stylesheet" href="css/layoutPortaldefer.css?versao=2023.2">
	<link type="text/css" rel="stylesheet" href="css/layoutMobile.css?versao=2023.2">
	<link type="text/css" rel="stylesheet" href="https://grupofirstrh.com.br/css_global/toogle.css?versao=2023.2">
	<link rel="icon" href="https://grupofirstrh.com.br/controles_img/icon_32x32_2.webp" sizes="32x32" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<script charset="utf-8" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script charset="utf-8" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script charset="utf-8" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	<script src="https://cdn.tiny.cloud/1/i3h4t75csyitvovb5yvkpgzlxfweh6e0av6v2gupxbh24j88/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
	<title>Portal Corporativo :: First RH</title>
</head>

<body>
	<?php
	session_start();

	if (!isset($_SESSION['infoUser'])) {
		header('Location: /projeto_ett/portal/index.html');
		exit();
	}
	$user = $_SESSION['infoUser']; // Supondo que 'infoUser' seja um array com as informações do usuário
    ?>
	<div id="menuSuspensoMobile">
		<div class="financeiro">
			<div class="menu-item">Financeiro</div>
			<div>
				<div>Contra cheque</div>
				<div>Informe de Rendimentos</div>
			</div>
		</div>
		<div class="livroPonto">
			<div class="menu-item">Jornada de Trabalho</div>
			<div>
				<div>Folha de Ponto</div>
			</div>
		</div>
		<div class="dicas">
			<div>
				<div class="menu-item">Informações Gerais</div>
			</div>
			<div></div>
		</div>
		<div class="perfil">
			<div>Perfil</div>
			<div>
				<div>Edição</div>
			</div>
		</div>
		<div>Sair</div>
	</div>
	<button class="btn" type="button" id="dropdownMenuButton">
			<i class="fas fa-bars"></i>
		</button>
	<section id="header">
		
	</section>
	<section id="main">
		<div class="menu" id="sideMenu">
			<div class="user-info">
				<img src="../new_img/avatar branco sem fundo.png" alt="Avatar do usuário" class="user-avatar">
				<span class="user-greeting" style="color: white; font-family: var(--fontExtraBold);">Olá, [nome do usuário]</span>
			</div>
			<div>
				<div class="menu-item" onclick="location.href='http://localhost:8080/projeto_ett/portal/dashboard.php';">Início</div>
				<!--<div> </div>-->
			</div>
			<div class="perfil">
				<div id="perfil-btn" class="menu-item">Perfil</div>
			</div>
			<div id="perfil-form" style="display: none;">
			</div>
			<div class="financeiro">
				<div class="menu-item">Financeiro</div>
				<div>
					<div>Contracheque</div>
					<div>Informe de rendimentos</div>
				</div>
			</div>
			<div class="livroPonto">
				<div class="menu-item">Jornada de Trabalho</div>
				<div>
					<div>Folha de Ponto</div>
				</div>
			</div>
			<!-- <div class="documentacao">
					<div>Documentação</div>
					<div> </div>
				</div> -->
			<div class="dicas">
				<div class="menu-item">Informações Gerais</div>
				<div></div>
			</div>
			<?php if ($user['grupo_id'] == 1): ?>
				<div class="admin">
					<div class="menu-item">Administração</div>
					<div>
						<div>Novo Documento ou dica</div>
						<div>Pesquisar</div>
						<div>Adicionar Logo</div>
						<div>FAQ - Admin</div>
						<div>Usuários Portal Administrativo</div>
					</div>
				</div>
    		<?php endif; ?>
			<!-- <div class="usuarios">
				<div class="menu-item">Usuários</div>
				<div>
					<div>Usuários Portal Administrativo</div>
					<div>Usuários Portal Dep. RH</div>
					<div>Criar Novo Usuário</div>
				</div>
			</div> -->
			<div class="lgpd">
				<a style="cursor: pointer; color: #ffffff;" target="_blank" href="https://firstrhgroup.com/documentacao/LGPD-First.pdf">LGPD</a>
			</div>
			<div class="sair">
				<div class="novoSair">
				<a href="http://localhost:8080/projeto_ett/portal" style="color: #ffffff; text-decoration: none; font-family: var(--fontExtraBold); cursor: pointer;">SAIR</a>
				</div>
			</div>
		</div>
		<div class="principal" style="font-family: var(--fontExtraBold);">
			<div class="bemvindo">
					<!-- <h3 style="font-family: var(--fontExtraBold);">Seu perfil</h3>
					<br>
					<form>
						<div class="form-group">
							<label for="nome">Nome:</label>
							<div class="input-edit">
								<input type="text" id="nome" name="nome">
								<button type="button">Editar</button>
							</div>
						</div>
					
						<div class="form-group">
							<label for="email">Endereço de email:</label>
							<div class="input-edit">
								<input type="email" id="email" name="email">
								<button type="button">Editar</button>
							</div>
						</div>
					
						<div class="form-group">
							<label for="senha">Senha:</label>
							<div class="input-edit">
								<input type="password" id="senha" name="senha">
								<button type="button">Editar</button>
							</div>
						</div>
						
						<input type="submit" value="Salvar">
					</form>
				<h2>Seja bem vindo(a) ao Portal Corporativo First RH Group!</h2>
				<p>Este portal foi criado para proporcionar aos nossos colaboradores um <strong>acesso rápido<br>
					e fácil</strong> a diversos recursos e informações.</p>
				<p>Na área <strong>Financeiro</strong>, você pode conferir seu contracheque e informe de rendimentos.<br>
					Já na seção <strong>Jornada de Trabalho</strong>, é possível visualizar e imprimir sua folha de ponto.<br>
					O tópico <strong>Informações Gerais</strong> inclui:
				</p>
				<ul>
					<li><b>Políticas First RH Group</b> - Diretrizes importantes da empresa que todos os<br>
						colaboradores devem ler atentamente;</li>
					<li><b>Documentação</b> - Documentos essenciais para os colaboradores;</li>
					<li><b>Comunicados</b> - Atualizações sobre assuntos relevantes aos colaboradores;</li>
					<li><b>Saúde</b> - Sugestões de projetos que promovem a saúde de diferentes maneiras;</li>
					<li><b>Cursos</b> - Links para se inscrever em cursos gratuitos com diversos temas;</li>
					<li><b>Parcerias</b> - Descontos exclusivos em instituições parceiras, como faculdades e<br>
						escolas de idiomas, além de serviços adicionais;</li>
					<li><b>Canal de Denúncias</b> - Um espaço para relatar e investigar ações que violem<br>
						nosso Código de Ética;</li>
					<li><b>Perguntas Frequentes</b> - Respostas para dúvidas comuns, fornecidas por nossa<br>
						equipe de apoio.
					</li>
				</ul>
				<p>Nos esforçamos para manter nosso portal sempre atualizado. Se surgir alguma<br>
					dúvida ou sugestão, não hesite em entrar em contato pelo e-mail
					 <a
						mailto="qualidade@firstrh.com.br">qualidade@firstrh.com.br</a></p>
				 <p><b>Junte-se a nós e explore tudo o que nosso portal tem a oferecer!</b></p> -->
			</div>
		</div>
<!--<div class="titulo-novidades">
    <h2 style="font-family: var(--fontExtraBold); font-size: var(--fontSizePadrao);">Novidades:</h2>
	<div class="logos"></div>
	<p style="font-family: var(--fontExtraBold);">Acesse a área de Parceiros para saber mais!</p>
</div> -->
		</div>
	</section>
	<section id="rodape" class="rodape">
		<!--<div>
			<a style="cursor: pointer;" target="_blank" href="https://firstrhgroup.com/documentacao/LGPD-First.pdf">A
				First RH
				Group segue todas as diretrizes e medidas de segurança da (Lei Geral de Proteção de Dados Pessoais)</a>
		</div>>-->
		<div style="color: black;"> © 2024 FIRST RH GROUP</div>
	</section>
	<script>
// Quando a página é carregada, oculte o '#sideMenu' e remova a classe 'with-menu' do 'body'
window.onload = function() {
  document.querySelector('#sideMenu').style.display = 'none';
  document.body.classList.remove('with-menu');
};

document.querySelector('#dropdownMenuButton').addEventListener('click', function() {
  var sideMenu = document.querySelector('#sideMenu');
  if (sideMenu.style.display === 'none') {
    sideMenu.style.display = 'block';
    document.body.classList.add('with-menu'); // Adicione a classe 'with-menu' ao 'body'
    document.body.style.marginLeft = '287px'; // Defina a margem esquerda do 'body' para 215px
	document.body.style.paddingTop = '78px';
  } else {
    sideMenu.style.display = 'none';
    document.body.classList.remove('with-menu'); // Remova a classe 'with-menu' do 'body'
    document.body.style.marginLeft = '0'; // Defina a margem esquerda do 'body' para 0
	document.body.style.paddingTop = '78px';

  }
});
		window.onload = function() {
    // Recupera as imagens do armazenamento local
    var storedLogos = JSON.parse(localStorage.getItem('logos')) || [];
    var logosDiv = document.querySelector('.logos');
    storedLogos.forEach(function(logo) {
        var img = document.createElement('img');
        img.src = logo;
        logosDiv.appendChild(img);
    });

	var cpf = localStorage.getItem('cpf');

    fetch('session/get-user-name.php?cpf=' + cpf)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                var userGreeting = document.querySelector('.user-greeting');
                userGreeting.textContent = 'Olá, ' + data.nomeCompleto;
            } else {
                console.error('Erro ao buscar o nome do usuário: ', data.message);
            }
        })
        .catch(error => console.error('Erro ao fazer a solicitação: ', error));
}
	</script>
</body>

</html>
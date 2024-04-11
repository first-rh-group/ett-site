/* document.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('loginButton');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            var cpf = document.getElementById('cpf-input').value;
            localStorage.setItem('cpf', cpf);
        });
    } else {
        console.error('loginButton not found');
    }

    var perfilBtn = document.getElementById('perfil-btn');
    if (perfilBtn) {
        perfilBtn.addEventListener('click', function() {
            var cpf = localStorage.getItem('cpf');
            console.log(cpf); 

            if (cpf) {
                fetch('http://localhost:8080/projeto_ett/portal/session/form.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ cpf: cpf })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data) {
                        localStorage.setItem('userData', JSON.stringify(data));
                        // window.location.href = 'usuarioForm.html';
                    } else {
                        console.error('Data is null');
                    }
                })
                .catch(error => console.error('Error:', error));
            } else {
                console.error('CPF is null');
            }
        });
    } else {
        console.error('perfil-btn not found');
    }

    var logoutLink = document.querySelector('.sair a');
    if (logoutLink) {
        logoutLink.addEventListener('click', function() {
            localStorage.removeItem('cpf');
        });
    }
}); */
document.addEventListener('DOMContentLoaded', (event) => {
    var bemvindoDiv = document.querySelector('.principal');

    function mostrarBoasVindas() {
        bemvindoDiv.innerHTML = `
        <div class="principal">
            <div class="bemvindo">
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
				 <p><b>Junte-se a nós e explore tudo o que nosso portal tem a oferecer!</b></p>
                 </div>
                 <div class="novidades">
            <div class="titulo-novidades">
                <h2 style="font-family: var(--fontExtraBold); font-size: var(--fontSizePadrao);">Novidades:</h2>
                <div class="logos"></div>
                <p style="font-family: var(--fontExtraBold);">Acesse a área de Parceiros para saber mais!</p>
            </div>
        </div>
    </div>
        `;
    }
    function obterDadosDoUsuario(cpf, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/projeto_ett/portal/session/form.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (this.status == 200 && this.responseText.trim() !== '') {
                var response = this.responseText;
                try {
                    response = JSON.parse(response);
                } catch (e) {
                    console.error('A resposta do servidor não é um JSON válido:', this.responseText);
                    return;
                }
            }
            console.log ('Dados do usuário', response);
            callback(response);
        };
        xhr.send(JSON.stringify({ cpf: cpf }));
    }
    
    function enviarDados(campo, valor) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/projeto_ett/portal/processadorAjax.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (this.status == 200 && this.responseText.trim() !== '') {
                try {
                    var response = JSON.parse(this.responseText);
                    console.log('Resposta do servidor', response);
                    if (response.success) {
                        alert('Dados atualizados com sucesso!');
                    } else {
                        alert('Ocorreu um erro ao atualizar os dados.');
                    }
                } catch (e) {
                    console.error('A resposta do servidor não é um JSON válido:', this.responseText);
                }
            }
        };
        xhr.send('action=superCoringa&codigo=6&' + campo + '=' + encodeURIComponent(valor));
    }

    function adicionarOuvintesDeEventos() {
        var editarNome = document.getElementById('editarNome');
        var editarEmail = document.getElementById('editarEmail');
        // var editarSenha = document.getElementById('editarSenha');
    
        console.log(editarNome); 
        console.log(editarEmail);
        // console.log(editarSenha);
    
        if (editarNome) {
            editarNome.addEventListener('click', function() {
                var nome = document.getElementById('nome').value;
                console.log('Nome:', nome);
                enviarDados('nome', nome);
            });
        }
    
        if (editarEmail) {
            editarEmail.addEventListener('click', function() {
                var email = document.getElementById('email').value;
                console.log('Email:', email);
                enviarDados('email', email);
            });
        }
    
       /* if (editarSenha) {
            editarSenha.addEventListener('click', function() {
                var senha = document.getElementById('senha').value;
                console.log('Senha:', senha);
                enviarDados('senha', senha);
            });
        } */
    }

    function mostrarPerfil() {
        var cpf = localStorage.getItem('cpf'); // Obter o CPF do localStorage
        obterDadosDoUsuario(cpf, function(usuario) {
            console.log('Nome completo:', usuario.nomeCompleto);
            console.log('Email:', usuario.email);
            bemvindoDiv.innerHTML = `
                <h3 style="font-family: var(--fontExtraBold);">Seu perfil</h3>
                <form>
                    <div class="form-group">
                        <label for="nome">Nome:</label>
                        <div class="input-edit">
                            <input type="text" id="nome" name="nome" value="${usuario.nomeCompleto}">
                            <button type="button" id="editarNome">Editar</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Endereço de email:</label>
                        <div class="input-edit">
                            <input type="email" id="email" name="email" value="${usuario.email}">
                            <button type="button" id="editarEmail">Editar</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha:</label>
                        <div class="input-edit">
                            <input type="password" id="senha" name="senha">
                            <button type="button" id="editarSenha">Editar</button>
                        </div>
                    </div>
                    <input type="submit" value="Salvar">
                </form>
            `;
            setTimeout(adicionarOuvintesDeEventos, 0);
            // adicionarOuvintesDeEventos();
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList') {
                        adicionarOuvintesDeEventos();
                        observer.disconnect(); // Desconectar o observador depois de adicionar os ouvintes de eventos
                    }
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }
    
    mostrarBoasVindas();

    /* document.body.addEventListener('click', (event) => {
        if (event.target.matches('#perfil-btn, #perfil-btn *')) {
            event.preventDefault();
            mostrarPerfil();
        }
    }); */
    document.getElementById('perfil-btn').addEventListener('click', mostrarPerfil);
    
    document.addEventListener('DOMContentLoaded', function() {
        mostrarPerfil();
    });
});

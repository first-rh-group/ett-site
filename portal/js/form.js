document.addEventListener('DOMContentLoaded', (event) => {
    var bemvindoDiv = document.querySelector('.principal .bemvindo');

    function mostrarBoasVindas() {
        bemvindoDiv.innerHTML = `
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
        `;
    }

    function mostrarPerfil() {
        bemvindoDiv.innerHTML = `
            <h3 style="font-family: var(--fontExtraBold);">Seu perfil</h3>
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
        `;
    }

    mostrarBoasVindas();

    document.body.addEventListener('click', (event) => {
        if (event.target.matches('#perfil-btn, #perfil-btn *')) {
            event.preventDefault();
            mostrarPerfil();
        }
    });
});
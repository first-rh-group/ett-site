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
        <div class = "container">

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

    window.addLogo = function(event) {
        event.preventDefault();
        var file = document.getElementById('logoFile').files[0];
    
        // Verifica se um arquivo foi selecionado
        if (!file) {
            alert('Imagem adicionada com sucesso!');
            return;
        }
    
        var reader = new FileReader();
        reader.onloadend = function() {
            var img = document.createElement('img');
            img.src = reader.result;
    
            // Cria um botão de remoção para cada imagem
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.onclick = function() {
                // Remove a imagem do DOM
                img.remove();
                removeButton.remove();
    
                // Remove a imagem do armazenamento local
                var storedLogos = JSON.parse(localStorage.getItem('logos')) || [];
                var index = storedLogos.indexOf(reader.result);
                if (index !== -1) {
                    storedLogos.splice(index, 1);
                    localStorage.setItem('logos', JSON.stringify(storedLogos));
                }
            };
    
            document.getElementById('logos').appendChild(img);
            document.getElementById('logos').appendChild(removeButton);
    
            // Armazena a imagem no armazenamento local
            var storedLogos = JSON.parse(localStorage.getItem('logos')) || [];
            storedLogos.push(reader.result);
            localStorage.setItem('logos', JSON.stringify(storedLogos));
        }
        reader.readAsDataURL(file);
        document.getElementById('logoFile').value = '';
    }
    document.addEventListener('DOMContentLoaded', function() {
        // Recupera as imagens do armazenamento local
        var storedLogos = JSON.parse(localStorage.getItem('logos')) || [];
        var logosDiv = document.getElementById('logos');
        storedLogos.forEach(function(logo) {
            var img = document.createElement('img');
            img.src = logo;
            logosDiv.appendChild(img);
    
            // Cria um botão de remoção para cada imagem
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.onclick = function() {
                // Remove a imagem do DOM
                img.remove();
                removeButton.remove();
    
                // Remove a imagem do armazenamento local
                var storedLogos = JSON.parse(localStorage.getItem('logos')) || [];
                var index = storedLogos.indexOf(logo);
                if (index !== -1) {
                    storedLogos.splice(index, 1);
                    localStorage.setItem('logos', JSON.stringify(storedLogos));
                }
            };
    
            logosDiv.appendChild(removeButton);
        });
    });

    function applyStyle() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
        @font-face {
            font-family: fontProjeto;
            src: url(../font/CodecPro-Regular.ttf) format("truetype");
            }
            @font-face {
            font-family: fontExtraBold;
            src: url(../font/CodecCold-ExtraBold.ttf) format("truetype");
            }
            @font-face {
            font-family: fontCodecRegular;
            src: url(../font/codec-pro-light.ttf) format("truetype");
            }
            @font-face {
            font-family: fontCodecBold;
            src: url(../font/codec-pro-bold.ttf) format("truetype");
            }
            @font-face {
            font-family: sonnyGotich;
            src: url(../font/W\ Foundry\ -\ Sonny\ Gothic\ Condensed\ Bold.otf) format("opentype");
            }
            :root {
            --fontProjeto: fontProjeto;
            --fontExtraBold: fontExtraBold;
            --fontCodecRegular: fontCodecRegular;
            --fontCodecBold: fontCodecBold;
            --sonnyGotich : sonnyGotich;
            --black: #313131;
            --green: #334644;
            --golden: #feb812;
            --vividBlue: #007bff;
            --azulFirst: hsl(222deg 48% 30%);
            --amareloFirst: hsl(41deg 99% 58%);
            --vermelhoFirst: hsl(358deg 51% 40%);
            --gray: rgb(66, 66, 66);
            --logoWidth: clamp(150px, 35vw, 300px);
            --headerMinHeight: 65px;
            --fontFamilyDiv: "Titillium Web", sans-serif;
            --fontSizeDiv: clamp(1.5em, 2vw, 30px);
            --textShadow: 1.5px 1.5px 0px #000000;
            --container: 1240px;
            --titillium: "Titillium Web", sans-serif;
            --fontSizeTitulos: clamp(28px, 4.5vw, 32px);
            --fontSizePadrao: clamp(19px, 18px, 2vw);
            --buttonFont: clamp(20px, 25px, 2.5vw);
            --paddingFaixas: clamp(50px, 5vw, 30%);
            --tamanhoRetangulo: 200px;
            }
            /* Estilização da tabela */
            #tabelaUsuarios {
                width: 100%;
                border-collapse: collapse;
            }
    
            /* Estilização das células da tabela */
            #tabelaUsuarios th, #tabelaUsuarios td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center;
            }
    
            /* Estilização do cabeçalho da tabela */
            #tabelaUsuarios th {
                padding-top: 12px;
                padding-bottom: 12px;
                background-color: #4CAF50;
                color: white;
            }
    
            /* Adiciona um efeito de hover nas linhas da tabela */
            #tabelaUsuarios tr:hover {background-color: #ddd;}
    
            #formUsuario {
                width: 50%;
                margin: auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
                background-color: #f9f9f9;
                font-family: 'fontExtraBold', sans-serif;
            }
    
            /* Estilização dos campos do formulário */
            #formUsuario input[type="text"] {
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                box-sizing: border-box;
                border: 2px solid #ccc;
                border-radius: 4px;
            }
    
            /* Estilização dos botões do formulário */
            #formUsuario input[type="submit"], #formUsuario button {
                background-color: #4CAF50;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
    
            /* Estilização do botão de excluir */
            #formUsuario button {
                background-color: #f44336;
            }
    
            /* Efeito de hover nos botões do formulário */
            #formUsuario input[type="submit"]:hover, #formUsuario button:hover {
                opacity: 0.8;
            }
        `;
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addClickListener();
            applyStyle();
        });
    } else {
        addClickListener();
        applyStyle();
    }

    function loadUsuarioAdmin() {
        console.log($); // Verifica se o jQuery está sendo carregado corretamente
    console.log(jQuery); // Outra maneira de verificar se o jQuery está sendo carregado corretamente
    console.log($.fn.jquery); // Verifica a versão do jQuery
    console.log($ === jQuery); // Verifica se $ não foi sobrescrito
        bemvindoDiv.innerHTML = `
        <table id="tabelaUsuarios">
        <thead>
            <tr style="font-family: var(--fontExtraBold);">
                <th>Nome Completo</th>
                <th>CPF</th>
                <th>Iniciais</th>
                <th>Email</th>
                <th>Telefones</th>
                <!-- Adicione mais colunas conforme necessário -->
            </tr>
        </thead>
        <tbody>
            <!-- As linhas da tabela serão preenchidas dinamicamente pelo JavaScript -->
        </tbody>
    </table>

    <div id="formUsuario" style="display: none;">
        <h2>Editar Usuário</h2>
        <form id="formEditarUsuario">
            <label for="nomeCompleto">Nome Completo:</label><br>
            <input type="text" id="nomeCompleto" name="nomeCompleto"><br>
            <label for="cpf">CPF:</label><br>
            <input type="text" id="cpf" name="cpf"><br>
            <label for="iniciais">Iniciais:</label><br>
            <input type="text" id="iniciais" name="iniciais"><br>
            <label for="telefones">Telefone Celular:</label><br>
            <input type="text" id="telefones" name="telefones"><br>
            <h3>Permissões:</h3>
            <label>Dias Autorizados:</label><br>
            <input type="checkbox" id="seg" name="diasAutorizados" value="seg">
            <label for="seg">SEG</label><br>
            <input type="checkbox" id="ter" name="diasAutorizados" value="ter">
            <label for="ter">TER</label><br>
            <input type="checkbox" id="qua" name="diasAutorizados" value="qua">
            <label for="qua">QUA</label><br>
            <input type="checkbox" id="qui" name="diasAutorizados" value="qui">
            <label for="qui">QUI</label><br>
            <input type="checkbox" id="sex" name="diasAutorizados" value="sex">
            <label for="sex">SEX</label><br>
            <input type="checkbox" id="sab" name="diasAutorizados" value="sab">
            <label for="sab">SÁB</label><br>
            <input type="checkbox" id="dom" name="diasAutorizados" value="dom">
            <label for="dom">DOM</label><br>
            <br>
            <label for="horarioInicio">Horário Autorizado (Início):</label><br>
            <input type="time" id="horarioInicio" name="horarioInicio"><br>
            <br>
            <label for="horarioFim">Horário Autorizado (Fim):</label><br>
            <input type="time" id="horarioFim" name="horarioFim"><br>
            <input type="submit" value="Salvar Edições">
            <button id="btnExcluir">Excluir Usuário</button>
        </form>
    </div>
        `;
        $.ajax({
            url: 'session/usuarioAdmin.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                setTimeout(function() {
                var tabelaUsuarios = document.getElementById('tabelaUsuarios');
                if (tabelaUsuarios) {
                    data.forEach(usuario => {
                        var linha = tabelaUsuarios.insertRow();
                        linha.insertCell().innerText = usuario.nomeCompleto;
                        linha.insertCell().innerText = usuario.cpf;
                        linha.insertCell().innerText = usuario.iniciais;
                        linha.insertCell().innerText = usuario.email;
                        linha.insertCell().innerText = usuario.telefones;
        
                        linha.addEventListener('click', function() {
                            document.getElementById('nomeCompleto').value = usuario.nomeCompleto;
                            document.getElementById('cpf').value = usuario.cpf;
                            document.getElementById('iniciais').value = usuario.iniciais;
                            document.getElementById('telefones').value = usuario.telefones;
        
                            document.getElementById('formUsuario').style.display = 'block';
                        });
                    });
                } else {
                    console.error('Tabela não encontrada: tabelaUsuarios')
                }
            }, 0)
            },
            error: function(error) {
                console.error('Erro ao buscar dados: ', error);
            }
        });
    
        document.getElementById('btnExcluir').addEventListener('click', function(e) {
            e.preventDefault();
    
            var cpf = document.getElementById('cpf').value;
    
            $.ajax({
                url: 'session/usuarioAdmin.php',
                type: 'POST',
                data: {
                    action: 'delete',
                    cpf: cpf
                },
                success: function(data) {
                    alert('Usuário excluído com sucesso!');
                },
                error: function(error) {
                    console.error('Erro ao excluir usuário: ', error);
                }
            });
        });
    
        document.getElementById('formEditarUsuario').addEventListener('submit', function(e) {
            e.preventDefault();
            var nomeCompleto = document.getElementById('nomeCompleto').value;
            var cpf = document.getElementById('cpf').value;
            var iniciais = document.getElementById('iniciais').value;
            var telefones = document.getElementById('telefones').value;
            var horarioInicio = document.getElementById('horarioInicio').value;
            var horarioFim = document.getElementById('horarioFim').value;
    
            $.ajax({
                url: 'session/usuarioAdmin.php',
                type: 'POST',
                data: {
                    action: 'update',
                    nomeCompleto: nomeCompleto,
                    cpf: cpf,
                    iniciais: iniciais,
                    telefones: telefones,
                    horarioInicio: horarioInicio,
                    horarioFim: horarioFim
                },
                success: function(data) {
                    alert('Dados atualizados com sucesso!');
                },
                error: function(error) {
                    console.error('Erro ao atualizar dados: ', error);
                }
            });
        });
    }
    if (document.readyState === 'loading') {  // Se o DOM ainda está carregando, adicione o ouvinte de evento ao DOMContentLoaded
        document.addEventListener('DOMContentLoaded', addClickListener);
    } else {  // Caso contrário, adicione o ouvinte de evento agora
        addClickListener();
    }
    
    function addClickListener() {
        var element = document.querySelector('#sideMenu > div.admin > div:nth-child(2) > div:nth-child(5)');
        if (element) {
            element.addEventListener('click', loadUsuarioAdmin);
        } else {
            console.error('Elemento não encontrado: #sideMenu > div.admin > div:nth-child(2) > div:nth-child(5)');
        }
    }

    function addLogos() {
        bemvindoDiv.innerHTML = `
        <h1>Escolha a logo da empresa</h1>
    
        <!-- Formulário para upload de arquivo -->
        <form id="logoForm" onsubmit="addLogo(event)">
            <input type="file" id="logoFile" accept="image/*" required>
            <button type="submit" style="font-family: var(--fontExtraBold);">Adicionar</button>
        </form>
    
        <!-- Div onde as logos serão exibidas -->
        <div id="logos"></div>
        `;
        document.getElementById('logoForm').addEventListener('submit', addLogo);
        var storedLogos = JSON.parse(localStorage.getItem('logos')) || [];
        var logosDiv = document.getElementById('logos');
        storedLogos.forEach(function(logo) {
            var img = document.createElement('img');
            img.src = logo;
            logosDiv.appendChild(img);
    
            // Cria um botão de remoção para cada imagem
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.onclick = function() {
                // Remove a imagem do DOM
                img.remove();
                removeButton.remove();
    
                // Remove a imagem do armazenamento local
                var storedLogos = JSON.parse(localStorage.getItem('logos')) || [];
                var index = storedLogos.indexOf(logo);
                if (index !== -1) {
                    storedLogos.splice(index, 1);
                    localStorage.setItem('logos', JSON.stringify(storedLogos));
                }
            };
    
            logosDiv.appendChild(removeButton);
        });
    }
    
    var adminDiv = document.querySelector('#sideMenu > div.admin > div:nth-child(2) > div:nth-child(3)');
    
    if (adminDiv) {
        adminDiv.addEventListener('click', addLogos);
    } else {
        console.error('Elemento adminDiv não encontrado');
    }

    function loadFaqAdmin() {
        fetch('gerenciar_faq.php', {
            method: 'GET', // ou 'POST'
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            // body: JSON.stringify(data), // se você estiver usando o método POST
        })
        .then(response => response.text())
        .then(data => {
            // Insira a resposta na div 'principal'
            bemvindoDiv.innerHTML = data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    var faqAdminElement = document.querySelector('#sideMenu > div.admin > div:nth-child(2) > div:nth-child(4)');
if (faqAdminElement) {
    faqAdminElement.addEventListener('click', loadFaqAdmin);
} else {
    console.error('Elemento não encontrado: #sideMenu > div.admin > div:nth-child(2) > div:nth-child(4)');
}

    function enviarDadosParaServidor(id, cpf, nome, email, callback) {
        var dados = {
            id: id,
            cpf: cpf,
            nomeCompleto: nome,
            email: email
        };
    
        fetch('http://localhost:8080/projeto_ett/portal/session/update.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.text())
        .then(text => {
            try {
                return JSON.parse(text);
            } catch (error) {
                console.error('Erro ao analisar JSON:', error);
                console.log('Resposta do servidor:', text);
                throw error;
            }
        })
        .then(data => callback(data))
        .catch((error) => {
            console.error('Erro:', error);
        });
    }

    function mostrarPerfil() {
        var cpf = localStorage.getItem('cpf'); // Obter o CPF do localStorage
        obterDadosDoUsuario(cpf, function(usuario) {
            console.log('Nome completo:', usuario.nomeCompleto);
            console.log('Email:', usuario.email);
            bemvindoDiv.innerHTML = `
                <h3 style="font-family: var(--fontExtraBold);">Seu perfil</h3>
                <form id="formPerfil">
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
            document.getElementById('formPerfil').addEventListener('submit', function(event){
                event.preventDefault();

                var id = localStorage.getItem('id');
                var cpf = localStorage.getItem('cpf');
                var nome = document.getElementById('nome').value;
                var email = document.getElementById('email').value;
                console.log('ID:', id);
                console.log('CPF:', cpf);
            
                enviarDadosParaServidor(id, cpf, nome, email, function(resposta) {
                    if (resposta.status === 'success') {
                        console.log('Dados atualizados com sucesso!');
                    } else {
                        if (resposta.message) {
                            console.error('Erro ao atualizar dados:', resposta.message);
                        } else {
                            console.error('Erro ao atualizar dados: Ocorreu um erro desconhecido.');
                        }
                    }
                })
            })
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

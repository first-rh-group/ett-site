"use strict";

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
document.addEventListener('DOMContentLoaded', function (event) {
  var bemvindoDiv = document.querySelector('.principal');
  function mostrarBoasVindas() {
    bemvindoDiv.innerHTML = "\n        <div class = \"container\">\n\n        <div class=\"principal\">\n        <div class=\"bemvindo\">\n        <h2>Seja bem vindo(a) ao Portal Corporativo First RH Group!</h2>\n        <p>Este portal foi criado para proporcionar aos nossos colaboradores um <strong>acesso r\xE1pido<br>\n        e f\xE1cil</strong> a diversos recursos e informa\xE7\xF5es.</p>\n        <p>Na \xE1rea <strong>Financeiro</strong>, voc\xEA pode conferir seu contracheque e informe de rendimentos.<br>\n                J\xE1 na se\xE7\xE3o <strong>Jornada de Trabalho</strong>, \xE9 poss\xEDvel visualizar e imprimir sua folha de ponto.<br>\n                O t\xF3pico <strong>Informa\xE7\xF5es Gerais</strong> inclui:\n            </p>\n            <ul>\n                <li><b>Pol\xEDticas First RH Group</b> - Diretrizes importantes da empresa que todos os<br>\n                    colaboradores devem ler atentamente;</li>\n                <li><b>Documenta\xE7\xE3o</b> - Documentos essenciais para os colaboradores;</li>\n                <li><b>Comunicados</b> - Atualiza\xE7\xF5es sobre assuntos relevantes aos colaboradores;</li>\n                <li><b>Sa\xFAde</b> - Sugest\xF5es de projetos que promovem a sa\xFAde de diferentes maneiras;</li>\n                <li><b>Cursos</b> - Links para se inscrever em cursos gratuitos com diversos temas;</li>\n                <li><b>Parcerias</b> - Descontos exclusivos em institui\xE7\xF5es parceiras, como faculdades e<br>\n                    escolas de idiomas, al\xE9m de servi\xE7os adicionais;</li>\n                <li><b>Canal de Den\xFAncias</b> - Um espa\xE7o para relatar e investigar a\xE7\xF5es que violem<br>\n                    nosso C\xF3digo de \xC9tica;</li>\n                <li><b>Perguntas Frequentes</b> - Respostas para d\xFAvidas comuns, fornecidas por nossa<br>\n                    equipe de apoio.\n                </li>\n            </ul>\n            <p>Nos esfor\xE7amos para manter nosso portal sempre atualizado. Se surgir alguma<br>\n                d\xFAvida ou sugest\xE3o, n\xE3o hesite em entrar em contato pelo e-mail\n                 <a\n                    mailto=\"qualidade@firstrh.com.br\">qualidade@firstrh.com.br</a></p>\n             <p><b>Junte-se a n\xF3s e explore tudo o que nosso portal tem a oferecer!</b></p>\n             </div>\n\n             <div class=\"novidades\">\n             <div class=\"titulo-novidades\">\n                 <h2 style=\"font-family: var(--fontExtraBold); font-size: var(--fontSizePadrao);\">Novidades:</h2>\n                 <div class=\"logos\"></div>\n                 <p style=\"font-family: var(--fontExtraBold);\">Acesse a \xE1rea de Parceiros para saber mais!</p>\n             </div>\n         </div>\n\n        </div>\n    </div>\n        ";
  }
  function obterDadosDoUsuario(cpf, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/projeto_ett/portal/session/form.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (this.status == 200 && this.responseText.trim() !== '') {
        var response = this.responseText;
        try {
          response = JSON.parse(response);
        } catch (e) {
          console.error('A resposta do servidor não é um JSON válido:', this.responseText);
          return;
        }
      }
      console.log('Dados do usuário', response);
      callback(response);
    };
    xhr.send(JSON.stringify({
      cpf: cpf
    }));
  }
  function enviarDados(campo, valor) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/projeto_ett/portal/processadorAjax.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
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
      editarNome.addEventListener('click', function () {
        var nome = document.getElementById('nome').value;
        console.log('Nome:', nome);
        enviarDados('nome', nome);
      });
    }
    if (editarEmail) {
      editarEmail.addEventListener('click', function () {
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
  window.addLogo = function (event) {
    event.preventDefault();
    var file = document.getElementById('logoFile').files[0];

    // Verifica se um arquivo foi selecionado
    if (!file) {
      alert('Imagem adicionada com sucesso!');
      return;
    }
    var reader = new FileReader();
    reader.onloadend = function () {
      var img = document.createElement('img');
      img.src = reader.result;

      // Cria um botão de remoção para cada imagem
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.onclick = function () {
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
    };
    reader.readAsDataURL(file);
    document.getElementById('logoFile').value = '';
  };
  document.addEventListener('DOMContentLoaded', function () {
    // Recupera as imagens do armazenamento local
    var storedLogos = JSON.parse(localStorage.getItem('logos')) || [];
    var logosDiv = document.getElementById('logos');
    storedLogos.forEach(function (logo) {
      var img = document.createElement('img');
      img.src = logo;
      logosDiv.appendChild(img);

      // Cria um botão de remoção para cada imagem
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.onclick = function () {
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
    style.innerHTML = "\n        @font-face {\n            font-family: fontProjeto;\n            src: url(../font/CodecPro-Regular.ttf) format(\"truetype\");\n            }\n            @font-face {\n            font-family: fontExtraBold;\n            src: url(../font/CodecCold-ExtraBold.ttf) format(\"truetype\");\n            }\n            @font-face {\n            font-family: fontCodecRegular;\n            src: url(../font/codec-pro-light.ttf) format(\"truetype\");\n            }\n            @font-face {\n            font-family: fontCodecBold;\n            src: url(../font/codec-pro-bold.ttf) format(\"truetype\");\n            }\n            @font-face {\n            font-family: sonnyGotich;\n            src: url(../font/W Foundry - Sonny Gothic Condensed Bold.otf) format(\"opentype\");\n            }\n            :root {\n            --fontProjeto: fontProjeto;\n            --fontExtraBold: fontExtraBold;\n            --fontCodecRegular: fontCodecRegular;\n            --fontCodecBold: fontCodecBold;\n            --sonnyGotich : sonnyGotich;\n            --black: #313131;\n            --green: #334644;\n            --golden: #feb812;\n            --vividBlue: #007bff;\n            --azulFirst: hsl(222deg 48% 30%);\n            --amareloFirst: hsl(41deg 99% 58%);\n            --vermelhoFirst: hsl(358deg 51% 40%);\n            --gray: rgb(66, 66, 66);\n            --logoWidth: clamp(150px, 35vw, 300px);\n            --headerMinHeight: 65px;\n            --fontFamilyDiv: \"Titillium Web\", sans-serif;\n            --fontSizeDiv: clamp(1.5em, 2vw, 30px);\n            --textShadow: 1.5px 1.5px 0px #000000;\n            --container: 1240px;\n            --titillium: \"Titillium Web\", sans-serif;\n            --fontSizeTitulos: clamp(28px, 4.5vw, 32px);\n            --fontSizePadrao: clamp(19px, 18px, 2vw);\n            --buttonFont: clamp(20px, 25px, 2.5vw);\n            --paddingFaixas: clamp(50px, 5vw, 30%);\n            --tamanhoRetangulo: 200px;\n            }\n            /* Estiliza\xE7\xE3o da tabela */\n            #tabelaUsuarios {\n                width: 100%;\n                border-collapse: collapse;\n            }\n    \n            /* Estiliza\xE7\xE3o das c\xE9lulas da tabela */\n            #tabelaUsuarios th, #tabelaUsuarios td {\n                border: 1px solid #ddd;\n                padding: 8px;\n                text-align: center;\n            }\n    \n            /* Estiliza\xE7\xE3o do cabe\xE7alho da tabela */\n            #tabelaUsuarios th {\n                padding-top: 12px;\n                padding-bottom: 12px;\n                background-color: #4CAF50;\n                color: white;\n            }\n    \n            /* Adiciona um efeito de hover nas linhas da tabela */\n            #tabelaUsuarios tr:hover {background-color: #ddd;}\n    \n            #formUsuario {\n                width: 50%;\n                margin: auto;\n                padding: 20px;\n                border: 1px solid #ddd;\n                border-radius: 5px;\n                background-color: #f9f9f9;\n                font-family: 'fontExtraBold', sans-serif;\n            }\n    \n            /* Estiliza\xE7\xE3o dos campos do formul\xE1rio */\n            #formUsuario input[type=\"text\"] {\n                width: 100%;\n                padding: 12px 20px;\n                margin: 8px 0;\n                box-sizing: border-box;\n                border: 2px solid #ccc;\n                border-radius: 4px;\n            }\n    \n            /* Estiliza\xE7\xE3o dos bot\xF5es do formul\xE1rio */\n            #formUsuario input[type=\"submit\"], #formUsuario button {\n                background-color: #4CAF50;\n                color: white;\n                padding: 14px 20px;\n                margin: 8px 0;\n                border: none;\n                border-radius: 4px;\n                cursor: pointer;\n            }\n    \n            /* Estiliza\xE7\xE3o do bot\xE3o de excluir */\n            #formUsuario button {\n                background-color: #f44336;\n            }\n    \n            /* Efeito de hover nos bot\xF5es do formul\xE1rio */\n            #formUsuario input[type=\"submit\"]:hover, #formUsuario button:hover {\n                opacity: 0.8;\n            }\n        ";
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
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
    bemvindoDiv.innerHTML = "\n        <table id=\"tabelaUsuarios\">\n        <thead>\n            <tr style=\"font-family: var(--fontExtraBold);\">\n                <th>Nome Completo</th>\n                <th>CPF</th>\n                <th>Iniciais</th>\n                <th>Email</th>\n                <th>Telefones</th>\n                <!-- Adicione mais colunas conforme necess\xE1rio -->\n            </tr>\n        </thead>\n        <tbody>\n            <!-- As linhas da tabela ser\xE3o preenchidas dinamicamente pelo JavaScript -->\n        </tbody>\n    </table>\n\n    <div id=\"formUsuario\" style=\"display: none;\">\n        <h2>Editar Usu\xE1rio</h2>\n        <form id=\"formEditarUsuario\">\n            <label for=\"nomeCompleto\">Nome Completo:</label><br>\n            <input type=\"text\" id=\"nomeCompleto\" name=\"nomeCompleto\"><br>\n            <label for=\"cpf\">CPF:</label><br>\n            <input type=\"text\" id=\"cpf\" name=\"cpf\"><br>\n            <label for=\"iniciais\">Iniciais:</label><br>\n            <input type=\"text\" id=\"iniciais\" name=\"iniciais\"><br>\n            <label for=\"telefones\">Telefone Celular:</label><br>\n            <input type=\"text\" id=\"telefones\" name=\"telefones\"><br>\n            <h3>Permiss\xF5es:</h3>\n            <label>Dias Autorizados:</label><br>\n            <input type=\"checkbox\" id=\"seg\" name=\"diasAutorizados\" value=\"seg\">\n            <label for=\"seg\">SEG</label><br>\n            <input type=\"checkbox\" id=\"ter\" name=\"diasAutorizados\" value=\"ter\">\n            <label for=\"ter\">TER</label><br>\n            <input type=\"checkbox\" id=\"qua\" name=\"diasAutorizados\" value=\"qua\">\n            <label for=\"qua\">QUA</label><br>\n            <input type=\"checkbox\" id=\"qui\" name=\"diasAutorizados\" value=\"qui\">\n            <label for=\"qui\">QUI</label><br>\n            <input type=\"checkbox\" id=\"sex\" name=\"diasAutorizados\" value=\"sex\">\n            <label for=\"sex\">SEX</label><br>\n            <input type=\"checkbox\" id=\"sab\" name=\"diasAutorizados\" value=\"sab\">\n            <label for=\"sab\">S\xC1B</label><br>\n            <input type=\"checkbox\" id=\"dom\" name=\"diasAutorizados\" value=\"dom\">\n            <label for=\"dom\">DOM</label><br>\n            <br>\n            <label for=\"horarioInicio\">Hor\xE1rio Autorizado (In\xEDcio):</label><br>\n            <input type=\"time\" id=\"horarioInicio\" name=\"horarioInicio\"><br>\n            <br>\n            <label for=\"horarioFim\">Hor\xE1rio Autorizado (Fim):</label><br>\n            <input type=\"time\" id=\"horarioFim\" name=\"horarioFim\"><br>\n            <input type=\"submit\" value=\"Salvar Edi\xE7\xF5es\">\n            <button id=\"btnExcluir\">Excluir Usu\xE1rio</button>\n        </form>\n    </div>\n        ";
    $.ajax({
      url: 'session/usuarioAdmin.php',
      type: 'GET',
      dataType: 'json',
      success: function success(data) {
        setTimeout(function () {
          var tabelaUsuarios = document.getElementById('tabelaUsuarios');
          if (tabelaUsuarios) {
            data.forEach(function (usuario) {
              var linha = tabelaUsuarios.insertRow();
              linha.insertCell().innerText = usuario.nomeCompleto;
              linha.insertCell().innerText = usuario.cpf;
              linha.insertCell().innerText = usuario.iniciais;
              linha.insertCell().innerText = usuario.email;
              linha.insertCell().innerText = usuario.telefones;
              linha.addEventListener('click', function () {
                document.getElementById('nomeCompleto').value = usuario.nomeCompleto;
                document.getElementById('cpf').value = usuario.cpf;
                document.getElementById('iniciais').value = usuario.iniciais;
                document.getElementById('telefones').value = usuario.telefones;
                document.getElementById('formUsuario').style.display = 'block';
              });
            });
          } else {
            console.error('Tabela não encontrada: tabelaUsuarios');
          }
        }, 0);
      },
      error: function error(_error) {
        console.error('Erro ao buscar dados: ', _error);
      }
    });
    document.getElementById('btnExcluir').addEventListener('click', function (e) {
      e.preventDefault();
      var cpf = document.getElementById('cpf').value;
      $.ajax({
        url: 'session/usuarioAdmin.php',
        type: 'POST',
        data: {
          action: 'delete',
          cpf: cpf
        },
        success: function success(data) {
          alert('Usuário excluído com sucesso!');
        },
        error: function error(_error2) {
          console.error('Erro ao excluir usuário: ', _error2);
        }
      });
    });
    document.getElementById('formEditarUsuario').addEventListener('submit', function (e) {
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
        success: function success(data) {
          alert('Dados atualizados com sucesso!');
        },
        error: function error(_error3) {
          console.error('Erro ao atualizar dados: ', _error3);
        }
      });
    });
  }
  if (document.readyState === 'loading') {
    // Se o DOM ainda está carregando, adicione o ouvinte de evento ao DOMContentLoaded
    document.addEventListener('DOMContentLoaded', addClickListener);
  } else {
    // Caso contrário, adicione o ouvinte de evento agora
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
    bemvindoDiv.innerHTML = "\n        <h1>Escolha a logo da empresa</h1>\n    \n        <!-- Formul\xE1rio para upload de arquivo -->\n        <form id=\"logoForm\" onsubmit=\"addLogo(event)\">\n            <input type=\"file\" id=\"logoFile\" accept=\"image/*\" required>\n            <button type=\"submit\" style=\"font-family: var(--fontExtraBold);\">Adicionar</button>\n        </form>\n    \n        <!-- Div onde as logos ser\xE3o exibidas -->\n        <div id=\"logos\"></div>\n        ";
    document.getElementById('logoForm').addEventListener('submit', addLogo);
    var storedLogos = JSON.parse(localStorage.getItem('logos')) || [];
    var logosDiv = document.getElementById('logos');
    storedLogos.forEach(function (logo) {
      var img = document.createElement('img');
      img.src = logo;
      logosDiv.appendChild(img);

      // Cria um botão de remoção para cada imagem
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.onclick = function () {
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
      method: 'GET',
      // ou 'POST'
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      // body: JSON.stringify(data), // se você estiver usando o método POST
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      // Insira a resposta na div 'principal'
      bemvindoDiv.innerHTML = data;
    })["catch"](function (error) {
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
    }).then(function (response) {
      return response.text();
    }).then(function (text) {
      try {
        return JSON.parse(text);
      } catch (error) {
        console.error('Erro ao analisar JSON:', error);
        console.log('Resposta do servidor:', text);
        throw error;
      }
    }).then(function (data) {
      return callback(data);
    })["catch"](function (error) {
      console.error('Erro:', error);
    });
  }
  function mostrarPerfil() {
    var cpf = localStorage.getItem('cpf'); // Obter o CPF do localStorage
    obterDadosDoUsuario(cpf, function (usuario) {
      console.log('Nome completo:', usuario.nomeCompleto);
      console.log('Email:', usuario.email);
      bemvindoDiv.innerHTML = "\n                <h3 style=\"font-family: var(--fontExtraBold);\">Seu perfil</h3>\n                <form id=\"formPerfil\">\n                    <div class=\"form-group\">\n                        <label for=\"nome\">Nome:</label>\n                        <div class=\"input-edit\">\n                            <input type=\"text\" id=\"nome\" name=\"nome\" value=\"".concat(usuario.nomeCompleto, "\">\n                            <button type=\"button\" id=\"editarNome\">Editar</button>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Endere\xE7o de email:</label>\n                        <div class=\"input-edit\">\n                            <input type=\"email\" id=\"email\" name=\"email\" value=\"").concat(usuario.email, "\">\n                            <button type=\"button\" id=\"editarEmail\">Editar</button>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"senha\">Senha:</label>\n                        <div class=\"input-edit\">\n                            <input type=\"password\" id=\"senha\" name=\"senha\">\n                            <button type=\"button\" id=\"editarSenha\">Editar</button>\n                        </div>\n                    </div>\n                    <input type=\"submit\" value=\"Salvar\">\n                </form>\n            ");
      setTimeout(adicionarOuvintesDeEventos, 0);
      // adicionarOuvintesDeEventos();
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'childList') {
            adicionarOuvintesDeEventos();
            observer.disconnect(); // Desconectar o observador depois de adicionar os ouvintes de eventos
          }
        });
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      document.getElementById('formPerfil').addEventListener('submit', function (event) {
        event.preventDefault();
        var id = localStorage.getItem('id');
        var cpf = localStorage.getItem('cpf');
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        console.log('ID:', id);
        console.log('CPF:', cpf);
        enviarDadosParaServidor(id, cpf, nome, email, function (resposta) {
          if (resposta.status === 'success') {
            console.log('Dados atualizados com sucesso!');
          } else {
            if (resposta.message) {
              console.error('Erro ao atualizar dados:', resposta.message);
            } else {
              console.error('Erro ao atualizar dados: Ocorreu um erro desconhecido.');
            }
          }
        });
      });
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
  document.addEventListener('DOMContentLoaded', function () {
    mostrarPerfil();
  });
});
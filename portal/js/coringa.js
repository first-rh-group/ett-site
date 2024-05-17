//const { set } = require("express/lib/application");

// ULTIMO - 12
async function coringa(codigo, instrucoes) {
  console.log(codigo, instrucoes);
  var instrucoesEnviadas = '';
  if(instrucoes != null) {
      for (const [key, value] of Object.entries(instrucoes)) {
          instrucoesEnviadas += '&'+encodeURIComponent(key)+'='+encodeURIComponent(value);
      }
  }
  console.log(instrucoesEnviadas);
  var extra = '';
  if (['3','6','7','10'].includes(codigo)) {
      var form = document.getElementById(instrucoes.nomeFormulario);
      form.addEventListener('submit', (event) => {
          if (event) { event.preventDefault(); }
      }, false);
      extra = "&"+serialize(instrucoes.nomeFormulario);
      if(codigo == '10') {
          const novaSenhaUsuario = document.getElementById('novaSenhaUsuario').value;
          if(novaSenhaUsuario != '') {
              changeAttributes({
                  "selector": "input#novaSenhaUsuario",
                  "attributes": {
                      "form-control":"caracteres8"
                  },
              });
          }
          var controle = formControl(alteracaoSenhaForm.id, 'respostaPadroes2');
          document.getElementById('respostaPadroes2').innerHTML = '';
          if(controle.length > 0) {
              window.location = '#respostaPadroes2';
              alertErros({
                  "selectorTarget":"div#respostaPadroes2",
                  "erros":controle
              })
              return;
          }
      }
  }
  return new Promise((resolve, reject) => {
      if(codigo == '8') {
          var	files = document.getElementById('folhaPontoUpload').files;
          var periodo = document.getElementById('periodo').value;
          document.getElementById('pb').style.width = '0';
          document.getElementById('pt').innerHTML = '';
              var uri = "folhaPontoSendFiles.php";
              var xhr = new XMLHttpRequest();
              var ajaxData = new FormData();
              
              xhr.open("POST", uri, true);
              xhr.upload.addEventListener("progress", function(e) {
                  if (e.lengthComputable) {
                      var percentage = Math.round((e.loaded * 100) / e.total);
                      document.getElementById('pb').style.width = percentage+'%';
                      document.getElementById('pt').innerHTML = percentage+'%';
                      document.getElementById('sendFolhaProgressBar').classList.add('sending');
                  }
              }, false);
              xhr.upload.addEventListener("load", () => {
                  document.getElementById('pt').innerHTML = '100%';
              }, false);
              xhr.onreadystatechange = function() {
                  if (xhr.readyState == 4 && xhr.status == 200) {
                      if(JSON.parse(xhr.responseText) == false) {
                          document.getElementById('pt').innerHTML = 'Nenhum arquivo foi selecionado ou enviado...';
                      } else {
                          document.getElementById('pt').innerHTML = 'Arquivo enviado!';
                      }
                      resolve(xhr.responseText);
                  }
              };
              Object.entries(files).forEach(([key, val]) => {
                  ajaxData.append(key, val);
              });
             ajaxData.append('periodo', periodo);
             xhr.send(ajaxData);
             return;
      }
      if (window.XMLHttpRequest) { // Mozilla, Safari, ...
          xmlhttp = new XMLHttpRequest();
      }
      else if (window.ActiveXObject) { // IE
          try {
              xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
          }
          catch (e) {
              try {
                  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
              } 
              catch (e) {
              }
          }
        }
        xmlhttp.onreadystatechange = function () {
            
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log("Resposta do servidor: ", xmlhttp.responseText); // Adicionado para depuração
            var response = JSON.parse(xmlhttp.responseText);
            console.log(response);
            if(response.dicas) {
                setTimeout(() => { //achar uma solução melhor. O ideal seria esperar o carregamento da página
                    response.dicas.forEach((dica, index) => {
                        if(dica.imagem) {
                            var img = document.createElement('img');
                            img.src = dica.imagem;
                            img.style.height = '80px'; // Define a altura da imagem
                            img.onerror = function() {
                                console.error('Erro ao carregar a imagem: ' + dica.imagem);
                            };
                    
                            var imagemDiv = document.createElement('div');
                            imagemDiv.style.float = 'right';
                            imagemDiv.appendChild(img);
                    
                            // Adiciona uma borda ao redor da div da imagem
                            imagemDiv.style.border = '5px solid #0F2146'; // Define a borda como 5px de largura e na cor #0F2146
                            imagemDiv.style.boxSizing = 'border-box'; // Garante que a borda não aumente o tamanho total da div
                    
                            // Adiciona margem à esquerda para mover a div da imagem mais para a direita
                            // Ajusta a margem esquerda com base na largura da janela
                            if(window.innerWidth >= 1920) {
                                imagemDiv.style.marginLeft = '945px';
                                imagemDiv.style.marginBottom = '-50px';
                            } else if(window.innerWidth >= 1366) {
                                imagemDiv.style.marginLeft = '475px';
                                imagemDiv.style.marginBottom = '-50px';
                            } else {
                                imagemDiv.style.marginLeft = '20px'; // Valor padrão para telas menores
                            }
                    
                            var dicaDiv = document.querySelector('section#main > div.principal > div:nth-child(' + (index + 2) + ')'); // Encontra a div da dica pelo índice
                            if(dicaDiv) {
                                dicaDiv.insertBefore(imagemDiv, dicaDiv.querySelector('fieldset.links')); // Adiciona a nova div antes do fieldset 'links'
                            } else {
                                console.error('Div da dica não encontrada');
                            }
                        }
                    });
                }, 400);
              
            }
            resolve(xmlhttp.responseText);
          }
        };
        xmlhttp.open("POST", "processadorAjax.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        console.log("Dados enviados: action=superCoringa&codigo=" + codigo + extra + instrucoesEnviadas); // linha adicionada para depuração
        xmlhttp.send("action=superCoringa&codigo=" + codigo + extra + instrucoesEnviadas);
    });
    
  }
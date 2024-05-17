"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
function recuperarSenha(cpf) {
  var instrucoes = {
    "cpf": cpf
  };
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // Mozilla, Safari, ...
    xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // IE
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      try {
        var resposta = xmlhttp.responseText;
        var res = JSON.parse(resposta);
        document.getElementById('destino').innerHTML = '';
        if (res.email == null) {
          criarElement({
            "id": false,
            "textoHtml": "Não localizamos um e-mail vinculado a esse CPF. Entre em contato com nosso setor de apoio ao empregado.",
            "selector": true,
            "parent": document.querySelector('div#destino'),
            "tag": "div"
          });
        } else {
          var recuper = criarElement({
            "attributes": {
              "class": "recuperarSenha"
            },
            "selector": true,
            "parent": document.querySelector('div#destino'),
            "tag": "div"
          });
          var recuper2 = criarElement({
            "textoHtml": "Localizamos o seguinte e-mail: ",
            "attributes": {
              "style": "color: #fff;" // Adicione esta linha
            },
            "parent": recuper.id,
            "tag": "div"
          });
          var recuper2 = criarElement({
            "id": false,
            "attributes": {
              "style": "font-weight: bolder; display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; line-height: 1.5; color: #495057; background-color: #fff; background-clip: padding-box; border: 3px solid #193264; border-radius: 0.25rem; transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;",
              "value": res.email,
              "readonly": true
            },
            "parent": recuper2.id,
            "tag": "input"
          });
          /*criarElement({
            "id": false,
            "textoHtml": "Se ele estiver certo, clique em NOVA SENHA para receber a nova senha nesse e-mail.",
            "parent": recuper.id,
            "tag": "div"
          });*/
          var recuper2 = criarElement({
            "attributes": {
              "style": "display:flex;justify-content: center;"
            },
            "parent": recuper.id,
            "tag": "div"
          });
          criarElement({
            "id": false,
            "attributes": {
              "class": "btn btn-info",
              "onClick": "novaSenha('" + res.codigo + "');"
            },
            "textoHtml": "ENVIAR NOVA SENHA",
            "parent": recuper2.id,
            "tag": "button"
          });
          criarElement({
            "id": false,
            "textoHtml": "Se o seu endereço de e-mail estiver incorreto, entre em contato com o seu ponto focal no setor de Relacionamento ou envie um e-mail para portal.corporativo@firstrh.com.br",
            "attributes": {
              "style": "color: #fff;" // Adicione esta linha
            },
            "parent": recuper.id,
            "tag": "div"
          });
          // changeAttributes({
          //     "attributes": {
          //         "type":"button",
          //         "onclick":false,
          //     },
          //     "removeClass": ['btn-secondary', 'btn-danger', 'btn-success'],
          //     "addClass": ['nohand','btn-warning'],
          //     "htmlText": "Logado!",
          //     "selector": "section#login button",
          // });
          // window.location = 'dashboard.html';
        }
      } catch (e) {
        console.error("A resposta do servidor não é um JSON válido: ", resposta);
      }
    }
  };
  xmlhttp.open("POST", "session/recuperarSenha.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("instrucoes=" + JSON.stringify(instrucoes));
  return;
}
function novaSenha(codigo) {
  var instrucoes = {
    "codigo": codigo
  };
  if (window.XMLHttpRequest) {
    // Mozilla, Safari, ...
    xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // IE
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
  console.log(instrucoes)
  console.log(JSON.stringify(instrucoes))

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var resposta = xmlhttp.responseText;
      console.log(resposta);
      // document.getElementById('destino').innerHTML = resposta;
      var res = JSON.parse(resposta);
      console.log(res);
      if (res == true) {
        document.getElementById('destino').innerHTML = "Pronto! O e-mail com a nova senha foi enviado";
      } else {
        document.getElementById('destino').innerHTML = "Ocorreu algum problema. Entre em contato com nossa equipe de apoio ao empregado.";
      }
    }
  };
  xmlhttp.open("POST", "session/novaSenha.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("instrucoes=" + JSON.stringify(instrucoes));
  return;
}
window.addEventListener('DOMContentLoaded', function (event) {
  var observer = new MutationObserver(function (mutationsList, observer) {
    // Procura por mudanças na adição de nós
    var _iterator = _createForOfIteratorHelper(mutationsList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        if (mutation.type === 'childList') {
          var menuAdmin = document.querySelector('.admin');
          if (menuAdmin) {
            var userData = JSON.parse(localStorage.getItem('userData'));
            if (userData && userData.grupo_id) {
              ajustarMenuPorGroupId(userData.grupo_id);
              observer.disconnect(); // Desconecta o observador quando o elemento é encontrado
            }
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });

  // Inicia o observador com uma configuração que observa a adição de elementos ao DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
function ajustarMenuPorGroupId(grupo_id) {
  var menuAdmin = document.querySelector('.admin');
  if (menuAdmin) {
    if (grupo_id !== 1) {
      menuAdmin.style.display = 'none';
    } else {
      menuAdmin.style.display = 'block';
    }
  } else {
    console.log('O elemento de menu de administração não existe! Tentando novamente em 1 segundo...');
    setTimeout(function () {
      ajustarMenuPorGroupId(grupo_id);
    }, 1000);
  }
}
function login() {
  var xmlhttp;
  var _document$getElements;
  var form = document.getElementById('loginForm');
  form.addEventListener('submit', function (event) {
    if (event) {
      event.preventDefault();
    }
  }, false);
  changeAttributes({
    "attributes": {
      "type": "button",
      "onclick": false
    },
    "removeClass": ['btn-secondary', 'btn-danger'],
    "addClass": ['nohand'],
    "htmlText": "<div class=\"spinner-border white\"></div> Logando ...",
    "selector": "section#login button"
  });
  (_document$getElements = document.getElementsByClassName('alertaErros')[0]) === null || _document$getElements === void 0 ? void 0 : _document$getElements.remove();
  var erros = formControl('loginForm');
  if (erros.length > 0) {
    alertErros({
      "selectorTarget": "form#loginForm",
      "erros": erros
    });
    changeAttributes({
      "attributes": {
        "type": "type",
        "onclick": "login();"
      },
      "removeClass": ['btn-secondary', 'btn-danger', 'nohand'],
      "addClass": ['btn-success'],
      "htmlText": "ENTRAR",
      "selector": "section#login button"
    });
  } else {
    var instrucoes = {
      "usuario": form.querySelector('input[name=cpfUsuario]').value,
      "senha": form.querySelector('input[name=senha]').value
    };
    if (window.XMLHttpRequest) {
      // Mozilla, Safari, ...
      xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      // IE
      try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp.responseText);
        var res = xmlhttp.responseText;
        console.log('Resposta do servidor (como texto):', res); // Adicionado esta linha
        if (res !== false) {
          var cpf = form.querySelector('input[name=cpfUsuario]').value;
          cpf = cpf.replace(/\D/g, '');
          console.log(cpf);
          localStorage.setItem('cpf', cpf);
          document.getElementById('destino').innerHTML = res;
          console.log('Resposta do servidor:', res); // Adicionado esta linha
          try {
            if (isJsonString(res)) {
              res = JSON.parse(res);
              console.log('Resposta do servidor (como objeto):', res);
              if (res.grupo_id) {
                localStorage.setItem('userData', JSON.stringify(res));
                localStorage.setItem('id', res.id);
                console.log('Chamando ajustarMenuPorGroupId');
                // Atrasar a chamada para ajustarMenuPorGroupId por 1 segundo
                setTimeout(function () {
                  ajustarMenuPorGroupId(res.grupo_id);
                }, 1000);
              } else {
                console.error("A resposta do servidor não contém um campo id: ", res);
              }
            } else {
              console.error("A resposta do servidor não é um JSON válido: ", res);
              // Trate res como uma string normal aqui
            }
          } catch (e) {
            console.error("Erro ao processar a resposta do servidor: ", e);
          }
        }
        console.log(res);
        if (res == false) {
          changeAttributes({
            "attributes": {
              "type": "type",
              "onclick": "login();"
            },
            "removeClass": ['btn-secondary', 'btn-danger', 'nohand'],
            "addClass": ['btn-success'],
            "htmlText": "ENTRAR",
            "selector": "section#login button"
          });
          alertErros({
            "selectorTarget": "form#loginForm",
            "erros": ['Senha e/ou usuário incorretos']
          });
        } else {
          changeAttributes({
            "attributes": {
              "type": "button",
              "onclick": false
            },
            "removeClass": ['btn-secondary', 'btn-danger', 'btn-success'],
            "addClass": ['nohand', 'btn-warning'],
            "htmlText": "Logado!",
            "selector": "section#login button"
          });
          window.location = 'dashboard.php';
        }
      }
    };
    xmlhttp.open("POST", "session/login.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("instrucoes=" + JSON.stringify(instrucoes));
  }
  return;
}
document.getElementById('recuperarButton').addEventListener('click', function () {
  var loginDiv = document.querySelector('section#login > div');
  loginDiv.style.height = 'auto'; // ou qualquer outro valor que você queira definir
});
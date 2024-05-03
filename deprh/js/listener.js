"use strict";

var _document$querySelect2, _document$querySelect3, _document$querySelect4, _document$querySelect5;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var tamanhoPadraoSubMenu = 35;
var toogle = document.getElementById('toogle');
toogle === null || toogle === void 0 ? void 0 : toogle.addEventListener("click", function (e) {
  if (document.getElementById('menuSuspensoMobile').classList.contains('showMenuMobile')) {
    document.getElementById('menuSuspensoMobile').classList.remove("showMenuMobile");
    document.getElementById('toogle').classList.remove("toogleCross");
  } else {
    document.getElementById('toogle').classList.add("toogleCross");
    document.getElementById('menuSuspensoMobile').classList.add("showMenuMobile");
  }
});
// !EMPREGADOS
function showEmpregados() {
  document.querySelector('section#main > div.principal').innerHTML = '';
  var divPrincipal = criarElement({
    "attributes": {
      "class": "editarPerfil"
    },
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Editando Perfil do Colaborador",
    "parent": divPrincipal.id,
    "tag": "p"
  });
  criarElement({
    "id": "editandoInformacoesEmpregadoForm",
    "attributes": {
      "autocomplete": "off"
    },
    "parent": divPrincipal.id,
    "tag": "form"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "CPF do colaborador",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "label"
  });
  criarElement({
    "id": "cpfEmpregado",
    "attributes": {
      "class": "form-control",
      "type": "tel",
      "name": "cpfEmpregado",
      "placeholder": "CPF do colaborador",
      "aria-label": "CPF",
      "form-control": "cpf",
      "autocomplete": "off"
    },
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Nome do colaborador",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "label"
  });
  criarElement({
    "id": "nomeEmpregado",
    "attributes": {
      "class": "form-control",
      "type": "text",
      "autocomplete": "off",
      "name": "nomeEmpregado",
      "aria-label": "nome do colaborador",
      "placeholder": "Nome do colaborador",
      "form-control": "caracteres3"
    },
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "E-mail do colaborador",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "label"
  });
  criarElement({
    "id": "emailEmpregado",
    "attributes": {
      "class": "form-control",
      "type": "email",
      "name": "emailEmpregado",
      "placeholder": "E-mail do colaborador",
      "aria-label": "email",
      "form-control": "email",
      "autocomplete": "off"
    },
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "input"
  });
  // criarElement({
  //     "id":false,
  //     "textoHtml":"Senha de Acesso ao Portal Corporativo",
  //     "selector":true,
  //     "parent":document.querySelector('div#'+divPrincipal.id+' > form > div'),
  //     "tag":"label"
  // });
  // criarElement({
  //     "id":"senhaEmpregado",
  //     "attributes": {
  //         "class":"form-control",
  //         "type":"password",
  //         "name":"senhaEmpregado",
  //         "aria-label":"senha",
  //         "form-control":"senha",
  //         "autocomplete":"off",
  //     },
  //     "selector":true,
  //     "parent":document.querySelector('div#'+divPrincipal.id+' > form > div'),
  //     "tag":"input"
  // });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "attributes": {
      "for": "suspenderEmpregado"
    },
    "textoHtml": "Suspender Acesso",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div > div:last-of-type'),
    "tag": "label"
  });
  criarElement({
    "id": "suspenderEmpregado",
    "attributes": {
      "type": "checkbox",
      "name": "suspenderEmpregado",
      "style": "margin-left:5px;"
    },
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div > div:last-of-type'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "div"
  });
  criarElement({
    "id": "salvarAlteracoes",
    "attributes": {
      "class": "btn btn-sm btn-secondary disabled nohand",
      "type": "button"
    },
    "textoHtml": "Salvar Alterações",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div > div:last-of-type'),
    "tag": "button"
  });
  criarElement({
    "id": "enviarNovaSenha",
    "attributes": {
      "class": "btn btn-sm btn-secondary disabled nohand",
      "type": "button"
    },
    "textoHtml": "Gerar e Enviar Nova Senha",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div > div:last-of-type'),
    "tag": "button"
  });
  criarElement({
    "id": "retornoErro",
    "parent": divPrincipal.id,
    "tag": "div"
  });
  setTimeout(function () {
    document.getElementById('emailEmpregado').value = '';
  }, 850);
  var cpfInput = document.getElementById('cpfEmpregado');
  cpfInput === null || cpfInput === void 0 ? void 0 : cpfInput.addEventListener('keyup', function () {
    formatacaoEspecifica(cpfInput.value, 'cpf', 'cpfEmpregado');
    coringa('16', {
      "cpf": cpfInput.value
    }).then(function () {
      coringa('10', {
        "cpf": cpfInput.value
      });
    });
  });
}
function showEmpregadosInfo() {
  document.querySelector('section#main > div.principal').innerHTML = '';
  var divPrincipal = criarElement({
    "attributes": {
      "class": "editarPerfil"
    },
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Procure o Perfil do Colaborador",
    "parent": divPrincipal.id,
    "tag": "p"
  });
  criarElement({
    "id": "buscandoInformacoesEmpregadoForm",
    "attributes": {
      "autocomplete": "off"
    },
    "parent": divPrincipal.id,
    "tag": "form"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "CPF do colaborador",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "label"
  });
  criarElement({
    "id": "cpfEmpregado",
    "attributes": {
      "class": "form-control",
      "type": "tel",
      "name": "cpfEmpregado",
      "placeholder": "CPF do colaborador",
      "aria-label": "CPF",
      "form-control": "cpf",
      "autocomplete": "off"
    },
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Nome do colaborador",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "label"
  });
  criarElement({
    "id": "nomeEmpregado",
    "attributes": {
      "class": "form-control",
      "type": "text",
      "autocomplete": "off",
      "name": "nomeEmpregado",
      "aria-label": "nome do colaborador",
      "placeholder": "Nome do colaborador",
      "form-control": "caracteres3"
    },
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Chapa",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "label"
  });
  criarElement({
    "id": "chapaEmpregado",
    "attributes": {
      "class": "form-control",
      "type": "text",
      "autocomplete": "off",
      "name": "chapaEmpregado",
      "aria-label": "Chapa do colaborador",
      "placeholder": "Chapa do colaborador"
    },
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div'),
    "tag": "div"
  });
  criarElement({
    "id": "salvarAlteracoes",
    "attributes": {
      "class": "btn btn-sm btn-primary",
      "type": "submit"
    },
    "textoHtml": "Procurar",
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' > form > div > div:last-of-type'),
    "tag": "button"
  });
  criarElement({
    "id": "retornoErro",
    "parent": divPrincipal.id,
    "tag": "div"
  });
  var cpfInput = document.getElementById('cpfEmpregado');
  cpfInput === null || cpfInput === void 0 ? void 0 : cpfInput.addEventListener('keyup', function (evento) {
    formatacaoEspecifica(cpfInput.value, 'cpf', 'cpfEmpregado');
  });
  document.querySelector('form#buscandoInformacoesEmpregadoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    coringa('17', {
      "nomeFormulario": "buscandoInformacoesEmpregadoForm"
    }).then(function (retorno) {
      var _document$querySelect;
      retorno = JSON.parse(retorno);
      (_document$querySelect = document.querySelector('div[resultadoInformacoes]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
      criarElement({
        "attributes": {
          "class": "resultadoInformacoes",
          "resultadoInformacoes": "resultadoInformacoes"
        },
        "selector": true,
        "parent": document.querySelector('section#main > div.principal'),
        "tag": "div"
      });
      Object.entries(retorno).forEach(function (informacao) {
        Object.entries(informacao[1]).forEach(function (info) {
          criarElement({
            "id": false,
            "textoHtml": info[0].replace(/_/g, " ") + ": " + info[1],
            "selector": true,
            "parent": document.querySelector('section#main > div.principal > div:last-of-type'),
            "tag": "p"
          });
        });
      });
    });
  });
}
var menuEmpregados = document.querySelector('section#main > div.menu > div.empregados > div:nth-of-type(1)');
menuEmpregados === null || menuEmpregados === void 0 ? void 0 : menuEmpregados.addEventListener('click', function () {
  var element = document.querySelector("section#main > div.menu > div.empregados > div:nth-of-type(2)");
  var NovoTamanho = (element.childNodes.length - 1) / 2 * tamanhoPadraoSubMenu;
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = NovoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
(_document$querySelect2 = document.querySelector("section#main > div.menu > div.empregados > div:nth-of-type(2) > div:first-of-type")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.addEventListener('click', function () {
  showEmpregados();
});
(_document$querySelect3 = document.querySelector("section#main > div.menu > div.empregados > div:nth-of-type(2) > div:nth-of-type(2)")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.addEventListener('click', function () {
  showEmpregadosInfo();
});
var menuEmpregadosMobile = document.querySelector('div#menuSuspensoMobile > div.empregados > div:nth-of-type(1)');
menuEmpregadosMobile === null || menuEmpregadosMobile === void 0 ? void 0 : menuEmpregadosMobile.addEventListener('click', function () {
  var quantosElementos = document.querySelector('div#menuSuspensoMobile > div.empregados > div:nth-of-type(2)').childElementCount;
  var novoTamanho = quantosElementos * tamanhoPadraoSubMenu + 5;
  var element = document.querySelector("div#menuSuspensoMobile > div.empregados > div:nth-of-type(2)");
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = novoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
(_document$querySelect4 = document.querySelector('div#menuSuspensoMobile > div.empregados > div:nth-of-type(2) > div:nth-of-type(1)')) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.addEventListener('click', function () {
  showEmpregados();
  document.getElementById('toogle').click();
});
(_document$querySelect5 = document.querySelector('div#menuSuspensoMobile > div.empregados > div:nth-of-type(2) > :nth-of-type(2)')) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.addEventListener('click', function () {
  showEmpregadosInfo();
  document.getElementById('toogle').click();
});
// !LIVRO PONTO
var menuLivroPonto = document.querySelector('section#main > div.menu > div.livroPonto > div:nth-of-type(1)');
menuLivroPonto === null || menuLivroPonto === void 0 ? void 0 : menuLivroPonto.addEventListener('click', function () {
  var element = document.querySelector("section#main > div.menu > div.livroPonto > div:nth-of-type(2)");
  var NovoTamanho = (element.childNodes.length - 1) / 2 * tamanhoPadraoSubMenu;
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = NovoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
var menuLivroPontoMobile = document.querySelector('div#menuSuspensoMobile > div.livroPonto > div:nth-of-type(1)');
menuLivroPontoMobile === null || menuLivroPontoMobile === void 0 ? void 0 : menuLivroPontoMobile.addEventListener('click', function () {
  var quantosElementos = document.querySelector('div#menuSuspensoMobile > div.livroPonto > div:nth-of-type(2)').childElementCount;
  var novoTamanho = quantosElementos * tamanhoPadraoSubMenu + 5;
  var element = document.querySelector("div#menuSuspensoMobile > div.livroPonto > div:nth-of-type(2)");
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = novoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
function showFolhasEnviadas() {
  document.querySelector('section#main > div.principal').innerHTML = '';
  var divPrincipal = criarElement({
    "attributes": {
      "class": "buscaFolhasImpressas"
    },
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Buscando Folhas de Ponto Enviadas",
    "parent": divPrincipal.id,
    "tag": "p"
  });
  var folhasImpressasForm = criarElement({
    "id": "folhasImpressasForm",
    "parent": divPrincipal.id,
    "tag": "form"
  });
  criarElement({
    "id": false,
    "textoHtml": "Mês de Referência",
    "parent": folhasImpressasForm.id,
    "tag": "label"
  });
  var hoje = new Date();
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "name": "referencia",
      "type": "month",
      "min": "2021-06",
      "value": hoje.getFullYear() + '-' + zeros(hoje.getMonth() + 1, 2)
    },
    "parent": folhasImpressasForm.id,
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Data do Envio (a partir de...)",
    "parent": folhasImpressasForm.id,
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "name": "dataEnvio",
      "type": "date",
      "min": "2021-07-01",
      "value": hoje.getFullYear() + '-' + zeros(hoje.getMonth() + 1, 2) + '-01'
    },
    "parent": folhasImpressasForm.id,
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Buscar",
    "attributes": {
      "class": "btn btn-success",
      "type": "submit"
    },
    "parent": folhasImpressasForm.id,
    "tag": "button"
  });
  var respostaPesquisa = criarElement({
    "attributes": {
      "style": "width:95%"
    },
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
  var exibirInformeRendimento = document.querySelector('form#folhasImpressasForm > button');
  exibirInformeRendimento === null || exibirInformeRendimento === void 0 ? void 0 : exibirInformeRendimento.addEventListener('click', function () {
    document.getElementById(respostaPesquisa.id).innerHTML = '';
    coringa('3', {
      "nomeFormulario": "folhasImpressasForm"
    }).then(function (retorno) {
      retorno = JSON.parse(retorno);
      if (retorno.length > 0) {
        criarElement({
          "attributes": {
            "class": "folhasEnviadas"
          },
          "parent": respostaPesquisa.id,
          "tag": "div"
        });
        criarElement({
          "attributes": {
            "class": "nome"
          },
          "textoHtml": "EMPREGADO",
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "attributes": {
            "class": "cpf"
          },
          "textoHtml": "CPF",
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "attributes": {
            "class": "envio"
          },
          "textoHtml": "DATA DO ENVIO",
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "attributes": {
            "class": "arquivo"
          },
          "textoHtml": "ARQUIVO",
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type'),
          "tag": "div"
        });
      }
      Object.entries(retorno).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        criarElement({
          "attributes": {
            "class": "folhasEnviadas"
          },
          "parent": respostaPesquisa.id,
          "tag": "div"
        });
        criarElement({
          "attributes": {
            "class": "nome"
          },
          "textoHtml": value.nomeEmpregado,
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "attributes": {
            "class": "cpf"
          },
          "textoHtml": value.cpf,
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "attributes": {
            "class": "envio"
          },
          "textoHtml": value.dataEnvio,
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "attributes": {
            "class": "arquivo"
          },
          "textoHtml": "",
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "attributes": {
            "href": "/documentacao/folhaPontoEnviadas/" + value.nomeArquivo,
            "download": ""
          },
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type > div.arquivo'),
          "tag": "a"
        });
        criarElement({
          "attributes": {
            "src": "https://grupofirstrh.com.br/controles_img/file_icon.webp"
          },
          "selector": true,
          "parent": document.querySelector('div.folhasEnviadas:last-of-type > div.arquivo > a'),
          "tag": "img"
        });
      });
    });
  });
}
var folhasEnviadas = document.querySelector('section#main > div.menu > div.livroPonto > div:nth-of-type(2) > div:nth-of-type(1)');
folhasEnviadas === null || folhasEnviadas === void 0 ? void 0 : folhasEnviadas.addEventListener('click', function () {
  showFolhasEnviadas();
});
var folhasEnviadasMobile = document.querySelector('div#menuSuspensoMobile > div.livroPonto > div:nth-of-type(2) > div');
folhasEnviadasMobile === null || folhasEnviadasMobile === void 0 ? void 0 : folhasEnviadasMobile.addEventListener('click', function () {
  showFolhasEnviadas();
  document.getElementById('toogle').click();
});

// ! PERFIL
var menuPerfil = document.querySelector('section#main > div.menu > div.perfil > div:nth-of-type(1)');
menuPerfil === null || menuPerfil === void 0 ? void 0 : menuPerfil.addEventListener('click', function () {
  var element = document.querySelector("section#main > div.menu > div.perfil > div:nth-of-type(2)");
  var NovoTamanho = (element.childNodes.length - 1) / 2 * tamanhoPadraoSubMenu;
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = NovoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
var menuPerfilMobile = document.querySelector('div#menuSuspensoMobile > div.perfil > div:nth-of-type(1)');
menuPerfilMobile === null || menuPerfilMobile === void 0 ? void 0 : menuPerfilMobile.addEventListener('click', function () {
  var quantosElementos = document.querySelector('div#menuSuspensoMobile > div.perfil > div:nth-of-type(2)').childElementCount;
  var novoTamanho = quantosElementos * tamanhoPadraoSubMenu + 5;
  var element = document.querySelector("div#menuSuspensoMobile > div.perfil > div:nth-of-type(2)");
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = novoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
function showPerfilSenha() {
  coringa('12').then(function (retorno) {
    var infoUser = JSON.parse(retorno);
    document.querySelector('section#main > div.principal').innerHTML = '';
    var divPrincipal = criarElement({
      "attributes": {
        "class": "alteracaoSenha"
      },
      "selector": true,
      "parent": document.querySelector('section#main > div.principal'),
      "tag": "div"
    });
    var divPrincipal = criarElement({
      "textoHtml": "Edição do Perfil",
      "parent": divPrincipal.id,
      "tag": "h2"
    });
    var alteracaoSenhaForm = criarElement({
      "id": "alteracaoSenhaForm",
      "parent": divPrincipal.id,
      "tag": "form"
    });
    criarElement({
      "id": false,
      "textoHtml": "Nome do Usuário",
      "parent": alteracaoSenhaForm.id,
      "tag": "label"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "form-control",
        "name": "nomeUsuario",
        "type": "text",
        "placeholder": "Nome do Usuário",
        "form-control": "caracteres8",
        "aria-label": "Nome do Usuário",
        "value": infoUser.nomeCompleto
      },
      "parent": alteracaoSenhaForm.id,
      "tag": "input"
    });
    criarElement({
      "id": false,
      "textoHtml": "Email do Usuário",
      "parent": alteracaoSenhaForm.id,
      "tag": "label"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "form-control",
        "name": "emailUsuario",
        "type": "email",
        "placeholder": "E-mail do Usuário",
        "form-control": "email",
        "aria-label": "E-mail do Usuário",
        "value": validaEmail(infoUser.email) ? infoUser.email : 'e-mail não informado'
      },
      "parent": alteracaoSenhaForm.id,
      "tag": "input"
    });
    criarElement({
      "id": false,
      "textoHtml": "Telefone do Usuário",
      "parent": alteracaoSenhaForm.id,
      "tag": "label"
    });
    criarElement({
      "id": "telefoneUsuario",
      "attributes": {
        "class": "form-control",
        "name": "telefoneUsuario",
        "type": "tel",
        "placeholder": "Telefone do Usuário",
        "form-control": "telefoneCelular",
        "aria-label": "Telefone do Usuário",
        "value": infoUser.telefones,
        "onkeyup": "formatacaoEspecifica(this.value,'telefone','telefoneUsuario')"
      },
      "parent": alteracaoSenhaForm.id,
      "tag": "input"
    });
    criarElement({
      "id": false,
      "textoHtml": "Nova Senha",
      "parent": alteracaoSenhaForm.id,
      "tag": "label"
    });
    criarElement({
      "id": "novaSenhaUsuario",
      "attributes": {
        "class": "form-control",
        "name": "novaSenha",
        "type": "password",
        "placeholder": "Nova senha",
        "aria-label": "Nova senha"
      },
      "parent": alteracaoSenhaForm.id,
      "tag": "input"
    });
    criarElement({
      "id": "alteraSenhaButton",
      "textoHtml": "Salvar alterações",
      "attributes": {
        "class": "btn btn-success",
        "type": "submit"
      },
      "parent": alteracaoSenhaForm.id,
      "tag": "button"
    });
    criarElement({
      "id": "respostaPadroes2",
      "attributes": {
        "style": "margin-top:10px;"
      },
      "parent": alteracaoSenhaForm.id,
      "tag": "div"
    });
    formatacaoEspecifica(infoUser.telefones, 'telefone', 'telefoneUsuario');
    var buttonEditsenha = document.getElementById('alteraSenhaButton');
    buttonEditsenha === null || buttonEditsenha === void 0 ? void 0 : buttonEditsenha.addEventListener('click', function () {
      coringa('9', {
        "nomeFormulario": alteracaoSenhaForm.id
      }).then(function (retorno) {
        if (retorno == 1) {
          informaSucesso('Alterações efetuadas com sucesso', 1800);
        }
      });
    });
  });
}
var menuPerfil_senha = document.querySelector('section#main > div.menu > div.perfil > div:nth-of-type(2) > div:nth-of-type(1)');
menuPerfil_senha === null || menuPerfil_senha === void 0 ? void 0 : menuPerfil_senha.addEventListener('click', function () {
  showPerfilSenha();
});
var menuPerfil_senhaMobile = document.querySelector('div#menuSuspensoMobile > div.perfil > div:nth-of-type(2) > div');
menuPerfil_senhaMobile === null || menuPerfil_senhaMobile === void 0 ? void 0 : menuPerfil_senhaMobile.addEventListener('click', function () {
  showPerfilSenha();
  document.getElementById('toogle').click();
});

// ! SAIR
var sair = document.querySelector('section#header > div:nth-of-type(3)');
sair === null || sair === void 0 ? void 0 : sair.addEventListener('click', function () {
  coringa('2', {}).then(function () {
    window.location = '../';
  });
});
var sairMobile = document.querySelector('div#menuSuspensoMobile > div:last-of-type');
sairMobile === null || sairMobile === void 0 ? void 0 : sairMobile.addEventListener('click', function () {
  coringa('2', {}).then(function () {
    window.location = '../';
  });
});

// ! NOTIFICACOES
function excluirNome(elemento) {
  var p1 = new Promise(function (resolve, reject) {
    changeAttributes({
      "selector": "button#" + elemento,
      "attributes": {
        "style": "display:flex; width: 270px;",
        "onclick": false
      },
      "addClass": ['nohand'],
      "htmlText": "pensebem"
    });
    resolve('');
  }).then(function () {
    var exclusaoElemento = JSON.stringify({
      "idUsuario": soNumeros(elemento)
    });
    setTimeout(function () {
      changeAttributes({
        "selector": "button#" + elemento,
        "attributes": {
          "style": "display:block;",
          "onclick": "coringa('14','" + exclusaoElemento + "')"
        },
        "removeClass": ['btn-danger', 'nohand'],
        "addClass": ['btn-warning'],
        "htmlText": "Confirmar exclusão"
      });
    }, 3500);
  });
  return;
}
window.addEventListener("load", function () {
  coringa('1', {}).then(function (nomeUsuario) {
    if (nomeUsuario != '') {
      nomeUsuario = JSON.parse(nomeUsuario);
      document.querySelector('section#header > div:nth-of-type(2) > div:nth-of-type(2)').innerHTML = UpperFirst(nomeUsuario);
    }
  }).then(function (retorno) {
    if (retorno != '') {
      changeAttributes({
        "selector": "section#header > div:nth-of-type(2) > div:nth-of-type(2)",
        "addClass": ['logado']
      });
    }
  }).then(function () {
    coringa('13', {}).then(function (retorno) {
      var notificacoes = JSON.parse(retorno);
      document.querySelector('section#header > div:nth-of-type(1) > span').innerHTML = zeros(notificacoes.length, 2);
    });
  });
});
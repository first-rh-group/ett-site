"use strict";

var _menuPerfilMobile, _menuPerfilMobile2;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var tamanhoPadraoSubMenu = 35;
var grupos = "Escolha, Políticas First RH Group, Documentação, Comunicados, Saúde, Cursos, Parcerias, Canal de Denúncias, Perguntas Frenquentes";
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
window.addEventListener('DOMContentLoaded', function (event) {
  // Adiciona a classe 'active' ao menu no carregamento da página
  var menu = document.getElementById('sideMenu');
  menu.classList.add('active');
  document.body.classList.add('with-menu');
});
document.getElementById('dropdownMenuButton').addEventListener('click', function () {
  var menu = document.getElementById('sideMenu');
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    document.body.classList.remove('with-menu');
  } else {
    menu.classList.add('active');
    document.body.classList.add('with-menu');
  }
});
var menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    // Remova a classe 'selected' de todos os itens do menu
    menuItems.forEach(function (item) {
      item.classList.remove('selected');
    });

    // Adicione a classe 'selected' ao item do menu clicado
    this.classList.add('selected');
  });
});
// ! FINANCEIRO
var menusFinanceiroMobile = document.querySelector('div#menuSuspensoMobile > div.financeiro > div:nth-of-type(1)');
menusFinanceiroMobile === null || menusFinanceiroMobile === void 0 ? void 0 : menusFinanceiroMobile.addEventListener('click', function () {
  var element = document.querySelector("div#menuSuspensoMobile > div.financeiro > div:nth-of-type(2)");
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = '75px';
  } else {
    element.style.height = '0px';
  }
});
var menusFinanceiro = document.querySelector('section#main > div.menu > div.financeiro > div:nth-of-type(1)');
menusFinanceiro === null || menusFinanceiro === void 0 ? void 0 : menusFinanceiro.addEventListener('click', function () {
  var element = document.querySelector("section#main > div.menu > div.financeiro > div:nth-of-type(2)");
  var NovoTamanho = element.childElementCount * tamanhoPadraoSubMenu + (element.childElementCount - 1 < 0 ? 0 : element.childElementCount - 1) * 1;
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = NovoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
function informeRendimentosContent() {
  document.querySelector('section#main > div.principal').innerHTML = '<h3>Aguarde...</h3>';
  coringa('5', {}).then(function (retorno) {
    document.querySelector('section#main > div.principal').innerHTML = '';
    try {
      retorno = JSON.parse(retorno);
    } catch (e) {
      console.error("A resposta não é um JSON válido: ", retorno);
      return;
    }
    retorno.informes.sort(function (a, b) {
      if (a.ANO === b.ANO) {
        return a.nomeEmpresa.localeCompare(b.nomeEmpresa);
      }
      return a.ANO.localeCompare(b.ANO);
    });
    var divPrincipal = criarElement({
      "attributes": {
        "class": "informeRendimento"
      },
      "selector": true,
      "parent": document.querySelector('section#main > div.principal'),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "textoHtml": "Escolha um Ano-Calendário disponível",
      "parent": divPrincipal.id,
      "tag": "p"
    });
    var informeRendimentosForm = criarElement({
      "id": "informeRendimentosForm",
      "parent": divPrincipal.id,
      "tag": "form"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "form-control",
        "name": "idInforme"
      },
      "parent": informeRendimentosForm.id,
      "tag": "select"
    });
    criarElement({
      "id": false,
      "textoHtml": "Buscar",
      "attributes": {
        "class": "btn btn-success"
      },
      "parent": informeRendimentosForm.id,
      "tag": "button"
    });
    var exibirInformeRendimento = document.querySelector('form#informeRendimentosForm > button');
    exibirInformeRendimento === null || exibirInformeRendimento === void 0 ? void 0 : exibirInformeRendimento.addEventListener('click', function () {
      var form = document.getElementById('informeRendimentosForm');
      form.addEventListener('submit', function (event) {
        if (event) {
          event.preventDefault();
        }
      }, false);
      if (document.querySelector('select[name=idInforme]').value == '2_2021' || document.querySelector('select[name=idInforme]').value == '1_2021') {
        coringa('6.1', {
          "empresa": document.querySelector('select[name=idInforme]').value
        }).then(function () {
          window.open('pdf/informeRendimentos_2022.php');
        });
      } else {
        coringa('6', {
          nomeFormulario: 'informeRendimentosForm'
        }).then(function () {
          window.open('pdf/informeRendimentos.php');
        });
      }
    });
    if (retorno["return"] == true) {
      for (var _i = 0, _Object$entries = Object.entries(retorno.informes); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        criarElement({
          id: false,
          attributes: {
            value: value.idInforme
          },
          textoHtml: "".concat(value.nomeEmpresa.split(' ', 2).join(' '), " - ").concat(value.ANO),
          selector: true,
          parent: document.querySelector("form#".concat(informeRendimentosForm.id, " select")),
          tag: "option"
        });
      }
    }
  });
}
var informeRendimentos = document.querySelector('section#main > div.menu > div.financeiro > div:nth-of-type(2) > div:nth-of-type(2)');
informeRendimentos === null || informeRendimentos === void 0 ? void 0 : informeRendimentos.addEventListener('click', function () {
  informeRendimentosContent();
});
var informeRendimentosMobile = document.querySelector('div#menuSuspensoMobile > div.financeiro > div:nth-of-type(2) > div:nth-of-type(2)');
informeRendimentosMobile === null || informeRendimentosMobile === void 0 ? void 0 : informeRendimentosMobile.addEventListener('click', function () {
  informeRendimentosContent();
  toogle.click();
});
function contraChequeContent() {
  document.querySelector('section#main > div.principal').innerHTML = '<h3>Aguarde...</h3>';
  coringa('2', {}).then(function (retorno) {
    document.querySelector('section#main > div.principal').innerHTML = '';
    try {
      retorno = JSON.parse(retorno);
    } catch (e) {
      console.error("A resposta não é um JSON válido: ", retorno);
      return;
    }
    var divPrincipal = criarElement({
      attributes: {
        "class": "contracheque"
      },
      selector: true,
      parent: document.querySelector('section#main > div.principal'),
      tag: "div"
    });
    criarElement({
      id: false,
      textoHtml: "Escolha um período disponível",
      parent: divPrincipal.id,
      tag: "p"
    });
    var contrachequeForm = criarElement({
      id: "contrachequeForm",
      parent: divPrincipal.id,
      tag: "form"
    });
    criarElement({
      id: false,
      attributes: {
        "class": "form-control",
        name: "periodo"
      },
      parent: contrachequeForm.id,
      tag: "select"
    });
    for (var _i2 = 0, _Object$entries2 = Object.entries(retorno); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        key = _Object$entries2$_i[0],
        value = _Object$entries2$_i[1];
      criarElement({
        id: false,
        attributes: {
          value: key
        },
        textoHtml: value,
        selector: true,
        parent: document.querySelector("form#".concat(contrachequeForm.id, " select")),
        tag: "option"
      });
    }
    criarElement({
      id: false,
      textoHtml: "Buscar",
      attributes: {
        "class": "btn btn-success"
      },
      parent: contrachequeForm.id,
      tag: "button"
    });
    var exibirFichaFinanceira = document.querySelector('form#contrachequeForm > button');
    exibirFichaFinanceira === null || exibirFichaFinanceira === void 0 ? void 0 : exibirFichaFinanceira.addEventListener('click', function () {
      coringa('3', {
        nomeFormulario: "contrachequeForm"
      }).then(function () {
        window.open('pdf/fichaFinanceira.php');
      });
    });
  });
}
var contraCheque = document.querySelector('section#main > div.menu > div.financeiro > div:nth-of-type(2) > div:nth-of-type(1)');
contraCheque === null || contraCheque === void 0 ? void 0 : contraCheque.addEventListener('click', function () {
  contraChequeContent();
});
var contraChequeMobile = document.querySelector('div#menuSuspensoMobile > div.financeiro > div:nth-of-type(2) > div:nth-of-type(1)');
contraChequeMobile === null || contraChequeMobile === void 0 ? void 0 : contraChequeMobile.addEventListener('click', function () {
  contraChequeContent();
  toogle.click();
});

// ! LIVRO PONTO
var menuLivroPontoMobile = document.querySelector('div#menuSuspensoMobile > div.livroPonto > div:nth-of-type(1)');
menuLivroPontoMobile === null || menuLivroPontoMobile === void 0 ? void 0 : menuLivroPontoMobile.addEventListener('click', function () {
  var element = document.querySelector("div#menuSuspensoMobile > div.livroPonto > div:nth-of-type(2)");
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = '75px';
  } else {
    element.style.height = '0px';
  }
});
var menuLivroPonto = document.querySelector('section#main > div.menu > div.livroPonto > div:nth-of-type(1)');
menuLivroPonto === null || menuLivroPonto === void 0 ? void 0 : menuLivroPonto.addEventListener('click', function () {
  var element = document.querySelector("section#main > div.menu > div.livroPonto > div:nth-of-type(2)");
  var NovoTamanho = element.childElementCount * tamanhoPadraoSubMenu;
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = NovoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
function impressaoLivroPontoContent() {
  document.querySelector('section#main > div.principal').innerHTML = '';
  /*
  const objetoPergunta = {
      "selectorTarget":"section#main > div.principal",
      "pergunta":"O QUE DEVO SABER?",
      "explicacoes":[
          'Ao final de cada mês, tire uma foto da folha de ponto e envie pelo link ao lado \'Enviar Folha de Ponto\'.',
          'Evite enviar a folha ponto por e-mail.',
          'Para sua conveniência, a partir de agora temos a folha de ponto eletrônica. Menos papel, mais agilidade e inviolável! Confira no link ao lado \'Ponto Eletrônico\'.'
      ],
  }
  oqueDevoSaber(objetoPergunta);
  */
  var divPrincipal = criarElement({
    "attributes": {
      "class": "folhaPonto"
    },
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Escolha o ANO e o MÊS para a impressão do formulário de Folha de Ponto",
    "parent": divPrincipal.id,
    "tag": "p"
  });
  var folhaPontoForm = criarElement({
    "id": "folhaPontoForm",
    "parent": divPrincipal.id,
    "tag": "form"
  });
  criarElement({
    "id": false,
    "textoHtml": "Ano",
    "parent": folhaPontoForm.id,
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "name": "ano"
    },
    "parent": folhaPontoForm.id,
    "tag": "select"
  });
  var hoje = new Date();
  criarElement({
    "id": false,
    "attributes": {
      "value": hoje.getFullYear() - 1
    },
    "textoHtml": hoje.getFullYear() - 1,
    "selector": true,
    "parent": document.querySelector('form#' + folhaPontoForm.id + ' select:nth-of-type(1)'),
    "tag": "option"
  });
  criarElement({
    "id": false,
    "attributes": {
      "value": hoje.getFullYear(),
      "selected": "selected"
    },
    "textoHtml": hoje.getFullYear(),
    "selector": true,
    "parent": document.querySelector('form#' + folhaPontoForm.id + ' select:nth-of-type(1)'),
    "tag": "option"
  });
  criarElement({
    "id": false,
    "attributes": {
      "value": hoje.getFullYear() + 1
    },
    "textoHtml": hoje.getFullYear() + 1,
    "selector": true,
    "parent": document.querySelector('form#' + folhaPontoForm.id + ' select:nth-of-type(1)'),
    "tag": "option"
  });
  criarElement({
    "id": false,
    "textoHtml": "Mês",
    "parent": folhaPontoForm.id,
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "name": "mes"
    },
    "parent": folhaPontoForm.id,
    "tag": "select"
  });
  for (var index = 1; index <= 12; index++) {
    var nomeMes = '';
    if (index == 1) {
      nomeMes = 'Janeiro';
    } else if (index == 2) {
      nomeMes = 'Fevereiro';
    } else if (index == 3) {
      nomeMes = 'Março';
    } else if (index == 4) {
      nomeMes = 'Abril';
    } else if (index == 5) {
      nomeMes = 'Maio';
    } else if (index == 6) {
      nomeMes = 'Junho';
    } else if (index == 7) {
      nomeMes = 'Julho';
    } else if (index == 8) {
      nomeMes = 'Agosto';
    } else if (index == 9) {
      nomeMes = 'Setembro';
    } else if (index == 10) {
      nomeMes = 'Outubro';
    } else if (index == 11) {
      nomeMes = 'Novembro';
    } else if (index == 12) {
      nomeMes = 'Dezembro';
    }
    if (hoje.getMonth() + 1 == index) {
      criarElement({
        "id": false,
        "attributes": {
          "value": index,
          "selected": true
        },
        "textoHtml": nomeMes,
        "selector": true,
        "parent": document.querySelector('form#' + folhaPontoForm.id + ' select:nth-of-type(2)'),
        "tag": "option"
      });
    } else {
      criarElement({
        "id": false,
        "attributes": {
          "value": index
        },
        "textoHtml": nomeMes,
        "selector": true,
        "parent": document.querySelector('form#' + folhaPontoForm.id + ' select:nth-of-type(2)'),
        "tag": "option"
      });
    }
  }
  criarElement({
    "id": false,
    "textoHtml": "Buscar",
    "attributes": {
      "class": "btn btn-success"
    },
    "parent": folhaPontoForm.id,
    "tag": "button"
  });
  var exibirInformeRendimento = document.querySelector('form#folhaPontoForm > button');
  exibirInformeRendimento === null || exibirInformeRendimento === void 0 ? void 0 : exibirInformeRendimento.addEventListener('click', function () {
    coringa('7', {
      "nomeFormulario": "folhaPontoForm"
    }).then(function () {
      window.open('pdf/folhaPonto.php');
    });
  });
}
var livroPonto = document.querySelector('section#main > div.menu > div.livroPonto > div:nth-of-type(2) > div:nth-of-type(1)');
livroPonto === null || livroPonto === void 0 ? void 0 : livroPonto.addEventListener('click', function () {
  impressaoLivroPontoContent();
});
var livroPontoMobile = document.querySelector('div#menuSuspensoMobile > div.livroPonto > div:nth-of-type(2) > div:nth-of-type(1)');
livroPontoMobile === null || livroPontoMobile === void 0 ? void 0 : livroPontoMobile.addEventListener('click', function () {
  impressaoLivroPontoContent();
  toogle.click();
});
function enviarFolhaContent() {
  document.querySelector('section#main > div.principal').innerHTML = '';
  var divPrincipal = criarElement({
    "attributes": {
      "class": "folhaPonto"
    },
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "attributes": {
      "style": "margin-bottom: 20px;"
    },
    "textoHtml": "Escolha o período relativo ao controle de ponto",
    "parent": divPrincipal.id,
    "tag": "p"
  });
  criarElement({
    "id": false,
    "textoHtml": "Período",
    "parent": divPrincipal.id,
    "tag": "label"
  });
  var select = criarElement({
    "id": "periodo",
    "attributes": {
      "class": "form-control",
      "name": "periodo",
      "style": "width:max-content;"
    },
    "parent": divPrincipal.id,
    "tag": "select"
  });
  var nomeMes;
  var hoje = new Date();
  var mesAtual = hoje.getMonth();
  var mesAtualSomado = mesAtual + 1;
  if (mesAtualSomado == 1) {
    nomeMes = 'Janeiro';
  } else if (mesAtualSomado == 2) {
    nomeMes = 'Fevereiro';
  } else if (mesAtualSomado == 3) {
    nomeMes = 'Março';
  } else if (mesAtualSomado == 4) {
    nomeMes = 'Abril';
  } else if (mesAtualSomado == 5) {
    nomeMes = 'Maio';
  } else if (mesAtualSomado == 6) {
    nomeMes = 'Junho';
  } else if (mesAtualSomado == 7) {
    nomeMes = 'Julho';
  } else if (mesAtualSomado == 8) {
    nomeMes = 'Agosto';
  } else if (mesAtualSomado == 9) {
    nomeMes = 'Setembro';
  } else if (mesAtualSomado == 10) {
    nomeMes = 'Outubro';
  } else if (mesAtualSomado == 11) {
    nomeMes = 'Novembro';
  } else if (mesAtualSomado == 12) {
    nomeMes = 'Dezembro';
  }
  criarElement({
    "id": false,
    "attributes": {
      "value": hoje.getFullYear() + "-" + zeros(mesAtualSomado, 2) + '-01'
    },
    "textoHtml": nomeMes + '\/' + hoje.getFullYear(),
    "parent": select.id,
    "tag": "option"
  });
  var mesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  mesAnterior.setMonth(hoje.getMonth() - 1);
  var mesAnteriorSomado = mesAnterior.getMonth() + 1;
  if (mesAnteriorSomado == 1) {
    nomeMes = 'Janeiro';
  } else if (mesAnteriorSomado == 2) {
    nomeMes = 'Fevereiro';
  } else if (mesAnteriorSomado == 3) {
    nomeMes = 'Março';
  } else if (mesAnteriorSomado == 4) {
    nomeMes = 'Abril';
  } else if (mesAnteriorSomado == 5) {
    nomeMes = 'Maio';
  } else if (mesAnteriorSomado == 6) {
    nomeMes = 'Junho';
  } else if (mesAnteriorSomado == 7) {
    nomeMes = 'Julho';
  } else if (mesAnteriorSomado == 8) {
    nomeMes = 'Agosto';
  } else if (mesAnteriorSomado == 9) {
    nomeMes = 'Setembro';
  } else if (mesAnteriorSomado == 10) {
    nomeMes = 'Outubro';
  } else if (mesAnteriorSomado == 11) {
    nomeMes = 'Novembro';
  } else if (mesAnteriorSomado == 12) {
    nomeMes = 'Dezembro';
  }
  criarElement({
    "id": false,
    "attributes": {
      "value": mesAnterior.getFullYear() + '-' + zeros(mesAnteriorSomado, 2) + '-01'
    },
    "textoHtml": nomeMes + '\/' + mesAnterior.getFullYear(),
    "parent": select.id,
    "tag": "option"
  });
  criarElement({
    "id": "folhaPontoUpload",
    "attributes": {
      "class": "form-control",
      "name": "periodo",
      "type": "file",
      "style": "margin-top:5px;width:max-content;"
    },
    "parent": divPrincipal.id,
    "tag": "input"
  });
  var EnviarFolhaButton = criarElement({
    "textoHtml": "Enviar Arquivo",
    "attributes": {
      "class": "btn btn-secondary"
    },
    "parent": divPrincipal.id,
    "tag": "button"
  });
  criarElement({
    "id": "sendFolhaProgressBar",
    "attributes": {
      "class": "bar"
    },
    "parent": divPrincipal.id,
    "tag": "div"
  });
  criarElement({
    "id": "pb",
    "attributes": {
      "class": "bar-fill"
    },
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' div.bar'),
    "tag": "span"
  });
  criarElement({
    "id": "pt",
    "attributes": {
      "class": "bar-fill-text"
    },
    "selector": true,
    "parent": document.querySelector('div#' + divPrincipal.id + ' span.bar-fill'),
    "tag": "span"
  });
  var inputUploadFolhaPonto = document.getElementById('folhaPontoUpload');
  inputUploadFolhaPonto === null || inputUploadFolhaPonto === void 0 ? void 0 : inputUploadFolhaPonto.addEventListener('change', function () {
    if (inputUploadFolhaPonto.files.length > 0) {
      changeAttributes({
        "selector": "button#" + EnviarFolhaButton.id,
        "removeClass": ['btn-secondary'],
        "addClass": ['btn-success'],
        "attributes": {
          "onclick": "coringa('8');"
        }
      });
    }
    if (inputUploadFolhaPonto.files.length == 0) {
      changeAttributes({
        "selector": "button#" + EnviarFolhaButton.id,
        "attributes": {
          "onclick": false
        },
        "removeClass": ['btn-success'],
        "addClass": ['btn-secondary']
      });
    }
  });
}
var enviarFolhaPonto = document.querySelector('section#main > div.menu > div.livroPonto > div:nth-of-type(2) > div:nth-of-type(2)');
enviarFolhaPonto === null || enviarFolhaPonto === void 0 ? void 0 : enviarFolhaPonto.addEventListener('click', function () {
  enviarFolhaContent();
});
var enviarFolhaPontoMobile = document.querySelector('div#menuSuspensoMobile > div.livroPonto > div:nth-of-type(2) > div:nth-of-type(2)');
enviarFolhaPontoMobile === null || enviarFolhaPontoMobile === void 0 ? void 0 : enviarFolhaPontoMobile.addEventListener('click', function () {
  enviarFolhaContent();
  toogle.click();
});

// ! DOCUMENTAÇÃO
var menuDocumentacao = document.querySelector('section#main > div.menu > div.documentacao > div:nth-of-type(1)');
function showDocumentacao() {
  var documentacao = [['Política de Gestão de Recursos Humanos Grupo FIRST', 'Política de Gestão de Recursos Humanos GRUPO FIRST.pdf'], ['Política de Treinamento e Desenvolvimento Grupo First', 'POLÍTICA DE TREINAMENTO E DESENVOLVIMENTO.pdf'], ['Parcerias First RH Group', 'Parcerias.jpeg'], ['Política de Recrutamento e Seleção Grupo First', 'Recrutamento e seleção do Grupo first rh.pdf'], ['Termo de Política de uso da Internet', 'Termo de Política de uso da Internet.pdf'], ['Dicas de como aumentar a qualidade e produtividade no trabalho', 'Qualidade.jpeg'], ['Comunicado Corona Vírus', 'coronavirus.pdf'], ['Comunicado aos Stakeholders', 'Comunicado Stakeholders.pdf'], ['Apoio Psicológico', 'Apoio psicologico.pdf']];
  document.querySelector('section#main > div.principal').innerHTML = '';
  var divPrincipal = criarElement({
    id: "documentacaoDiv",
    attributes: {
      "class": "documentacaoDiv"
    },
    selector: true,
    parent: document.querySelector('section#main > div.principal'),
    tag: "div"
  });
  documentacao.forEach(function (elemento) {
    criarElement({
      "id": false,
      "attributes": {
        "onclick": "funcaoGeral('3','documentacao/" + elemento[1] + "')"
      },
      "textoHtml": elemento[0],
      "parent": "documentacaoDiv",
      "tag": "div"
    });
  });
}
menuDocumentacao === null || menuDocumentacao === void 0 ? void 0 : menuDocumentacao.addEventListener('click', function () {
  showDocumentacao();
});
var menuPerfilMobile = document.querySelector('div#menuSuspensoMobile > div.documentacao > div:nth-of-type(1)');
(_menuPerfilMobile = menuPerfilMobile) === null || _menuPerfilMobile === void 0 ? void 0 : _menuPerfilMobile.addEventListener('click', function () {
  // console.log('show documentação');
});

// ! PERFIL
var menuPerfil = document.querySelector('section#main > div.menu > div.perfil > div:nth-of-type(1)');
menuPerfil === null || menuPerfil === void 0 ? void 0 : menuPerfil.addEventListener('click', function () {
  var element = document.querySelector("section#main > div.menu > div.perfil > div:nth-of-type(2)");
  if (element !== null) {
    var NovoTamanho = (element.childElementCount - 1) / 2 * tamanhoPadraoSubMenu;
    var ComputedHeight = getComputedStyle(element).height;
    if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
      element.style.height = NovoTamanho + 'px';
    } else {
      element.style.height = '0px';
    }
  }
});
var menuPerfilMobile = document.querySelector('div#menuSuspensoMobile > div.perfil > div:nth-of-type(1)');
(_menuPerfilMobile2 = menuPerfilMobile) === null || _menuPerfilMobile2 === void 0 ? void 0 : _menuPerfilMobile2.addEventListener('click', function () {
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
// ! DICAS
var menuDicas = document.querySelector('section#main > div.menu > div.dicas > div:nth-of-type(1)');
menuDicas === null || menuDicas === void 0 ? void 0 : menuDicas.addEventListener('click', function () {
  var element = document.querySelector("section#main > div.menu > div.dicas > div:nth-of-type(2)");
  var NovoTamanho = element.childElementCount * tamanhoPadraoSubMenu + (element.childElementCount - 1 < 0 ? 0 : element.childElementCount - 1) * 1;
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = NovoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
var menuDicasMobile = document.querySelector('div#menuSuspensoMobile > div.dicas > div:nth-of-type(1)');
menuDicasMobile === null || menuDicasMobile === void 0 ? void 0 : menuDicasMobile.addEventListener('click', function () {
  var quantosElementos = document.querySelector('div#menuSuspensoMobile > div.dicas > div:nth-of-type(2)').childElementCount;
  var novoTamanho = quantosElementos * tamanhoPadraoSubMenu + quantosElementos * 2 - 2;
  var element = document.querySelector("div#menuSuspensoMobile > div.dicas > div:nth-of-type(2)");
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = novoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
function showPerfilSenha() {
  coringa('9').then(function (retorno) {
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
      coringa('10', {
        "nomeFormulario": alteracaoSenhaForm.id
      }).then(function (retorno) {
        var retornado = JSON.parse(retorno);
        if (retornado.retorno == true) {
          informaSucesso('Alterações efetuadas com sucesso', 1800);
        } else {
          window.location = '#respostaPadroes2';
          alertErros({
            "selectorTarget": "div#respostaPadroes2",
            "erros": retornado.erros
          });
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
var sair = document.querySelector('section#header > div:nth-of-type(2)');
sair === null || sair === void 0 ? void 0 : sair.addEventListener('click', function () {
  coringa('4', {}).then(function () {
    window.location = '../';
  });
});
var sairMobile = document.querySelector('div#menuSuspensoMobile > div:last-of-type');
sairMobile === null || sairMobile === void 0 ? void 0 : sairMobile.addEventListener('click', function () {
  coringa('4', {}).then(function () {
    window.location = '../';
  });
});
window.addEventListener("load", function () {
  coringa('1', {}).then(function (retorno) {
    if (retorno != '') {
      retorno = JSON.parse(retorno);
      var elemento = document.querySelector('section#header > div:nth-of-type(1) > div:nth-of-type(1)');
      if (elemento) {
        elemento.innerHTML = UpperFirst(retorno.empregadorNome);
      }
      document.querySelector('section#header > div:nth-of-type(1) > div:nth-of-type(2)').innerHTML = UpperFirst(retorno.nomeFuncionario);
    }
  }).then(function (retorno) {
    if (retorno != '') {
      changeAttributes({
        "selector": "section#header > div:nth-of-type(1) > div:nth-of-type(2)",
        "addClass": ['logado']
      });
    }
  });
  grupos.split(', ').forEach(function (grupo, key) {
    if (key > 0) {
      criarElement({
        "id": false,
        "attributes": {
          "grupo": key
        },
        "textoHtml": grupo,
        "selector": true,
        "parent": document.querySelector('div.menu div.dicas > div:nth-of-type(2)'),
        "tag": "div"
      });
      criarElement({
        "id": false,
        "attributes": {
          "grupo": key
        },
        "textoHtml": grupo,
        "selector": true,
        "parent": document.querySelector("#menuSuspensoMobile > div.dicas > div:nth-of-type(2)"),
        "tag": "div"
      });
    }
  });
  coringa('13', {}).then(function (result) {
    if (result.trim().startsWith('{')) {
      result = JSON.parse(result);
    } else {
      console.error('A resposta não é um JSON válido:', result);
    }
    result.dicas.forEach(function (quantasDicas) {
      document.querySelector("div.menu > div.dicas > div:nth-of-type(2) > div:nth-of-type(".concat(quantasDicas.grupo, ")")).innerHTML += "<span>".concat(quantasDicas.quantos, "</span>");
      document.querySelector("#menuSuspensoMobile > div.dicas > div:nth-of-type(2) > div:nth-of-type(".concat(quantasDicas.grupo, ")")).innerHTML += "<span>".concat(quantasDicas.quantos, "</span>");
      document.querySelector("div.menu > div.dicas > div:nth-of-type(2) > div:nth-of-type(".concat(quantasDicas.grupo, ")")).addEventListener('click', function (e) {
        coringa('14', {
          "grupo": e.target.getAttribute('grupo')
        }).then(function (result) {
          var decoder = new TextDecoder('utf8');
          result = decoder.decode(new TextEncoder().encode(result));
          if (result.trim().startsWith('{')) {
            result = JSON.parse(result);
          } else {
            console.error('A resposta não é um JSON válido:', result);
          }
          if (result.dicas.length > 0) {
            document.querySelector("#main > div.principal").innerText = '';
            criarElement({
              "id": false,
              "textoHtml": "".concat(grupos.split(', ')[e.target.getAttribute('grupo')]),
              "selector": true,
              "parent": document.querySelector("#main > div.principal"),
              "tag": "h2"
            });
            result.dicas.forEach(function (dica) {
              criarElement({
                "id": false,
                "attributes": {
                  "class": "dicas"
                },
                "selector": true,
                "parent": document.querySelector("#main > div.principal"),
                "tag": "div"
              });
              criarElement({
                "id": false,
                "attributes": {
                  "class": "titulo"
                },
                "textoHtml": dica.titulo,
                "selector": true,
                "parent": document.querySelector("#main > div.principal > div:last-of-type"),
                "tag": "div"
              });
              criarElement({
                "id": false,
                "attributes": {
                  "class": "informacoes"
                },
                "textoHtml": dica.informacoes,
                "selector": true,
                "parent": document.querySelector("#main > div.principal > div:last-of-type"),
                "tag": "div"
              });
              if (dica.links.length > 0) {
                criarElement({
                  "id": false,
                  "attributes": {
                    "class": "links"
                  },
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type"),
                  "tag": "fieldset"
                });
                criarElement({
                  "id": false,
                  "textoHtml": "links",
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.links:last-of-type"),
                  "tag": "legend"
                });
                criarElement({
                  "id": false,
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.links:last-of-type"),
                  "tag": "div"
                });
                dica.links.forEach(function (link) {
                  criarElement({
                    "id": false,
                    "attributes": {
                      "href": link,
                      "target": "_blank"
                    },
                    "textoHtml": link,
                    "selector": true,
                    "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.links:last-of-type > div"),
                    "tag": "a"
                  });
                });
              }
              if (dica.arquivosVinculados.length > 0) {
                criarElement({
                  "id": false,
                  "attributes": {
                    "class": "arquivos"
                  },
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type"),
                  "tag": "fieldset"
                });
                criarElement({
                  "id": false,
                  "textoHtml": "Arquivos",
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.arquivos:last-of-type"),
                  "tag": "legend"
                });
                criarElement({
                  "id": false,
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.arquivos:last-of-type"),
                  "tag": "div"
                });
                dica.arquivosVinculados.forEach(function (arquivoVinculado) {
                  criarElement({
                    "id": false,
                    "attributes": {
                      "download": arquivoVinculado,
                      "target": "_blank",
                      "href": "documentacao/dicas/dica_".concat(dica.idDica, "/").concat(arquivoVinculado)
                    },
                    "textoHtml": arquivoVinculado,
                    "selector": true,
                    "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.arquivos:last-of-type > div"),
                    "tag": "a"
                  });
                });
              }
            });
          }
        });
      });
      document.querySelector("#menuSuspensoMobile > div.dicas > div:nth-of-type(2) > div:nth-of-type(".concat(quantasDicas.grupo, ")")).addEventListener('click', function (e) {
        coringa('14', {
          "grupo": e.target.getAttribute('grupo')
        }).then(function (result) {
          result = JSON.parse(result);
          if (result.dicas.length > 0) {
            document.querySelector("#main > div.principal").innerText = '';
            criarElement({
              "id": false,
              "textoHtml": "".concat(grupos.split(', ')[e.target.getAttribute('grupo')]),
              "selector": true,
              "parent": document.querySelector("#main > div.principal"),
              "tag": "h2"
            });
            result.dicas.forEach(function (dica) {
              criarElement({
                "id": false,
                "attributes": {
                  "class": "dicas"
                },
                "selector": true,
                "parent": document.querySelector("#main > div.principal"),
                "tag": "div"
              });
              criarElement({
                "id": false,
                "attributes": {
                  "class": "titulo"
                },
                "textoHtml": dica.titulo,
                "selector": true,
                "parent": document.querySelector("#main > div.principal > div:last-of-type"),
                "tag": "div"
              });
              criarElement({
                "id": false,
                "attributes": {
                  "class": "informacoes"
                },
                "textoHtml": dica.informacoes,
                "selector": true,
                "parent": document.querySelector("#main > div.principal > div:last-of-type"),
                "tag": "div"
              });
              if (dica.links.length > 0) {
                criarElement({
                  "id": false,
                  "attributes": {
                    "class": "links"
                  },
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type"),
                  "tag": "fieldset"
                });
                criarElement({
                  "id": false,
                  "textoHtml": "links",
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.links:last-of-type"),
                  "tag": "legend"
                });
                criarElement({
                  "id": false,
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.links:last-of-type"),
                  "tag": "div"
                });
                dica.links.forEach(function (link) {
                  criarElement({
                    "id": false,
                    "attributes": {
                      "href": link,
                      "target": "_blank"
                    },
                    "textoHtml": link,
                    "selector": true,
                    "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.links:last-of-type > div"),
                    "tag": "a"
                  });
                });
              }
              if (dica.arquivosVinculados.length > 0) {
                criarElement({
                  "id": false,
                  "attributes": {
                    "class": "arquivos"
                  },
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type"),
                  "tag": "fieldset"
                });
                criarElement({
                  "id": false,
                  "textoHtml": "Arquivos",
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.arquivos:last-of-type"),
                  "tag": "legend"
                });
                criarElement({
                  "id": false,
                  "selector": true,
                  "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.arquivos:last-of-type"),
                  "tag": "div"
                });
                dica.arquivosVinculados.forEach(function (arquivoVinculado) {
                  criarElement({
                    "id": false,
                    "attributes": {
                      "download": arquivoVinculado,
                      "target": "_blank",
                      "href": "documentacao/dicas/dica_".concat(dica.idDica, "/").concat(arquivoVinculado)
                    },
                    "textoHtml": arquivoVinculado,
                    "selector": true,
                    "parent": document.querySelector("#main > div.principal > div:last-of-type > fieldset.arquivos:last-of-type > div"),
                    "tag": "a"
                  });
                });
              }
            });
            document.querySelector("#toogle").click();
          }
        });
      });
    });
  });
});
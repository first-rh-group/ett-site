"use strict";
var lingua;
function geradorShares() {
  var _document$querySelect;
  (_document$querySelect = document.querySelector("div[data-share-button]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
  criarElement({
    "id": false,
    "attributes": {
      "data-share-button": true,
      "class": "shareContainer"
    },
    "selector": true,
    "parent": document.querySelector("body"),
    "tag": "div"
  });
  var redes = ['linkedin', 'facebook'];
  redes.forEach(function (rede) {
    criarElement({
      "id": false,
      "attributes": {
        "data-rede-social": rede
      },
      "selector": true,
      "parent": document.querySelector("div[data-share-button]"),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {},
      "selector": true,
      "parent": document.querySelector("div[data-share-button] div[data-rede-social=".concat(rede, "]")),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {},
      "selector": true,
      "parent": document.querySelector("div[data-share-button] div[data-rede-social=".concat(rede, "]")),
      "tag": "div"
    });
  });
  document.querySelector("div[data-rede-social=linkedin]").addEventListener('click', function () {
    window.open('https://www.linkedin.com/company/firstrhgroup/');
  });
  document.querySelector("div[data-rede-social=facebook]").addEventListener('click', function () {
    window.open('https://www.facebook.com/firstrhgroup/');
  });
}
function gerarRodape() {
  criarElement({
    "id": "podemosAjudar",
    "selector": true,
    "parent": document.querySelector("section#container"),
    "tag": "section"
  });
  var texto = "Como podemos te ajudar?";
  if (window.location.href.endsWith('solucoes.html')) {
    texto = "Procura apoio em alguma dessas áreas?";
  }
  if (window.location.href.endsWith('faq.html')) {
    texto = "Tem alguma outra dúvida que não foi abordada aqui?";
  }
  criarElement({
    "id": false,
    "textoHtml": texto,
    "parent": "podemosAjudar",
    "tag": "div"
  });

  /* criarElement({
  	"id": false,
  	"textoHtml": "Como podemos te ajudar?",
  	"parent": "podemosAjudar",
  	"tag": "div"
  }); */
  criarElement({
    "id": false,
    "parent": "podemosAjudar",
    "tag": "div"
  });
  criarElement({
    "id": false,
    "attributes": {
      "target": "_blank",
      //"href": "https://wa.me/5521997969897"
    },
    "selector": true,
    "parent": document.querySelector("section#podemosAjudar > div:last-of-type"),
    "tag": "a"
  });
  
  function criarElemento(options) {
    var element = document.createElement(options.tag);
    element.textContent = options.textoHtml;
    options.parent.appendChild(element);
    if (options.tag === "button") {
      element.style.margin = "0 15px";
      element.style.color = "black";
      element.parentNode.style.display = "flex";
      element.parentNode.style.justifyContent = "space-between";
      element.parentNode.style.display = "grid";
      element.parentNode.style.gridTemplateColumns = "repeat(2, 1fr)";
      element.parentNode.style.gap = "15px";
      if (options.href) {
        element.addEventListener('click', function() {
          window.location.href = options.href;
        });
      }
    }
  }
   criarElemento({
    "id": false,
    "textoHtml": "Conheça as nossas soluções!",
    "selector": true,
    "parent": document.querySelector("section#podemosAjudar a"),
    "tag": "button",
    "href": "https://sitefirst.dtcx.com.br/solucoes.html"
  });
  
  criarElemento({
    "id": false,
    "textoHtml": "Saiba mais sobre nossas vagas!",
    "selector": true,
    "parent": document.querySelector("section#podemosAjudar a"),
    "tag": "button",
    "href": "https://sitefirst.dtcx.com.br/candidato.html"
  });
  if (window.location.href.endsWith('solucoes.html')) {
    document.querySelectorAll("section#podemosAjudar a button").forEach(function (button) {
      button.remove();
    });
    criarElemento({
      "id": false,
      "textoHtml": "Entre em contato com o nosso especialista",
      "selector": true,
      "parent": document.querySelector("section#podemosAjudar a"),
      "tag": "button",
      "href": "https://wa.me/5521997969897"
    });
    var container = document.querySelector("section#podemosAjudar a");
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.webkitTextFillColor = "black";
  }
  if (window.location.href.endsWith('candidato.html')) {
    document.querySelectorAll("section#podemosAjudar a button").forEach(function (button) {
      button.remove();
    });
    criarElemento({
      "id": false,
      "textoHtml": "Entre em contato!",
      "selector": true,
      "parent": document.querySelector("section#podemosAjudar a"),
      "tag": "button",
      "href": "https://wa.me/5521997969897"
    });
    document.querySelectorAll("section#podemosAjudar a button").forEach(function (button) {
      button.style.color = "black";
      button.style.webkitTextFillColor = "black";
    });
    var _container = document.querySelector("section#podemosAjudar a");
    _container.style.display = "flex";
    _container.style.justifyContent = "center";
    _container.style.webkitTextFillColor = "black";
  }
  if (window.location.href.endsWith('empresa.html')) {
    var botoes = document.querySelectorAll("section#podemosAjudar a button");
    botoes.forEach(function (botao) {
      if (botao.innerText === 'Conheça as nossas soluções!' || botao.innerText === 'Saiba mais sobre nossas vagas!') {
        botao.remove();
      }
    });
  }
  if (window.location.href.endsWith('empresa.html')) {
    var _divs = document.querySelectorAll("section#podemosAjudar div");
    _divs.forEach(function (div) {
      if (div.innerText === 'Como podemos te ajudar?') {
        div.remove();
      }
    });
  }
  if (window.location.href.endsWith('faq.html')) {
    document.querySelectorAll("section#podemosAjudar a button").forEach(function (button) {
      button.remove();
    });
    criarElemento({
      "id": false,
      "textoHtml": "Entre em contato!",
      "selector": true,
      "parent": document.querySelector("section#podemosAjudar a"),
      "tag": "button",
      "href": "https://wa.me/5521997969897"
    });
    var _container2 = document.querySelector("section#podemosAjudar a");
    _container2.style.display = "flex";
    _container2.style.justifyContent = "center";
  }
  criarElement({
    "id": "rodape",
    "attributes": {
      "class": "container"
    },
    "selector": true,
    "parent": document.querySelector("section#container"),
    "tag": "section"
  });
  criarElement({
    "id": false,
    "parent": "rodape",
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "FALE CONOSCO!",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div",
    "style": {
      "fontWeight": "bold",
      "fontSize": "clamp(17px, 10vw, 19px)",
      "marginBottom": "clamp(10px, 2vh, 13px)"
    }
  });
  let marginLeft;
  if (window.innerWidth === 1920) {
      marginLeft = "-18px";
  } else if (window.innerWidth === 1366) {
      marginLeft = "-14px";
  } else {
      marginLeft = "-5px";
  }
  
  criarElement({
    "id": false,
    "textoHtml": `<img class="icon-rodape" src='/projeto_ett/new_img/ICON RODAPE 1.png' alt='Ícone' style='height: 1.4em;'><span style='margin-left: ${marginLeft}; font-size: 17px;'><a href='mailto:contato@firstrh.com.br'>contato@firstrh.com.br</a></span>`,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
});
  let marginLeft2;
  if (window.innerWidth === 1920 || window.innerWidth === 1366) {
      marginLeft2 = "3px";
  } else {
      marginLeft2 = "0px";
  }
  
  criarElement({
    "id": false,
    "textoHtml": `<img src='/projeto_ett/new_img/ICON RODAPE 2.png' alt='Ícone' style='margin-right: 10px; height: 1.8em;'><span style='margin-left: ${marginLeft2}; font-size: 17px;'><a href='https://api.whatsapp.com/send/?phone=5521997969897&text&type=phone_number&app_absent=0'>+55 21 99796-9897</a></span>`,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
});
  let marginLeft3;
  if (window.innerWidth === 1920) {
      marginLeft3 = "2px";
  } else {
      marginLeft3 = "0px";
  }
  
  criarElement({
    "id": false,
    "textoHtml": `<img src='/projeto_ett/new_img/ICON RODAPE 3.png' alt='Ícone' style='margin-right: 10px; height: 1.8em;'><span style='margin-left: ${marginLeft3}; font-size: 17px;'><a href='https://br.linkedin.com/company/firstrhgroup'>@FirstRHGroup</a></span>`,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
});
criarElement({
  "id": false,
  "textoHtml": "<img src='/projeto_ett/new_img/ICON RODAPE 4.png' alt='Ícone' style='margin-right: 13px; height: 1.8em;'><a href='https://www.facebook.com/firstrhgroup/?locale=pt_BR' style='font-size: 17px;'>First RH Group</a>",
  "selector": true,
  "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
  "tag": "div"
});
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "attributes": {
      "href": "mailto:contato@firstrh.com.br"
    },
    // "textoHtml": "contato@firstrh.com.br",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "MATRIZ",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Av. das Américas, 500, bloco 12",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Sala 208 - Cond. Downtown",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Barra da Tijuca",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Rio de Janeiro - RJ",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "CEP 22640-100",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Tel +55 21 2138-3700",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "attributes": {
      "target": "_blank",
      "href": "https://g.page/first-rh-group?share"
    },
    "textoHtml": "Google Maps",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": "fechamento",
    "selector": true,
    "parent": document.querySelector("section#container"),
    "tag": "section"
  });
  criarElement({
    "id": false,
    "textoHtml": "FIRST RH GROUP &copy; 1997-2024.",
    "parent": "fechamento",
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Todos os direitos reservados.",
    "parent": "fechamento",
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Desenvolvido por Data Campos Sistemas",
    "parent": "fechamento",
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "FILIAL RESENDE",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Av. Marechal Castelo Branco, 355",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Sala 902 - Jardim Tropical",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Resende - RJ",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "CEP 27541-220",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Tel +55 21 2138-3700",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "attributes": {
      "target": "_blank",
      "href": "https://goo.gl/maps/fxruX1tuZhbc9PEX9"
    },
    "textoHtml": "Google Maps",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "NAVEGUE NO SITE",
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Topo",
    "attributes": {
      "top": ""
    },
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Home",
    "attributes": {
      "home": ""
    },
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "O grupo",
    "attributes": {
      "empresa": ""
    },
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Soluções",
    "attributes": {
      "empresa": "",
      "href": "http://localhost:8080/projeto_ett/solucoes.html"
    },
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Oportunidades",
    "attributes": {
      "candidato": "",
      "href": "http://localhost:8080/projeto_ett/candidato.html"
    },
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Dúvidas Frequentes",
    "attributes": {
      "duvidas": "",
      "href": "http://localhost:8080/projeto_ett/faq.html"
    },
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type"),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Portal",
    "attributes": {
      "href": "https://portal.grupofirstrh.com.br"
    },
    "selector": true,
    "parent": document.querySelector("section#rodape > div:last-of-type > div:last-of-type > div:last-of-type"),
    "tag": "a"
  });
  criarElement({
    "id": false,
    "parent": "rodape",
    "tag": "div"
  });
  /* criarElement({
  	"id": false,
  	"textoHtml": "A First RH Group segue todas as diretrizes e medidas de segurança da (Lei Geral de Proteção de Dados Pessoais)",
  	"attributes": {
  		"target": "_blank",
  		"href": "/documentacao/LGPD-First.pdf",
  	},
  	"selector": true,
  	"parent": document.querySelector("section#rodape > div:last-of-type"),
  	"tag": "a"
  }); */
  var div1 = document.createElement('div');
  div1.style.textAlign = 'center';
  div1.style.lineHeight = '1.5';
  document.querySelector("section#rodape").appendChild(div1);
  criarElement({
    "id": false,
    "textoHtml": "A First RH Group segue todas as diretrizes e medidas de segurança da (Lei Geral de Proteção de Dados Pessoais)",
    "attributes": {
      "target": "_blank",
      "href": "/documentacao/LGPD-First.pdf"
    },
    "selector": true,
    "parent": div1,
    "tag": "a"
  });
  var div2 = document.createElement('div');
  div2.style.textAlign = 'center';
  div2.style.lineHeight = '1.5';
  document.querySelector("section#rodape").appendChild(div2);
  criarElement({
    "id": false,
    "textoHtml": "Declaração de Igualdade Salarial e de Critérios Remuneratórios",
    "attributes": {
      "target": "_blank",
      "href": "/documentacao/declaracao_igualdade_salarial_1semestre2024.pdf"
    },
    "selector": true,
    "parent": div2,
    "tag": "a"
  });
}
var divs = document.querySelectorAll("#podemosAjudar > div:nth-of-type(2) > div:nth-child(odd)");
divs.forEach(function (div) {
  var question = div.querySelector('.question');
  var answer = div.querySelector('.answer');
  div.addEventListener('mouseenter', function () {
    question.style.display = 'none';
    answer.style.display = 'block';
  });
  div.addEventListener('mouseleave', function () {
    question.style.display = 'block';
    answer.style.display = 'none';
  });
});
/* document.addEventListener('DOMContentLoaded', (event) => {
    const botaoEmpresa = document.getElementById('botaoEmpresa');
    const botaoCandidato = document.getElementById('botaoCandidato');

    const perguntaEmpresa = botaoEmpresa.querySelector('.question');
    const respostaEmpresa = botaoEmpresa.querySelector('.answer');

    const perguntaCandidato = botaoCandidato.querySelector('.question');
    const respostaCandidato = botaoCandidato.querySelector('.answer');

    botaoEmpresa.addEventListener('mouseover', () => {
        perguntaEmpresa.style.display = 'none';
        respostaEmpresa.style.display = 'block';
    });

    botaoEmpresa.addEventListener('mouseout', () => {
        perguntaEmpresa.style.display = 'block';
        respostaEmpresa.style.display = 'none';
    });

    botaoCandidato.addEventListener('mouseover', () => {
        perguntaCandidato.style.display = 'none';
        respostaCandidato.style.display = 'block';
    });

    botaoCandidato.addEventListener('mouseout', () => {
        perguntaCandidato.style.display = 'block';
        respostaCandidato.style.display = 'none';
    });
}); */
/* document.getElementById('botaoEmpresa').addEventListener('mouseover', function() {
    this.querySelector('.question').style.display = 'none';
    this.querySelector('.answer').style.display = 'block';
});
 document.getElementById('botaoEmpresa').addEventListener('mouseout', function() {
    this.querySelector('.question').style.display = 'block';
    this.querySelector('.answer').style.display = 'none';
});
 document.getElementById('botaoCandidato').addEventListener('mouseover', function() {
    this.querySelector('.question').style.display = 'none';
    this.querySelector('.answer').style.display = 'block';
});
 document.getElementById('botaoCandidato').addEventListener('mouseout', function() {
    this.querySelector('.question').style.display = 'block';
    this.querySelector('.answer').style.display = 'none';
}); */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function trocaLingua(idioma) {
  var flagMobile = document.getElementById('flag-mobile');
  var flag = document.getElementById('flag');
  flag.classList.toggle("us-flag");
  flag.classList.toggle("br-flag");
  flagMobile.classList.toggle("us-flag");
  flagMobile.classList.toggle("br-flag");
  if (idioma == 'us') {
    flag.innerHTML = 'PT';
    flagMobile.innerHTML = 'Português';
    lingua = english.index;
  } else {
    flagMobile.innerHTML = 'English';
    flag.innerHTML = 'EN';
    lingua = portugues.index;
  }
  // MENU
  var empresaTop = document.querySelector("#menuSuspenso > a[empresa]");
  if (empresaTop != null) {
    empresaTop.innerHTML = lingua.header.empresa;
  }
  var solucoesTop = document.querySelector("#menuSuspenso > a[href='./solucoes.html']");
  if (solucoesTop != null) {
    solucoesTop.innerHTML = lingua.header.solucoes;
  }
  var candidatoTop = document.querySelector("#menuSuspenso > a[candidato]");
  if (candidatoTop != null) {
    candidatoTop.innerHTML = lingua.header.candidato;
  }
  var faqTop = document.querySelector("#menuSuspenso > a[href='./faq.html']");
  if (faqTop != null) {
    faqTop.innerHTML = lingua.header.faq;
  }
  var contatoTop = document.querySelector("#menuSuspenso > a[contato]");
  if (contatoTop != null) {
    contatoTop.innerHTML = lingua.header.contato;
  }
  var portalTop = document.querySelector("#menuSuspenso > a[portal]");
  if (portalTop != null) {
    portalTop.innerHTML = lingua.header.portal;
  }
  var empresaTopMobile = document.querySelector("#menuSuspensoMobile > a[empresa]");
  if (empresaTopMobile != null) {
    empresaTopMobile.innerHTML = lingua.header.empresa;
  }
  var candidatoTopMobile = document.querySelector("#menuSuspensoMobile > a[candidato]");
  if (candidatoTopMobile != null) {
    candidatoTopMobile.innerHTML = lingua.header.candidato;
  }
  var duvidasTopMobile = document.querySelector("#menuSuspensoMobile > a[duvidas]");
  if (duvidasTopMobile != null) {
    duvidasTopMobile.innerHTML = lingua.header.faq;
  }
  var contatoTopMobile = document.querySelector("#menuSuspensoMobile > a[contato]");
  if (contatoTopMobile != null) {
    contatoTopMobile.innerHTML = lingua.header.contato;
  }
  var portalTopMobile = document.querySelector("#menuSuspensoMobile > a[portal]");
  if (portalTopMobile != null) {
    portalTopMobile.innerHTML = lingua.header.portal;
  }

// Aplique a tradução ao corpo do documento
/*let corpo = document.querySelector('section #inicial > section.main.container');
corpo.querySelectorAll('div').forEach((div, index) => {
  // Certifique-se de que existe uma tradução para este elemento
  if (index < lingua.main.length) {
    div.textContent = lingua.main[index];
  }
});

// Aplique a tradução ao botão
let botao = document.querySelector('#inicial > section.main.container > a > button');
botao.textContent = lingua.main[lingua.main.length - 1];

// Aplique a tradução para a seção 'procuroVagas'
let procuroVagas = document.querySelector('section #procuroVagas');

// Traduzir o texto acima dos botões
let textoAcima = procuroVagas.querySelector('div:nth-child(1)');
if (typeof lingua.procuroVagas[0] === 'string') {
  textoAcima.innerHTML = lingua.procuroVagas[0];
}

// Traduzir o texto dos botões
let botoes2 = [procuroVagas.querySelector('div:nth-child(2) > div:nth-child(1)'), procuroVagas.querySelector('div:nth-child(2) > div:nth-child(3)')];
botoes2.forEach((botao, index) => {
  if (index < lingua.procuroVagas.length - 1 && typeof lingua.procuroVagas[index + 1] !== 'string') {
    botao.textContent = lingua.procuroVagas[index + 1].fora;

    botao.addEventListener('mouseover', () => {
      botao.textContent = lingua.procuroVagas[index + 1].dentro;
    });

    botao.addEventListener('mouseout', () => {
      botao.textContent = lingua.procuroVagas[index + 1].fora;
    });
  }
});

    // Aplique a tradução para a seção 'solucoesHumanas'
    let solucoesHumanas = document.querySelector('#solucoesHumanas');
    solucoesHumanas.querySelectorAll('div').forEach((div, index) => {
      if (index < lingua.solucoesHumanas.length) {
        div.innerHTML = lingua.solucoesHumanas[index];
      }
    });

// Aplique a tradução para a seção 'pqFirst'
let pqFirst = document.querySelector('#pqFirst');

// Traduza o texto "Nossos diferenciais"
let titulo1 = pqFirst.querySelector('div:nth-child(1)');
if (titulo1 && lingua.pqFirst.length > 0) {
  titulo1.innerText = lingua.pqFirst[0]; // Use o primeiro elemento da matriz para o título
}

let pqFirstDivs = document.querySelectorAll('#pqFirst > div:nth-child(2) > div > div:nth-child(2)');

pqFirstDivs.forEach((div, index) => {
  // Ajuste o índice para corresponder à matriz lingua.pqFirst
  let adjustedIndex = index + 1; // Comece a partir do segundo elemento da matriz
  if (adjustedIndex < lingua.pqFirst.length) {
    // Aplique a tradução
    div.innerText = lingua.pqFirst[adjustedIndex];
  }
});

        // Aplique a tradução para a seção 'entendaMais'
    let entendaMais = document.querySelector('#entendaMais');
    entendaMais.querySelectorAll('div').forEach((div, index) => {
      if (index < lingua.entendaMais.length) {
        div.innerHTML = lingua.entendaMais[index];
      }
    });

    // Aplique a tradução para o botão na seção 'entendaMais'
    let entendaMaisButton = entendaMais.querySelector('button');
    if (lingua.entendaMais.length > entendaMais.querySelectorAll('div').length) {
      entendaMaisButton.innerHTML = lingua.entendaMais[entendaMais.querySelectorAll('div').length];
    }

// Aplique a tradução para a seção 'numeroFirstGroup'
let numeroFirstGroup = document.querySelector('#numeroFirstGroup'); */

// Traduza o texto "Nossa história em números"
let titulo = numeroFirstGroup.querySelector('div:nth-child(1)');
if (titulo && lingua.numeroFirstGroup.length > 0) {
  titulo.innerText = lingua.numeroFirstGroup[0]; // Use o primeiro elemento da matriz para o título
}

let numeroFirstGroupDivs = document.querySelectorAll('#numeroFirstGroup > div:nth-child(2) > div > div:nth-child(2)');

numeroFirstGroupDivs.forEach((div, index) => {
  // Ajuste o índice para corresponder à matriz lingua.numeroFirstGroup
  let adjustedIndex = index + 1; // Comece a partir do segundo elemento da matriz
  if (adjustedIndex < lingua.numeroFirstGroup.length) {
    // Aplique a tradução
    div.innerText = lingua.numeroFirstGroup[adjustedIndex];
  }
});

// Aplique a tradução para a seção 'podemosAjudar'
let podemosAjudar = document.querySelector('#podemosAjudar');

// Aplique a tradução para a seção 'rodape'
let rodape = document.querySelector('#rodape');

// Traduza os itens do menu 'navegue'
let navegueItems = rodape.querySelectorAll('div:nth-child(1) > div:nth-child(4) > a');
navegueItems.forEach((item, index) => {
  // Ajuste o índice para corresponder à matriz lingua.navegue
  let adjustedIndex = index;
  if (adjustedIndex < lingua.navegue.length) {
    // Aplique a tradução
    item.innerText = lingua.navegue[adjustedIndex];
  }
});

// Traduza o título
let tituloPodemosAjudar = podemosAjudar.querySelector('div:nth-child(1)');
if (tituloPodemosAjudar && lingua.podemosAjudar.length > 0) {
  tituloPodemosAjudar.innerText = lingua.podemosAjudar[0]; // Use o primeiro elemento da matriz para o título
}

// Traduza os botões
let botoes = podemosAjudar.querySelectorAll('button');
botoes.forEach((botao, index) => {
  // Ajuste o índice para corresponder à matriz lingua.podemosAjudar
  let adjustedIndex = index + 1;
  if (adjustedIndex < lingua.podemosAjudar.length) {
    botao.innerText = lingua.podemosAjudar[adjustedIndex];
  }
});


// Selecione os elementos que você deseja traduzir
let divsHistoria = document.querySelectorAll('.historia > div');
let botaoHistoria = document.querySelector('.historia button');

// Aplique a tradução para cada div
divsHistoria.forEach((div, index) => {
  // Ajuste o índice para corresponder à matriz lingua.geral
  let adjustedIndex = index;
  if (adjustedIndex < lingua.geral.length) {
    // Aplique a tradução
    div.innerText = lingua.geral[adjustedIndex];
  }
});

// Aplique a tradução para o botão
if (lingua.geral.length > divsHistoria.length) {
  botaoHistoria.innerText = lingua.geral[divsHistoria.length];
} 

// PÁGINA EMPRESA.HTML

// Aplique a tradução para a seção 'empresa'
let empresa = document.querySelector('#empresa');

// Traduza a seção 'geral'
let geral = empresa.querySelector('.geral');
if (geral && lingua.empresa.geral.length > 0) {
  geral.innerText = lingua.empresa.geral[0];
}

// Traduza a seção 'first'
let first = empresa.querySelector('.first');
if (first && lingua.empresa.first.length > 0) {
  first.innerText = lingua.empresa.first.join(' ');
}

// Traduza a seção 'shift'
let shift = empresa.querySelector('.shift');
if (shift && lingua.empresa.shift.length > 0) {
  shift.innerText = lingua.empresa.shift.join(' ');
}

// Traduza a seção 'recruit'
let recruit = empresa.querySelector('.recruit');
if (recruit && lingua.empresa.recruit.length > 0) {
  recruit.innerText = lingua.empresa.recruit.join(' ');
}

// Traduza a seção 'procurandoApoio'
let procurandoApoio = empresa.querySelector('.procurandoApoio');
if (procurandoApoio && lingua.empresa.procurandoApoio.length > 0) {
  procurandoApoio.innerText = lingua.empresa.procurandoApoio.join(' ');
}

// Traduza a seção 'valores'
let valores = empresa.querySelector('.valores');
if (valores && lingua.empresa.valores.length > 0) {
  valores.innerText = lingua.empresa.valores.join(' ');
}

// Traduza a seção 'consultores'
let consultores = empresa.querySelector('.consultores');
if (consultores && lingua.empresa.consultores.length > 0) {
  consultores.innerText = lingua.empresa.consultores.join(' ');
}

// Traduza a seção 'podemosAjudar'
let podemosAjudarEmpresa = empresa.querySelector('.podemosAjudar');
if (podemosAjudarEmpresa && lingua.empresa.podemosAjudarEmpresa.length > 0) {
  podemosAjudar.innerText = lingua.empresa.podemosAjudarEmpresa.join(' ');
}
  // RODAPE
  var elemento1 = document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)');
  if (elemento1) elemento1.innerHTML = lingua.rodape[0];
  var elemento2 = document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1)');
  if (elemento2) elemento2.innerHTML = lingua.rodape[1];
  var elemento3 = document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1)');
  if (elemento3) elemento3.innerHTML = lingua.rodape[2];
  var elemento4 = document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) a');
  if (elemento4) elemento4.innerHTML = lingua.navegue[0];
  var elemento5 = document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(4) a');
  if (elemento5) elemento5.innerHTML = lingua.navegue[1];
  var elemento6 = document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(5) a');
  if (elemento6) elemento6.innerHTML = lingua.navegue[2];
  var elemento7 = document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(6) a');
  if (elemento7) elemento7.innerHTML = lingua.navegue[4];
  var elemento8 = document.querySelector("#rodape > div:nth-child(2) > a");
  if (elemento8) elemento8.innerHTML = lingua.lgpd;
  if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
    if (idioma == 'us') {
      lingua = english.index;
    } else {
      lingua = portugues.index;
    }
    document.querySelector('section.main div:nth-of-type(1)').innerHTML = lingua.main[0];
    document.querySelector('section.main div:nth-of-type(2)').innerHTML = lingua.main[1];
    document.querySelector('section.main div:nth-of-type(3)').innerHTML = lingua.main[2];
    document.querySelector('section.main div:nth-of-type(4)').innerHTML = lingua.main[3];
    document.querySelector('section.main div:nth-of-type(5)').innerHTML = lingua.main[4];
    document.querySelector('section.main button:nth-of-type(1)').innerHTML = lingua.main[5];
    document.querySelector("#solucoesHumanas > div:nth-child(1)").innerHTML = lingua.solucoesHumanas[0];
    document.querySelector("#solucoesHumanas > div:nth-child(2)").innerHTML = lingua.solucoesHumanas[1];
    document.querySelector('section#procuroVagas > div:nth-of-type(1)').innerHTML = lingua.procuroVagas[0];
    document.querySelector('section#procuroVagas > div:nth-of-type(2) > div:nth-of-type(1) > p').innerHTML = lingua.procuroVagas[1];
    document.querySelector('section#procuroVagas > div:nth-of-type(2) > div:nth-of-type(1) > a').innerHTML = "Conheça as nossas soluções!";
    document.querySelector('section#procuroVagas > div:nth-of-type(2) > div:nth-of-type(3) > p').innerHTML = lingua.procuroVagas[2];
    document.querySelector('section#procuroVagas > div:nth-of-type(2) > div:nth-of-type(3) > a').innerHTML = "Saiba mais sobre nossas vagas!";
    var elemento = document.querySelector('section#procuroVagas > div:nth-of-type(1)');
    console.log(elemento); // Deve mostrar o elemento no console
    elemento.innerHTML = lingua.procuroVagas[0];
    console.log(elemento.innerHTML); // Deve mostrar a tradução no console

    document.querySelector('section#pqFirst > div:nth-of-type(1)').innerHTML = lingua.pqFirst[0];
    document.querySelector('section#pqFirst > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)').innerHTML = lingua.pqFirst[1];
    document.querySelector('section#pqFirst > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)').innerHTML = lingua.pqFirst[2];
    document.querySelector('section#pqFirst > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2)').innerHTML = lingua.pqFirst[3];
    document.querySelector('section#pqFirst > div:nth-of-type(2) > div:nth-of-type(4) > div:nth-of-type(2)').innerHTML = lingua.pqFirst[4];
    document.querySelector('section#pqFirst > div:nth-of-type(2) > div:nth-of-type(5) > div:nth-of-type(2)').innerHTML = lingua.pqFirst[5];
    document.querySelector('section#pqFirst > div:nth-of-type(2) > div:nth-of-type(6) > div:nth-of-type(2)').innerHTML = lingua.pqFirst[6];
    document.querySelector('section#entendaMais > div:nth-of-type(1)').innerHTML = lingua.entendaMais[0];
    document.querySelector('section#entendaMais > div:nth-of-type(2)').innerHTML = lingua.entendaMais[1];
    document.querySelector('section#entendaMais button').innerHTML = lingua.entendaMais[2];
    document.querySelector('section#numeroFirstGroup > div:nth-of-type(1)').innerHTML = lingua.numeroFirstGroup[0];
    document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)').innerHTML = lingua.numeroFirstGroup[1];
    document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)').innerHTML = lingua.numeroFirstGroup[2];
    document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2)').innerHTML = lingua.numeroFirstGroup[3];
    document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(4) > div:nth-of-type(2)').innerHTML = lingua.numeroFirstGroup[4];
    document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(5) > div:nth-of-type(2)').innerHTML = lingua.numeroFirstGroup[5];
    document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(6) > div:nth-of-type(2)').innerHTML = lingua.numeroFirstGroup[6];
    document.querySelector('section#podemosAjudar > div:nth-of-type(1)').innerHTML = lingua.podemosAjudar[0];
    document.querySelector('section#podemosAjudar > div:nth-of-type(2) button').innerHTML = lingua.podemosAjudar[1];
  } else if (window.location.pathname == '/empresa.html') {
    if (idioma == 'us') {
      lingua = english.empresa;
    } else {
      lingua = portugues.empresa;
    }
    // console.log(lingua)
    document.querySelector("#inicial > section.historia.container > div:nth-of-type(2)").innerHTML = lingua.geral[0];
    document.querySelector("#inicial > section.historia.container > div:nth-of-type(3)").innerHTML = lingua.geral[1];
    document.querySelector("#inicial > section.historia.container > div:nth-of-type(4)").innerHTML = lingua.geral[2];
    document.querySelector("div[data-ett] div.texto").innerHTML = lingua.first[0];
    document.querySelector("div[data-ett] div.itens > span:nth-of-type(1)").innerHTML = lingua.first[1];
    document.querySelector("div[data-ett] div.itens > span:nth-of-type(2)").innerHTML = lingua.first[2];
    document.querySelector("div[data-ett] div.itens > span:nth-of-type(3)").innerHTML = lingua.first[3];
    document.querySelector("div[data-shift] div.texto").innerHTML = lingua.shift[0];
    document.querySelector("div[data-shift] div.itens > span:nth-of-type(1)").innerHTML = lingua.shift[1];
    document.querySelector("div[data-shift] div.itens > span:nth-of-type(2)").innerHTML = lingua.shift[2];
    document.querySelector("div[data-shift] div.itens > span:nth-of-type(3)").innerHTML = lingua.shift[3];
    document.querySelector("div[data-connecting] div.texto").innerHTML = lingua.recruit[0];
    document.querySelector("div[data-connecting] div.itens > span:nth-of-type(1)").innerHTML = lingua.recruit[1];
    document.querySelector("div[data-connecting] div.itens > span:nth-of-type(2)").innerHTML = lingua.recruit[2];
    document.querySelector("div[data-connecting] div.itens > span:nth-of-type(3)").innerHTML = lingua.recruit[3];
    document.querySelector("#procuraApoio > div:nth-child(1)").innerHTML = lingua.procurandoApoio[0];
    document.querySelector("#procuraApoio > div:nth-child(2) > a > button").innerHTML = lingua.procurandoApoio[1];
    document.querySelector("#valores > div:nth-child(1)").innerHTML = lingua.valores[0];
    document.querySelector("#valores > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").innerHTML = lingua.valores[1][0];
    document.querySelector("#valores > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)").innerHTML = lingua.valores[1][1];
    document.querySelector("#valores > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").innerHTML = lingua.valores[2][0];
    document.querySelector("#valores > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)").innerHTML = lingua.valores[2][1];
    document.querySelector("#valores > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)").innerHTML = lingua.valores[3][0];
    document.querySelector("#valores > div:nth-child(2) > div:nth-child(3) > div:nth-child(2)").innerHTML = lingua.valores[3][1];
    document.querySelector("#consultores > div:nth-child(1)").innerHTML = lingua.consultores[0];
    document.querySelector("#consultores > div:nth-child(2) > div:nth-child(1)").innerHTML = lingua.consultores[1];
    document.querySelector("#consultores > div:nth-child(2) > div:nth-child(2)").innerHTML = lingua.consultores[2];
    document.querySelector("#consultores > div:nth-child(2) > div:nth-child(3)").innerHTML = lingua.consultores[3];
    document.querySelector("#consultores > div:nth-child(2) > div:nth-child(4)").innerHTML = lingua.consultores[4];
    document.querySelector("#consultores > div:nth-child(2) > div:nth-child(5)").innerHTML = lingua.consultores[5];
    document.querySelector('section#podemosAjudar > div:nth-of-type(1)').innerHTML = lingua.podemosAjudar[0];
    document.querySelector('section#podemosAjudar > div:nth-of-type(2) button').innerHTML = lingua.podemosAjudar[1];
  } else if (window.location.pathname == '/candidato.html') {
    if (idioma == 'us') {
      lingua = english.candidato;
    } else {
      lingua = portugues.candidato;
    }
    // console.log(lingua)
    document.querySelector("#geral > div").innerHTML = lingua.geral;
    document.querySelector("div[data-cadastros] > div:nth-child(1) > a").innerText = lingua.emBreve.caixa1;
    document.querySelector("div[data-cadastros] > div:nth-child(3) > a").innerText = lingua.emBreve.caixa2;
    document.querySelector("#emBreve > div > div:nth-child(2)").innerHTML = lingua.emBreve.p3;
    document.querySelector("#emBreve > div > div:nth-child(3)").innerHTML = lingua.emBreve.p4;
    document.querySelector("#consciencia > div > div:nth-of-type(1)").innerHTML = lingua.consciencia.p1;
    document.querySelector("#consciencia > div > div:nth-of-type(2)").innerHTML = lingua.consciencia.p2;
    document.querySelector("#asseguramos > div:nth-child(1) > div:nth-child(2)").innerHTML = lingua.asseguramos.col1.p1;
    document.querySelector("#asseguramos > div:nth-child(1) > div:nth-child(3)").innerHTML = lingua.asseguramos.col1.p2;
    document.querySelector("#asseguramos > div:nth-child(2) > div:nth-child(2)").innerHTML = lingua.asseguramos.col2.p1;
    document.querySelector("#asseguramos > div:nth-child(2) > div:nth-child(3)").innerHTML = lingua.asseguramos.col2.p2;
    document.querySelector('section#podemosAjudar > div:nth-of-type(1)').innerHTML = lingua.podemosAjudar[0];
    document.querySelector('section#podemosAjudar > div:nth-of-type(2) button').innerHTML = lingua.podemosAjudar[1];
  } else if (window.location.pathname == '/faq.html') {
    if (idioma == 'us') {
      lingua = english.faq;
    } else {
      lingua = portugues.faq;
    }
    document.querySelector("#faq > div:nth-of-type(1)").innerHTML = lingua.titulos[0];
    document.querySelector("#faq > div:nth-of-type(2) > div:nth-of-type(1)").innerHTML = lingua.titulos[1];
    document.querySelector("#faq > div:nth-of-type(2) > div:nth-of-type(2)").innerHTML = lingua.titulos[2];
  }
}
function faq(tipo) {
  if (document.getElementById('flag-mobile').classList.contains('us-flag')) {
    if (tipo == 'candidato') {
      var perguntas = portugues.faq.candidato;
    } else {
      var perguntas = portugues.faq.empresa;
    }
  } else {
    if (tipo == 'candidato') {
      var perguntas = english.faq.candidato;
    } else {
      var perguntas = english.faq.empresa;
    }
  }
  document.querySelector("#faq > div.faq").innerHTML = '';
  perguntas.forEach(function (pergunta) {
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector("#faq > div.faq"),
      "tag": "ul"
    });
    criarElement({
      "id": false,
      "textoHtml": pergunta[0],
      "selector": true,
      "parent": document.querySelector("#faq > div.faq > ul:last-of-type"),
      "tag": "li"
    });
    criarElement({
      "id": false,
      "textoHtml": pergunta[1],
      "selector": true,
      "parent": document.querySelector("#faq > div.faq > ul:last-of-type"),
      "tag": "li"
    });
  });
}
window.addEventListener('load', function () {
  gerarRodape();
  var menuMobile = document.getElementById('menuSuspensoMobile');
  var toogleButton = document.getElementById('toogle');
  toogleButton.addEventListener('click', function () {
    toogleButton.classList.toggle("toogleCross");
    menuMobile.classList.toggle("showMobileMenu");
  });
  var facebook = document.querySelector("#rodape > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
  var whatsApp = document.querySelector("#rodape > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)");
  var linkedin = document.querySelector("#rodape > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)");
  facebook === null || facebook === void 0 ? void 0 : facebook.addEventListener('click', function () {
    window.open('https://www.facebook.com/firstrhgroup/');
  });
  whatsApp === null || whatsApp === void 0 ? void 0 : whatsApp.addEventListener('click', function () {
    window.open('https://api.whatsapp.com/send/?phone=5521997969897&text&app_absent=0');
  });
  linkedin === null || linkedin === void 0 ? void 0 : linkedin.addEventListener('click', function () {
    window.open('https://www.linkedin.com/company/firstrhgroup/');
  });
  var rodapeTop = document.querySelector("#rodape > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > a");
  rodapeTop === null || rodapeTop === void 0 ? void 0 : rodapeTop.addEventListener('click', function () {
    document.getElementById('inicial').scrollIntoView({
      behavior: 'smooth'
    });
  });
  var logoTop = document.querySelector("#inicial > section.header > div:nth-child(1)");
  logoTop.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
  var rodapeHome = document.querySelector("#rodape > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > a");
  rodapeHome === null || rodapeHome === void 0 ? void 0 : rodapeHome.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
  var rodapeEmpresa = document.querySelector("#rodape > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > a");
  rodapeEmpresa === null || rodapeEmpresa === void 0 ? void 0 : rodapeEmpresa.addEventListener('click', function () {
    window.location.href = 'empresa.html';
  });
  var rodapeCandidato = document.querySelector("#rodape > div:nth-child(1) > div:nth-child(4) > div:nth-child(5) > a");
  rodapeCandidato === null || rodapeCandidato === void 0 ? void 0 : rodapeCandidato.addEventListener('click', function () {
    window.location.href = 'candidato.html';
  });
  var rodapeDuvidas = document.querySelector("#rodape > div:nth-child(1) > div:nth-child(4) > div:nth-child(6) > a");
  rodapeDuvidas === null || rodapeDuvidas === void 0 ? void 0 : rodapeDuvidas.addEventListener('click', function () {
    window.location.href = 'faq.html';
  });
  var homeLink = document.querySelector("#menuSuspenso > a[home]");
  homeLink === null || homeLink === void 0 ? void 0 : homeLink.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
  var empresaLink = document.querySelector("#menuSuspenso > a[empresa]");
  empresaLink === null || empresaLink === void 0 ? void 0 : empresaLink.addEventListener('click', function () {
    window.location.href = 'empresa.html';
  });
  var candidatoLink = document.querySelector("#menuSuspenso > a[candidato]");
  candidatoLink === null || candidatoLink === void 0 ? void 0 : candidatoLink.addEventListener('click', function () {
    window.location.href = 'candidato.html';
  });
  var contatoLink = document.querySelector("#menuSuspenso > a[contato]");
  contatoLink === null || contatoLink === void 0 ? void 0 : contatoLink.addEventListener('click', function () {
    document.getElementById('rodape').scrollIntoView({
      behavior: 'smooth'
    });
  });
  var homeMobileLink = document.querySelector("#menuSuspensoMobile > a[home]");
  homeMobileLink === null || homeMobileLink === void 0 ? void 0 : homeMobileLink.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
  var empresaMobileLink = document.querySelector("#menuSuspensoMobile > a[empresa]");
  empresaMobileLink === null || empresaMobileLink === void 0 ? void 0 : empresaMobileLink.addEventListener('click', function () {
    window.location.href = 'empresa.html';
  });
  var candidatoMobileLink = document.querySelector("#menuSuspensoMobile > a[candidato]");
  candidatoMobileLink === null || candidatoMobileLink === void 0 ? void 0 : candidatoMobileLink.addEventListener('click', function () {
    window.location.href = 'candidato.html';
  });
  var duvidasMobileLink = document.querySelector("#menuSuspensoMobile > a[duvidas]");
  duvidasMobileLink === null || duvidasMobileLink === void 0 ? void 0 : duvidasMobileLink.addEventListener('click', function () {
    window.location.href = 'faq.html';
  });
  var contatoMobileLink = document.querySelector("#menuSuspensoMobile > a[contato]");
  contatoMobileLink === null || contatoMobileLink === void 0 ? void 0 : contatoMobileLink.addEventListener('click', function () {
    toogleButton.classList.toggle("toogleCross");
    menuMobile.classList.toggle("showMobileMenu");
    document.getElementById('rodape').scrollIntoView({
      behavior: 'smooth'
    });
  });
  var facebookCandidato = document.querySelector("#emBreve > div > div:nth-child(4) > div:nth-child(1)");
  facebookCandidato === null || facebookCandidato === void 0 ? void 0 : facebookCandidato.addEventListener('click', function () {
    window.open('https://www.facebook.com/firstrhgroup/');
  });
  var linkedinCandidato = document.querySelector("#emBreve > div > div:nth-child(4) > div:nth-child(2)");
  linkedinCandidato === null || linkedinCandidato === void 0 ? void 0 : linkedinCandidato.addEventListener('click', function () {
    window.open('https://www.linkedin.com/company/firstrhgroup/');
  });
  var faqCandidato = document.querySelector("#faq > div:nth-of-type(2) > div:nth-of-type(1)");
  var faqEmpresa = document.querySelector("#faq > div:nth-of-type(2) > div:nth-of-type(2)");
  faqCandidato === null || faqCandidato === void 0 ? void 0 : faqCandidato.addEventListener('click', function () {
    faqEmpresa.classList.remove('clicado');
    faqCandidato.classList.remove('clicado');
    faqCandidato.classList.add('clicado');
    faq('candidato');
  });
  faqEmpresa === null || faqEmpresa === void 0 ? void 0 : faqEmpresa.addEventListener('click', function () {
    faq('empresa');
    faqCandidato.classList.remove('clicado');
    faqEmpresa.classList.remove('clicado');
    faqEmpresa.classList.add('clicado');
  });
  /*var atualAno = new Date();
  var copyRight = document.querySelector('section#fechamento > div:nth-of-type(1');
  copyRight.innerHTML = 'FIRST RH GROUP &copy; 1997-' + atualAno.getFullYear() + '.';
  if ((atualAno.getMonth() + 1) < 3 || ((atualAno.getMonth() + 1) == 3) && atualAno.getDate() < 14) {
  	atualAno = atualAno.getFullYear() - 1;
  } else {
  	atualAno = atualAno.getFullYear();
  }
  if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
  	var titulo = document.querySelector('section.main > div:nth-of-type(1)');
  	titulo.innerHTML = 'Há ' + (atualAno - 1997) + ' anos conectando pessoas';
  	var contagem = document.querySelector('div[data-count]');
  	contagem.setAttribute('data-count', (atualAno - 1997));	
  } */

  var fundacao = new Date('1997-03-11');
  var hoje = new Date();
  var anos = hoje.getFullYear() - fundacao.getFullYear();
  if (hoje.getMonth() < fundacao.getMonth() || hoje.getMonth() == fundacao.getMonth() && hoje.getDate() < fundacao.getDate()) {
    anos--;
  }
  var titulo = document.querySelector('section.main > div:nth-of-type(1)');
  titulo.innerHTML = 'Há ' + anos + ' anos conectando pessoas';
  var flagMobile = document.getElementById('flag-mobile');
  flagMobile.addEventListener('click', function () {
    if (flagMobile.classList.contains('us-flag')) {
      localStorage.setItem('idioma', 'us');
      trocaLingua('us');
    } else {
      localStorage.removeItem('idioma');
      trocaLingua('br');
    }
    menuMobile.classList.toggle("showMobileMenu");
    toogleButton.classList.toggle("toogleCross");
  });
  var flag = document.getElementById('flag');
  flag.addEventListener("click", function () {
    if (flag.classList.contains('us-flag')) {
      trocaLingua('us');
      localStorage.setItem('idioma', 'us');
    } else {
      localStorage.removeItem('idioma');
      trocaLingua('br');
    }
  });
  var idioma = localStorage.getItem('idioma');
  if (idioma != null) {
    trocaLingua('us');
  }
});
var toogle = document.getElementById('toogle');
toogle.addEventListener("click", (e) => {
    if (document.getElementById('menuSuspensoMobile').classList.contains('showMenuMobile')) {
        document.getElementById('menuSuspensoMobile').classList.remove("showMenuMobile");
        document.getElementById('toogle').classList.remove("toogleCross");
    } else {
        document.getElementById('toogle').classList.add("toogleCross");
        document.getElementById('menuSuspensoMobile').classList.add("showMenuMobile");
    }
});

var botaoContato = document.querySelector('div#menuSuspenso > a:first-of-type');
botaoContato?.addEventListener("click", () => {
    contagemNumerosFirst();
});
var botaoContatoMobile = document.querySelector('div#menuSuspensoMobile > a:first-of-type');
botaoContatoMobile?.addEventListener("click", () => {
    contagemNumerosFirst();
    document.getElementById('menuSuspensoMobile').classList.remove("showMenuMobile");
    document.getElementById('toogle').classList.remove("toogleCross");
});

var flag = document.getElementById('flag');
flag.addEventListener("click", () => {
    if (flag.classList.contains('us-flag')) {
        flag.classList.remove("us-flag");
        flag.classList.add("br-flag");
        localStorage.setItem('firstrh-currentLing', 'us');
        trocaLingua('us');
    } else {
        flag.classList.remove("br-flag");
        flag.classList.add("us-flag");
        localStorage.setItem('firstrh-currentLing', 'br');
        trocaLingua('br');
    }
});
var flagMobile = document.getElementById('flag-mobile');
flagMobile?.addEventListener("click", () => {
    if (flagMobile.classList.contains('us-flag')) {
        flagMobile.classList.remove("us-flag");
        flagMobile.classList.add("br-flag");
        localStorage.setItem('firstrh-currentLing', 'us');
        trocaLingua('us');
    } else {
        flagMobile.classList.remove("br-flag");
        flagMobile.classList.add("us-flag");
        localStorage.setItem('firstrh-currentLing', 'br');
        trocaLingua('br');
    }
});

document.body.addEventListener("click", (e) => {
   if (document.querySelector('div.blackScreen') && e.srcElement.className == 'blackScreen') {
       document.querySelector('div.blackScreen div.modal_close')?.click();
   }
});
document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.querySelector('div.blackScreen div.modal_close')?.click();
    }
};
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return rect.top;
}
function criarModal(objeto) {
    var modal = criarElement({
        "attributes": {
            "class": "modal fadeInDown",
        },
        "parent": objeto.idBlackScreen,
        "tag": "div"
    });
    var top = criarElement({
        "id": false,
        "attributes": {
            "class": "modal_top",
            "style": "background-color:" + objeto.top.color,
        },
        "texto": objeto.top.texto,
        "parent": modal.id,
        "tag": "div"
    });
    criarElement({
        "id": false,
        "attributes": {
            "class": "modal_close",
            "onClick": "fadeOutBlackScreen();"
        },
        "texto": "X",
        "selector": true,
        "parent": document.querySelector("div#" + modal.id + " > div.modal_top"),
        "tag": "div"
    });
    var main = criarElement({
        "id": false,
        "attributes": {
            "class": "modal_main",
        },
        "texto": objeto.main.texto,
        "parent": modal.id,
        "tag": "div"
    });
    setTimeout(function () { document.getElementById(objeto.idBlackScreen).classList.remove('fadeOutBlackScreen'); }, 100);
    return modal.id;
}

var geral = {
    "div1": document.querySelector('section#geral > div:nth-of-type(1)'),
    "div2": document.querySelector('section#geral > div:nth-of-type(2)'),
    "div3": document.querySelector('section#geral > div:nth-of-type(3) > div:nth-of-type(1)'),
    "div4": document.querySelector('section#geral > div:nth-of-type(3) > div:nth-of-type(2)')
}
var ett_first = {
    "div1": document.querySelector('section#ett_first > div:nth-of-type(1)'),
    "div2": document.querySelector('section#ett_first > div:nth-of-type(2)'),
    "div3": document.querySelector('section#ett_first > div:nth-of-type(3)'),
    "button": document.querySelector('section#ett_first button')
}
var shift = {
    "div1": document.querySelector('section#shift > div:nth-of-type(1)'),
    "div2": document.querySelector('section#shift > div:nth-of-type(2)'),
    "div3": document.querySelector('section#shift > div:nth-of-type(3)'),
}
var recruit = {
    "div1": document.querySelector('section#recruit > div:nth-of-type(1)'),
    "div2": document.querySelector('section#recruit > div:nth-of-type(2)'),
    "div3": document.querySelector('section#recruit > div:nth-of-type(3)'),
}
var endereco = {
    "div1": document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)'),
    "div2": document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)'),
    "div3": document.querySelector('#rodape > div:nth-child(3) > a')
}
var bigNumbers = {
    "div": document.querySelector('section#numeroFirstGroup > div:nth-of-type(1)'),
    "number1": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)'),
    "number2": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)'),
    "number3": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2)'),
    "number4": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(4) > div:nth-of-type(2)'),
    "number5": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(5) > div:nth-of-type(2)'),
    "number6": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(6) > div:nth-of-type(2)'),
}

var distancia = {
    "geral": {
        "div1": getPosition(geral.div1).y,
        "div2": getPosition(geral.div2).y,
        "div3": getPosition(geral.div3).y,
        "div4": getPosition(geral.div4).y,
    },
    "ett_first": {
        "div2": getPosition(ett_first.div2).y,
        "div3": getPosition(ett_first.div3).y,
        "button": getPosition(ett_first.button).y,
    },
    "shift": {
        "div2": getPosition(shift.div2).y,
        "div3": getPosition(shift.div3).y,
    },
    "recruit": {
        "div2": getPosition(recruit.div2).y,
        "div3": getPosition(recruit.div3).y,
    }
}

var numbers_control = false;
var geral_control = false;
var ett_first_control = false;
var shift_control = false;
var recruit_control = false;
window.addEventListener("mousewheel", () => {
    var el1 = document.querySelector('section#geral')
    let numero1 = getOffset(el1);
    if(numero1 < 120 && geral_control == false) {
        geral_control == true;
        geral?.div4?.classList.add("fadeInDown");
    }
    var el2 = document.querySelector('section#ett_first')
    var numero2 = getOffset(el2);
    if(numero2 < 120 && ett_first_control == false) {
        ett_first_control == true;
        ett_first?.div1?.classList.add("fadeInDown");
    }
    var el3 = document.querySelector('section#shift')
    var numero3 = getOffset(el3);
    if(numero3 < 120 && shift_control == false) {
        shift_control == true;
        shift?.div1?.classList.add("fadeInDown");
    }
    var el4 = document.querySelector('section#recruit')
    var numero4 = getOffset(el4);
    if(numero4 < 120 && recruit_control == false) {
        recruit_control == true;
        recruit?.div1?.classList.add("fadeInDown");
    }
   var el5 = document.querySelector('section#numeroFirstGroup')
   var numero5 = getOffset(el5);
   if(numero5 < 120 && numbers_control == false) {
       numbers_control = true;
        contagemNumerosFirst();
    }    
});
/*
window.addEventListener("load", () => {
    comunicadoFraude();
});
*/
function contagemNumerosFirst() {
    $('.counter-value').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 5000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
}

async function comunicadoFraude() {
    var idBlackScreen = await blackScreen();
    var modal = criarElement({
        "attributes": {
            "class": "fadeInDown modal comunicado",
        },
        "parent": idBlackScreen,
        "tag": "div"
    });
    var top = criarElement({
        "id": false,
        "attributes": {
            "class": "modal_top comunicado_top",
        },
        "parent": modal.id,
        "tag": "div"
    });
    criarElement({
        "id": false,
        "texto": "IMPORTANTE",
        "selector": true,
        "parent": document.querySelector("div#" + modal.id + " > div.modal_top"),
        "tag": "div"
    });
    criarElement({
        "id": false,
        "attributes": {
            "class": "modal_close",
            "onClick": "fadeOutBlackScreen();"
        },
        "texto": "X",
        "selector": true,
        "parent": document.querySelector("div#" + modal.id + " > div.modal_top"),
        "tag": "div"
    });
    var main = criarElement({
        // "id": false,
        "attributes": {
            "class": "modal_main",
        },
        "parent": modal.id,
        "tag": "div"
    });
    criarElement({
        "id": false,
        "texto": "Em atenção aos colaboradores e clientes da empresa, viemos a público informar que respeitamos todos os protocolos de recrutamento, seleção e boas práticas de mercado.",
        "parent": main.id,
        "tag": "div"
    });
    criarElement({
        "id": false,
        "texto": "Nos últimos dias tivemos nosso nome envolvido em falsas oportunidades de emprego, com pré-requisitos que vão contra todos os valores e premissas da empresa. Em nossos 24 anos de trajetória, prezamos pela transparência em todos os nossos processos e serviços, com respeito a todos os nossos stakeholders. Com isso, informamos que nenhuma vaga divulgada por nossa empresa possui restrição de gênero, raça, opção sexual, formas estéticas e quaisquer formas de preconceito.",
        "parent": main.id,
        "tag": "div"
    });
    criarElement({
        "id": false,
        "texto": "Somente divulgamos vagas através de nosso site, de redes sociais e de sites de recrutamento e qualquer outro meio não deve ser considerado. NÃO Fazemos divulgação de vagas através de WhatsApp.",
        "parent": main.id,
        "tag": "div"
    });
    criarElement({
        "id": false,
        "parent": main.id,
        "tag": "div"
    });
    criarElement({
        "id": false,
        "attributes": {
            "src":"/img_aws/firstrh_group_logo-en.png"
        },
        "selector": true,
        "parent": document.querySelector("div.comunicado div.modal_main >div:last-of-type"),
        "tag": "img"
    });
    setTimeout(function () { document.getElementById(idBlackScreen).classList.remove('fadeOutBlackScreen'); }, 100);
    return modal.id;
}

async function oportunidadesForm() {
    var idBlackScreen = await blackScreen();
    await criarModal({
        "idBlackScreen": idBlackScreen,
        "top": {
            "color": "#007bff",
            "texto": "Oportunidades de Trabalho",
        },
        "main": {
            "color": "#007bff",
        }
    });
    await criarElement({
        "attributes": {
            "w3-include-html": "oportunidadesForm.html"
        },
        "selector": true,
        "parent": document.querySelector("div.modal_main"),
        "tag": "div"
    });
    await includeHTML();
}

function trocaLingua(lingua) {
    var lingua = JSON.parse(localStorage.getItem('firstrh-' + lingua));
    document.querySelector('div#menuSuspenso a:nth-of-type(1)').innerHTML = lingua.header.quemSomos;
    document.querySelector('div#menuSuspenso a:nth-of-type(2)').innerHTML = lingua.header.oportunidades;
    document.querySelector('div#menuSuspenso a:nth-of-type(3)').innerHTML = lingua.header.portal;
    document.querySelector('div#menuSuspensoMobile a:nth-of-type(1)').innerHTML = lingua.header.quemSomos;
    document.querySelector('div#menuSuspensoMobile a:nth-of-type(2)').innerHTML = lingua.header.oportunidades;
    document.querySelector('div#menuSuspensoMobile a:nth-of-type(3)').innerHTML = lingua.header.portal;

    document.querySelector('section.main div:nth-of-type(1)').innerHTML = lingua.main[0];
    document.querySelector('section.main div:nth-of-type(2)').innerHTML = lingua.main[1];
    document.querySelector('section.main div:nth-of-type(3)').innerHTML = lingua.main[2];
    document.querySelector('section.main div:nth-of-type(4)').innerHTML = lingua.main[3];
    document.querySelector('section.main button:nth-of-type(1)').innerHTML = lingua.main[4];

    geral.div1.innerHTML = lingua.geral[0];
    geral.div2.innerHTML = lingua.geral[1];
    geral.div3.innerHTML = lingua.geral[2];

    ett_first.div2.innerHTML = lingua.ett_first[0];
    ett_first.div3.innerHTML = lingua.ett_first[1];
    ett_first.button.innerHTML = lingua.ett_first[2];

    shift.div2.innerHTML = lingua.shift[0];
    shift.div3.innerHTML = lingua.shift[1];

    recruit.div2.innerHTML = lingua.recruit[0];
    recruit.div3.innerHTML = lingua.recruit[1];

    endereco.div1.innerHTML = lingua.endereco[0];
    endereco.div2.innerHTML = lingua.endereco[1];
    endereco.div3.innerHTML = lingua.endereco[2];

    bigNumbers.div.innerHTML = lingua.numeros[0];
    bigNumbers.number1.innerHTML = lingua.numeros[1];
    bigNumbers.number2.innerHTML = lingua.numeros[2];
    bigNumbers.number3.innerHTML = lingua.numeros[3];
    bigNumbers.number4.innerHTML = lingua.numeros[4];
    bigNumbers.number5.innerHTML = lingua.numeros[5];
    bigNumbers.number6.innerHTML = lingua.numeros[6];
}
function criarElement(objeto) {
    var elementoCriado = document.createElement(objeto.tag);
    if (objeto.id == null) {
        objeto.id = 'id-' + getRandomInt(10000000, 99999999);
    }
    if (objeto.id !== false) {
        elementoCriado.setAttribute("id", objeto.id);
    }
    if (objeto.attributes != null) {
        const attributes = Object.entries(objeto.attributes);
        attributes.forEach(val => {
            if (val[0] == 'required') {
                if (val[1] == false) {
                    elementoCriado.removeAttribute("required");
                }
                else {
                    elementoCriado.setAttribute("required", true);
                }
            }
            else if (val[0] == 'disabled') {
                if (val[1] == false) {
                    elementoCriado.removeAttribute("disabled");
                }
                else {
                    elementoCriado.setAttribute("disabled", true);
                }
            }
            else if (val[0] == 'checked') {
                if (val[1] == false) {
                    elementoCriado.setAttribute("checked", false);
                }
                else {
                    elementoCriado.setAttribute("checked", true);
                }
            }
            else if (val[0] == 'selected') {
                if (val[1] == false) {
                    elementoCriado.setAttribute("selected", false);
                }
                else {
                    elementoCriado.setAttribute("selected", true);
                }
            }
            else {
                elementoCriado.setAttribute(val[0], val[1]);
            }
        });
    }
    if (objeto.texto != null) {
        var textnode = document.createTextNode(objeto.texto);
        elementoCriado.appendChild(textnode);
    }
    if (objeto.textoHtml != null) {
        elementoCriado.innerHTML = objeto.textoHtml;
    }
    if (objeto.selector != null) {
        var elementoDestino = objeto.parent;
    }
    else {
        var elementoDestino = document.getElementById(objeto.parent);
    }
    if (objeto.target == 'before') {
        elementoDestino.before(elementoCriado);
    }
    else if (objeto.target == 'after') {
        elementoDestino.after(elementoCriado);
    }
    else {
        if (objeto.posicao == 'prepend') {
            elementoDestino.prepend(elementoCriado);
        }
        else {
            elementoDestino.appendChild(elementoCriado);
        }
    }
    return ({
        "id": objeto.id
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function getCEP(cep) {
    $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function (data) {
        return (data);
    });
}
function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
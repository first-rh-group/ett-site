function contagemNumerosFirst(tempoExpansao) {
    var contadores = document.querySelectorAll('.counter-value');
    contadores.forEach((elemento) => {
        var valorInicial = 0;
        var valorFinal = elemento.getAttribute('data-count');
        var intervalo = tempoExpansao / valorFinal;
        var contagem = setInterval(contador,intervalo);
        function contador() {
            valorInicial += 1; 
            elemento.innerHTML = valorInicial;
            if(valorInicial == valorFinal) {
                clearInterval(contagem)
            }
        }
    })
}

// var entendaMaisButton = document.querySelector('section#entendaMais button');
// var entendaMaisButtonFind = false;
var numerosDiv = document.getElementById('numeroFirstGroup');
var numerosDivFind = false;
var solucoesHumanasDiv = document.querySelector('section#solucoesHumanas > div:nth-of-type(2)');
var solucoesHumanasFind = false;
var porque1 = document.querySelector('#pqFirst > div:nth-of-type(2) > div:nth-of-type(1)');
var porqueFind1 = false;
var porque2 = document.querySelector('#pqFirst > div:nth-of-type(2) > div:nth-of-type(2)');
var porqueFind2 = false;
var porque3 = document.querySelector('#pqFirst > div:nth-of-type(2) > div:nth-of-type(3)');
var porqueFind3 = false;
var porque4 = document.querySelector('#pqFirst > div:nth-of-type(2) > div:nth-of-type(4)');
var porqueFind4 = false;
var porque5 = document.querySelector('#pqFirst > div:nth-of-type(2) > div:nth-of-type(5)');
var porqueFind5 = false;
var porque6 = document.querySelector('#pqFirst > div:nth-of-type(2) > div:nth-of-type(6)');
var porqueFind6 = false;
var procura1 = document.querySelector("#procuroVagas > div:nth-child(2) > div:nth-child(1)");
var procura1Find = false;
window.addEventListener('wheel', (evento) => {
    if(numerosDivFind == false) {
        var numerosDivPos = numerosDiv.getBoundingClientRect();
        if(numerosDivPos.y < (window.innerHeight * 0.7)) {
            numerosDivFind = true;
            contagemNumerosFirst(6000);
        }
    }
    if(porqueFind1 == false) {
        var porque1Pos = porque1.getBoundingClientRect();
        if(porque1Pos.y < (window.innerHeight * 0.75)) {
            porqueFind1 = true;
            porque1.classList.add('fadeInUp');
        }
    }
    if(porqueFind2 == false) {
        var porque2Pos = porque2.getBoundingClientRect();
        if(porque2Pos.y < (window.innerHeight * 0.75)) {
            porqueFind2 = true;
            porque2.classList.add('fadeInUp');
        }
    }
    if(porqueFind3 == false) {
        var porque3Pos = porque3.getBoundingClientRect();
        if(porque3Pos.y < (window.innerHeight * 0.75)) {
            porqueFind3 = true;
            porque3.classList.add('fadeInUp');
        }
    }
    if(porqueFind4 == false) {
        var porque4Pos = porque4.getBoundingClientRect();
        if(porque4Pos.y < (window.innerHeight * 0.75)) {
            porqueFind4 = true;
            porque4.classList.add('fadeInUp');
        }
    }
    if(porqueFind5 == false) {
        var porque5Pos = porque5.getBoundingClientRect();
        if(porque5Pos.y < (window.innerHeight * 0.75)) {
            porqueFind5 = true;
            porque5.classList.add('fadeInUp');
        }
    }
    if(porqueFind6 == false) {
        var porque6Pos = porque6.getBoundingClientRect();
        if(porque6Pos.y < (window.innerHeight * 0.75)) {
            porqueFind6 = true;
            porque6.classList.add('fadeInUp');
        }
    }
    if(solucoesHumanasFind == false) {
        var solucoesHumanasPos = solucoesHumanasDiv.getBoundingClientRect();
        if(solucoesHumanasPos.y < (window.innerHeight * 0.65)) {
            solucoesHumanasFind = true;
            solucoesHumanasDiv.classList.add('bounceInUp');
        }
    }
    if(procura1Find == false) {
        var procura1Pos = procura1.getBoundingClientRect();
        if(procura1Pos.y < (window.innerHeight * 0.85)) {
            procura1Find = true;
            procura1.classList.add('fadeInDown');
            document.querySelector("#procuroVagas > div:nth-child(2) > div:nth-child(3)").classList.add('fadeInDown');
        }
    }
})
window.addEventListener('touchmove', (evento) => {
    if(numerosDivFind == false) {
        var numerosDivPos = numerosDiv.getBoundingClientRect();
        if(numerosDivPos.y < (window.innerHeight * 0.2)) {
            numerosDivFind = true;
            contagemNumerosFirst(6000);
        }
    }
    if(porqueFind1 == false) {
        var porque1Pos = porque1.getBoundingClientRect();
        if(porque1Pos.y < (window.innerHeight * 0.25)) {
            porqueFind1 = true;
            porque1.classList.add('fadeInUp');
        }
    }
    if(porqueFind2 == false) {
        var porque2Pos = porque2.getBoundingClientRect();
        if(porque2Pos.y < (window.innerHeight * 0.25)) {
            porqueFind2 = true;
            porque2.classList.add('fadeInUp');
        }
    }
    if(porqueFind3 == false) {
        var porque3Pos = porque3.getBoundingClientRect();
        if(porque3Pos.y < (window.innerHeight * 0.25)) {
            porqueFind3 = true;
            porque3.classList.add('fadeInUp');
        }
    }
    if(porqueFind4 == false) {
        var porque4Pos = porque4.getBoundingClientRect();
        if(porque4Pos.y < (window.innerHeight * 0.25)) {
            porqueFind4 = true;
            porque4.classList.add('fadeInUp');
        }
    }
    if(porqueFind5 == false) {
        var porque5Pos = porque5.getBoundingClientRect();
        if(porque5Pos.y < (window.innerHeight * 0.25)) {
            porqueFind5 = true;
            porque5.classList.add('fadeInUp');
        }
    }
    if(porqueFind6 == false) {
        var porque6Pos = porque6.getBoundingClientRect();
        if(porque6Pos.y < (window.innerHeight * 0.25)) {
            porqueFind6 = true;
            porque6.classList.add('fadeInUp');
        }
    }
    if(solucoesHumanasFind == false) {
        var solucoesHumanasPos = solucoesHumanasDiv.getBoundingClientRect();
        if(solucoesHumanasPos.y < (window.innerHeight * 0.25)) {
            solucoesHumanasFind = true;
            solucoesHumanasDiv.classList.add('fadeInUp');
        }
    }
    if(procura1Find == false) {
        var procura1Pos = procura1.getBoundingClientRect();
        if(procura1Pos.y < (window.innerHeight * 0.25)) {
            procura1Find = true;
            procura1.classList.add('fadeInDown');
            document.querySelector("#procuroVagas > div:nth-child(2) > div:nth-child(3)").classList.add('fadeInDown');
        }
    }
})
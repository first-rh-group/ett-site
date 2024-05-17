"use strict";

function contagemNumerosFirst(tempoExpansao) {
  var contadores = document.querySelectorAll('.counter-value');
  contadores.forEach(function (elemento) {
    var valorInicial = 0;
    //var valorFinal = elemento.getAttribute('data-count');
    var tipo = elemento.getAttribute('data-type');
    var intervalo = tempoExpansao / valorFinal;
    var contagem = setInterval(contador, intervalo);
    function contador() {
      valorInicial += 1;
      console.log(tipo);
      if (valorFinal >= 700) {
        if (tipo) {
          elemento.innerHTML = "+" + valorInicial;
        } else {
          elemento.innerHTML = "" + valorInicial;
        }
      } else if (valorFinal === 95) {
        elemento.innerHTML = valorInicial + "%";
      } else {
        elemento.innerHTML = valorInicial;
      }
      if (valorInicial == valorFinal) {
        clearInterval(contagem);
      }
    }
  });
}
var threshold = 0.9;
if (window.innerWidth <= 450) {
  threshold = 0.2;
} else if (window.innerWidth <= 912) {
  threshold = 0.5;
}
var procuro = document.querySelector('section#procuroVagas');
var maisRecursosLinha = document.querySelector('section#solucoesHumanas');
var observatorio = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.target.id == 'procuroVagas' && entry.isIntersecting == true) {
      document.querySelector("#procuroVagas > div:nth-child(2) > div:nth-child(1)").classList.add('fadeInDown');
      setTimeout(function () {
        document.querySelector("#procuroVagas > div:nth-child(2) > div:nth-child(3)").classList.add('fadeInDown');
      }, 250);
      observatorio.unobserve(entry.target);
    }
    if (entry.target.id == 'solucoesHumanas' && entry.isIntersecting == true) {
      setTimeout(function () {
        document.querySelector("#solucoesHumanas > div:nth-child(2)").classList.add('bounceInUp');
      }, 350);
      observatorio.unobserve(entry.target);
    }
  });
}, {
  threshold: threshold
});
observatorio.observe(procuro);
observatorio.observe(maisRecursosLinha);
var observerPorque = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting == true) {
      var time = getRandomInt(0, 850);
      setTimeout(function () {
        entry.target.classList.add('fadeInUp');
      }, time);
      observerPorque.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.65
});
document.querySelectorAll('#pqFirst > div:nth-of-type(2) > div').forEach(function (porque) {
  observerPorque.observe(porque);
});
var numerosLinha = document.querySelector('section#numeroFirstGroup');
var observerNumeros = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting == true) {
    contagemNumerosFirst(6000);
    observerNumeros.unobserve(entries[0].target);
  }
}, {
  threshold: 0.3
});
observerNumeros.observe(numerosLinha);
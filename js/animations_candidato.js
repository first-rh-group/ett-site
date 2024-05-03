"use strict";

document.querySelector("#menuSuspenso > a[candidato]").classList.add('selecionado');
var threshold = 1;
if (window.innerWidth <= 450) {
  threshold = 0.2;
} else if (window.innerWidth <= 912) {
  threshold = 0.5;
}
var Consciencia = document.querySelector('section#consciencia');
var observerConsciencia = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting == true) {
    document.querySelector('section#consciencia > div > div:first-of-type').classList.add('fadeInDown');
    setTimeout(function () {
      document.querySelector('section#consciencia > div > div:last-of-type').classList.add('fadeInUp');
    }, 1000);
  }
}, {
  threshold: threshold
});
observerConsciencia.observe(Consciencia);
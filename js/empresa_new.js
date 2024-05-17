"use strict";

let imgElement = document.querySelector("div[data-go-first] > img");
if (imgElement) {
  imgElement.addEventListener('click', function () {
    let sectionElement = document.querySelector("section[data-empresas]");
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
    } else {
      console.log('Elemento "section[data-empresas]" não encontrado');
    }
  });
} else {
  console.log('Elemento "div[data-go-first] > img" não encontrado');
}

document.querySelector("div[data-go-first] > img").addEventListener('click', function () {
  document.querySelector("section[data-empresas]").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start"
  });
});
document.querySelector("button[data-ver-certificados]").addEventListener('click', function (e) {
  document.querySelector("div[data-certificados]").classList.add('show');
  document.querySelector("div[data-certificados] div.close").addEventListener('click', function (e) {
    e.target.parentElement.classList.remove('show');
  }, {
    once: true
  });
});
document.querySelector("button[data-ver-parceiros]").addEventListener('click', function (e) {
  document.querySelector("div[data-parceiros]").classList.add('show');
  document.querySelector("div[data-parceiros] div.close").addEventListener('click', function (e) {
    e.target.parentElement.classList.remove('show');
  }, {
    once: true
  });
});
document.querySelector("div[data-certificado-mtp]").addEventListener('click', function () {
  window.open('documentacao/certificado_min_trabalho.pdf');
});
document.querySelector("div[data-certificado-assertem]").addEventListener('click', function () {
  window.open('documentacao/certificado_assertem.pdf');
});
document.querySelector("div[data-parceiro=\"leader\"]").addEventListener('click', function () {
  window.open('https://leaderetalent.com.br/');
});
document.querySelector("div[data-parceiro=\"rio\"]").addEventListener('click', function () {
  window.open('https://rio123.io/');
});
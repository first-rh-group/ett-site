"use strict";

var cpfUsuario = document.querySelector('input#cpfUsuario');
cpfUsuario === null || cpfUsuario === void 0 ? void 0 : cpfUsuario.addEventListener('keyup', function () {
  formatacaoEspecifica(cpfUsuario.value, 'cpf', 'cpfUsuario');
  if (soNumeros(cpfUsuario.value).length == 11) {
    if (valida_CPF(cpfUsuario.value)) {
      changeAttributes({
        "selector": "section#login button",
        "removeClass": ['nohand', 'btn-secondary', 'btn-danger'],
        "addClass": ['btn-success'],
        "htmlText": "Login no sistema",
        "attributes": {
          "onclick": "login();",
          "type": "submit"
        }
      });
    } else {
      changeAttributes({
        "selector": "section#login button",
        "removeClass": ['btn-success', 'btn-secondary'],
        "addClass": ['nohand', 'btn-danger'],
        "htmlText": "Confira o CPF",
        "attributes": {
          "onclick": false
        }
      });
    }
  } else {
    changeAttributes({
      "selector": "section#login button",
      "removeClass": ['btn-success', 'btn-danger'],
      "addClass": ['nohand', 'btn-secondary'],
      "htmlText": "Login no sistema",
      "attributes": {
        "onclick": false,
        "type": "button"
      }
    });
  }
});
window.addEventListener("load", function () {
  if (valida_CPF(cpfUsuario === null || cpfUsuario === void 0 ? void 0 : cpfUsuario.value)) {
    changeAttributes({
      "selector": "section#login button",
      "removeClass": ['nohand', 'btn-secondary', 'btn-danger'],
      "addClass": ['btn-success'],
      "htmlText": "Login no sistema",
      "attributes": {
        "onclick": "login();",
        "type": "submit"
      }
    });
  }
});
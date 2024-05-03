"use strict";

var _i18next = _interopRequireDefault(require("i18next"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_i18next["default"].init({
  lng: 'pt',
  resources: {
    en: {
      translation: {
        "group": "The Group",
        "solutions": "Solutions",
        "opportunities": "Opportunities",
        "faq": "FAQ",
        "contact": "Contact"
      }
    },
    pt: {
      translation: {
        "group": "O grupo",
        "solutions": "Soluções",
        "opportunities": "Oportunidades",
        "faq": "Dúvidas",
        "contact": "Contato"
      }
    }
  }
}, function (err, t) {
  if (err) {
    console.log('Erro ao inicializar i18next:', err);
    return;
  }
  var menuItems = {
    group: document.querySelector('a[empresa]'),
    solutions: document.querySelector('a[href="./solucoes.html"]'),
    opportunities: document.querySelector('a[candidato]'),
    faq: document.querySelector('a[href="./faq.html"]'),
    contact: document.querySelector('a[contato]')
  };
  Object.keys(menuItems).forEach(function (key) {
    var item = menuItems[key];
    if (item) {
      item.textContent = t(key);
    }
  });
  var languageButton = document.querySelector('#flag');
  languageButton.addEventListener('click', function () {
    var newLanguage = _i18next["default"].language === 'pt' ? 'en' : 'pt';
    _i18next["default"].changeLanguage(newLanguage);
    languageButton.textContent = newLanguage.toUpperCase();
    Object.keys(menuItems).forEach(function (key) {
      var item = menuItems[key];
      if (item) {
        item.textContent = _i18next["default"].t(key);
      }
    });
  });
});
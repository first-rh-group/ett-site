import i18next from 'i18next';

i18next.init({
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
}, function(err, t) {
  if (err) {
    console.log('Erro ao inicializar i18next:', err);
    return;
  }

  const menuItems = {
    group: document.querySelector('a[empresa]'),
    solutions: document.querySelector('a[href="./solucoes.html"]'),
    opportunities: document.querySelector('a[candidato]'),
    faq: document.querySelector('a[href="./faq.html"]'),
    contact: document.querySelector('a[contato]')
  };

  Object.keys(menuItems).forEach(key => {
    const item = menuItems[key];
    if (item) {
      item.textContent = t(key);
    }
  });
const languageButton = document.querySelector('#flag');

languageButton.addEventListener('click', () => {
  const newLanguage = i18next.language === 'pt' ? 'en' : 'pt';
  i18next.changeLanguage(newLanguage);

  languageButton.textContent = newLanguage.toUpperCase();

  Object.keys(menuItems).forEach(key => {
    const item = menuItems[key];
    if (item) {
      item.textContent = i18next.t(key);
    }
  });
});
});
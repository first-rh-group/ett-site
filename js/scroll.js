var scene = new ScrollMagic.Scene({
    triggerElement: '#secao1',
    duration: '100%'
  })
  .setPin('#secao1')
  .on('enter', function () {
    console.log('Entrou na seção 1');
  })
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '#secao2',
    duration: '100%'
  })
  .setPin('#secao2')
  .on('enter', function () {
    console.log('Entrou na seção 2');
  })
  .addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: '#secao3',
    duration: '100%'
  })
  .setPin('#secao3')
  .on('enter', function () {
    console.log('Entrou na seção 3');
  })
  .addTo(controller);
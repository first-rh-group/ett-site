import {Translate} from '@google-cloud/translate';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obter o __dirname no contexto ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crie uma instância do cliente
const translate = new Translate({
  keyFilename: path.join(__dirname, 'traducao-423517-27bf62b94262.json')  // Caminho real para o arquivo JSON de credenciais
});

// Seu HTML em português
const htmlContent = `
<section class="historia container">
  <div id="inicial"> 
    <img src="./new_img/LOGO MENOR.png" alt="">
  </div>
  <div style="line-height: 1.3;">
    A First RH Group é composta por três empresas, com <strong>mais de 27 anos de atuação no mercado nacional:</strong> <br><br>
    A <strong>ETT First RH</strong> é reconhecida pela contratação de <strong>mão de obra temporária</strong> e a <strong>SHIFT Gestão de Serviços</strong> é especializada em soluções para projetos de <strong>terceirização de serviços.</strong> Já a <strong>First Connecting</strong> é responsável pela busca de experiências únicas em <strong>soluções de Recursos Humanos</strong> e seus subsistemas.
  </div>
  <div style="line-height: 1.1;">
    Acreditamos no poder da interação e, por isso, <strong>conectamos <br> pessoas a oportunidades.</strong>
  </div>
  <div class="button-container">
    <a target="_blank" href="./solucoes.html"><button class="retangular-button">Conheça as nossas soluções!</button></a>
  </div>
</section>
`;

// Função para traduzir HTML
async function translateHtml(html) {
  try {
    const [translation] = await translate.translate(html, 'en');
    return translation;
  } catch (error) {
    console.error('Erro ao traduzir:', error);
  }
}

// Use a função de tradução
translateHtml(htmlContent).then(translatedHtml => {
  console.log(translatedHtml);
});

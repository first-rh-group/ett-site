import React from 'react';

class Solucoes extends React.Component {
    render() {
        return (
            <div>
                <div id="toogle">
                    <div className="toogleCross"></div>
                    <div className="toogleCross"></div>
                    <div className="toogleCross"></div>
                </div>
                <section className="imagem-texto" data-aos="fade-down">
                    <div>
                        <img src="./img_menor/PÁGINA O GRUPO 2.webp" alt="Imagem 1" />
                        <button className="call-to-action">Fale com o nosso especialista!</button>
                    </div>
                    <div>
                        <p><strong>Contratação temporária</strong></p>
                        <p>Substituição eventual de seus empregados efetivos quando afastados por férias, licenças médicas e/ou outros, ou quando há demandas complementares e/ou extraordinárias de serviços.</p>
                        <p>Prazo de contratação: 180 dias, consecutivos ou não. Porém, quando necessário, pode ser prorrogado por, no máximo, 90 dias, totalizando 270 dias.</p>
                        <p>Somos reconhecidos e capazes de trazer as melhores soluções para demandas sazonais à sua organização, com agilidade, contratações assertivas e economia.</p>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <p style={{marginRight: '10px'}}>Veja nossos certificados:</p>
                            <a href="https://firstrhgroup.com/documentacao/certificado_assertem.pdf" target="_blank" style={{marginRight: '10px', marginBottom: '27px'}}>
                                <img src="./new_img/ASSERTTEM LOGO SEM FUNDO.png" alt="Certificado ASSERTTEM" style={{width: '100px', height: 'auto'}} />
                            </a>
                            <a href="https://firstrhgroup.com/documentacao/certificado_min_trabalho.pdf" target="_blank">
                                <img src="./new_img/MTE LOGO SEM FUNDO.png" alt="Certificado MTE" style={{width: '100px', height: 'auto', marginBottom: '27px'}} />
                            </a>
                        </div>
                        <hr className="hr-especifico1" />
                    </div>
                </section>
                {/* Continue convertendo o restante do seu HTML para JSX aqui */}
            </div>
        );
    }
}

export default Solucoes;